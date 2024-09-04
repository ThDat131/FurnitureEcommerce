import { Box, ButtonGroup, IconButton, MenuItem, Select } from "@mui/material";
import {
    HEADINGS,
    LOW_PRIORITY,
    RichTextAction,
    RICH_TEXT_OPTIONS,
} from "../LexicalEditor.constant";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
    $getSelection,
    $isRangeSelection,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    FORMAT_ELEMENT_COMMAND,
    FORMAT_TEXT_COMMAND,
    REDO_COMMAND,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND,
} from "lexical";
import { useEffect, useState } from "react";
import { $wrapNodes } from "@lexical/selection";
import { useKeyBindings } from "../hooks/useKeyBindings";
import ColorPlugin from "./ColoPickerPlugin";
import ListPlugin from "./ListPlugin";
import { $isListNode, ListNode } from "@lexical/list";
import { mergeRegister, $getNearestNodeOfType } from "@lexical/utils";
import {
    HeadingTagType,
    $createHeadingNode,
    $isHeadingNode,
} from "@lexical/rich-text";
import ImagePlugin from "./ImagePlugin";

const Divider = () => (
    <Box sx={{ backgroundColor: '#aaa', margin: '0 6px', height: 4, width: '1px' }}></Box>
);

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();
    const [disableMap, setDisableMap] = useState<{ [id: string]: boolean }>({
        [RichTextAction.Undo]: true,
        [RichTextAction.Redo]: true,
    });
    const [selectionMap, setSelectionMap] = useState<{ [id: string]: boolean }>(
        {}
    );
    const [blockType, setBlockType] = useState("paragraph");

    const updateToolbar = () => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            const newSelectionMap = {
                [RichTextAction.Bold]: selection.hasFormat("bold"),
                [RichTextAction.Italics]: selection.hasFormat("italic"),
                [RichTextAction.Underline]: selection.hasFormat("underline"),
                [RichTextAction.Strikethrough]: selection.hasFormat("strikethrough"),
                [RichTextAction.Superscript]: selection.hasFormat("superscript"),
                [RichTextAction.Subscript]: selection.hasFormat("subscript"),
            };
            setSelectionMap(newSelectionMap);

            const anchorNode = selection.anchor.getNode();
            const element =
                anchorNode.getKey() === "root"
                    ? anchorNode
                    : anchorNode.getTopLevelElementOrThrow();
            const elementKey = element.getKey();
            const elementDOM = editor.getElementByKey(elementKey);

            if (!elementDOM) return;

            if ($isListNode(element)) {
                const parentList = $getNearestNodeOfType(anchorNode, ListNode);
                const type = parentList ? parentList.getTag() : element.getTag();
                setBlockType(type);
            } else {
                const type = $isHeadingNode(element)
                    ? element.getTag()
                    : element.getType();
                setBlockType(type);
            }
        }
    };


    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    updateToolbar();
                });
            }),
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                (payload) => {
                    updateToolbar();
                    return false;
                },
                LOW_PRIORITY
            ),
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setDisableMap((prevDisableMap) => ({
                        ...prevDisableMap,
                        undo: !payload,
                    }));
                    return false;
                },
                LOW_PRIORITY
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setDisableMap((prevDisableMap) => ({
                        ...prevDisableMap,
                        redo: !payload,
                    }));
                    return false;
                },
                LOW_PRIORITY
            )
        );
    }, [editor]);

    const onAction = (id: RichTextAction) => {
        switch (id) {
            case RichTextAction.Bold: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
                break;
            }
            case RichTextAction.Italics: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
                break;
            }
            case RichTextAction.Underline: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
                break;
            }
            case RichTextAction.Strikethrough: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
                break;
            }
            case RichTextAction.Superscript: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
                break;
            }
            case RichTextAction.Subscript: {
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
                break;
            }
            case RichTextAction.LeftAlign: {
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
                break;
            }
            case RichTextAction.RightAlign: {
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
                break;
            }
            case RichTextAction.CenterAlign: {
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
                break;
            }
            case RichTextAction.JustifyAlign: {
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
                break;
            }
            case RichTextAction.Undo: {
                editor.dispatchCommand(UNDO_COMMAND, undefined);
                break;
            }
            case RichTextAction.Redo: {
                editor.dispatchCommand(REDO_COMMAND, undefined);
                break;
            }
        }
    };

    useKeyBindings({ onAction });

    const updateHeading = (heading: HeadingTagType) => {
        editor.update(() => {
            const selection = $getSelection();

            if ($isRangeSelection(selection)) {
                $wrapNodes(selection, () => $createHeadingNode(heading));
            }
        });
    };

    return (
        <>
            <Box display="flex" gap={2} mb={1}>
                <ButtonGroup variant="outlined" size="small">
                    <Select
                        size="small"
                        displayEmpty
                        defaultValue="p"
                        onChange={(e) => {
                            updateHeading(e.target.value as HeadingTagType);
                        }}
                    >
                        {HEADINGS.map((heading) => (
                            <MenuItem key={heading} value={heading}>
                                {heading}
                            </MenuItem>
                        ))}
                    </Select>
                    {RICH_TEXT_OPTIONS.map(({ id, label, icon, fontSize }: { id: any, label: any, icon: any, fontSize: any }) =>
                        id === RichTextAction.Divider ? (
                            <Divider key={id} />
                        ) : (
                            <IconButton
                                key={id}
                                aria-label={label}
                                onClick={() => onAction(id)}
                                disabled={disableMap[id]}
                                sx={{ fontSize }}
                                color={selectionMap[id] ? 'primary' : 'inherit'}
                            >
                                {icon}
                            </IconButton>
                        )
                    )}
                </ButtonGroup>
            </Box>
            <Box display="flex" gap={2} mb={1}>
                <ColorPlugin />
                <ListPlugin blockType={blockType} />
            </Box>
        </>
    );
}
