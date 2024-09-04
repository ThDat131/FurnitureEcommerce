import React, { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import {
    $getSelection,
    $isRangeSelection,
    SELECTION_CHANGE_COMMAND,
} from "lexical";
import {
    $patchStyleText,
    $getSelectionStyleValueForProperty,
} from "@lexical/selection";
import { mergeRegister } from "@lexical/utils";
import ColorPicker from "@/components/ColorPicker";
import { LOW_PRIORITY } from "../LexicalEditor.constant";

export default function ColorPlugin() {
    const [editor] = useLexicalComposerContext();
    const [{ color, bgColor }, setColors] = useState({
        color: "#000",
        bgColor: "#fff",
    });

    const updateToolbar = () => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
            const color = $getSelectionStyleValueForProperty(
                selection,
                "color",
                "#000"
            );
            const bgColor = $getSelectionStyleValueForProperty(
                selection,
                "background",
                "#fff"
            );
            setColors({ color, bgColor });
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
            )
        );
    }, [editor]);

    const updateColor = ({
        property,
        color,
    }: {
        property: "background" | "color";
        color: string;
    }) => {
        editor.update(() => {
            const selection = $getSelection();
            if (selection) $patchStyleText(selection, { [property]: color });
        });
    };

    return (
        <>
            <ColorPicker
                color={color}
                onChange={(color) => {
                    updateColor({ property: "color", color });
                }}
                icon={< FormatColorTextIcon />}
            />
            <ColorPicker
                color={bgColor}
                onChange={(color) => {
                    updateColor({ property: "background", color });
                }}
                icon={<FormatColorFillIcon />}
            />
        </>
    );
}