import React from "react";
import { IconButton } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    REMOVE_LIST_COMMAND,
} from "@lexical/list";

interface ListPluginProps {
    blockType: string;
}

export default function ListPlugin({ blockType }: ListPluginProps) {
    const [editor] = useLexicalComposerContext();

    return (
        <>
            <IconButton
                aria-label="Add Ordered list"
                size="small"
                color="default"
                onClick={() => {
                    if (blockType === "ol") {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
                    }
                }}
            >
                <FormatListNumberedIcon />
            </IconButton>
            <IconButton
                aria-label="Add Unordered List"
                size="small"
                color="default"
                onClick={() => {
                    if (blockType === "ul") {
                        editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
                    } else {
                        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
                    }
                }}
            >
                <FormatListBulletedIcon />
            </IconButton>
        </>
    );
}
