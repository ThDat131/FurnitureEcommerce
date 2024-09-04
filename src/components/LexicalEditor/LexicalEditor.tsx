'use client'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HeadingNode } from '@lexical/rich-text'
import './LexicalEditor.scss'
import { Box, Typography } from '@mui/material';
import ToolbarPlugin from './plugin/toolbar';
import { EditorThemeClasses } from 'lexical';
import { css } from "@emotion/css";
import CustomOnChangePlugin from './plugin/CustomOnChangePlugin';
import { useMemo } from 'react';
import { ListNode, ListItemNode } from '@lexical/list'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { ImageNode } from './nodes/ImageNode';

function onError(error: any) {
    console.error(error);
}

const theme: EditorThemeClasses = {
    text: {
        bold: css({ fontWeight: "bold" }),
        underline: css({ textDecoration: "underline" }),
        strikethrough: css({ textDecoration: "line-through" }),
        underlineStrikethrough: css({ textDecoration: "underline line-through" }),
        italic: css({ fontStyle: "italic" }),
    },
};

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    name: string;
    error: boolean | undefined;
    helperText: string | undefined | boolean;
}

const Editor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder, name, error, helperText }) => {
    const initialConfig = useMemo(
        () => ({
            namespace: name,
            theme,
            onError,
            nodes: [HeadingNode, ListNode, ListItemNode],
        }),
        [name]
    );

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <ToolbarPlugin />
            <CustomOnChangePlugin value={value} onChange={onChange} />
            <HistoryPlugin />
            <ListPlugin />
            <Box position={'relative'}>
                <RichTextPlugin
                    contentEditable={<ContentEditable className={`content-editor ${error && 'error'}`} />}
                    placeholder={<div className='content-placeholder'>Enter some text...</div>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
            </Box>
            {error && <Typography my={2} color='error'>{helperText}</Typography>}
        </LexicalComposer>
    );
}

export default Editor