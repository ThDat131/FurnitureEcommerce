import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import SubscriptIcon from '@mui/icons-material/Subscript';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

export enum RichTextAction {
  Bold = "bold",
  Italics = "italics",
  Underline = "underline",
  Strikethrough = "strikethrough",
  Superscript = "superscript",
  Subscript = "subscript",
  LeftAlign = "leftAlign",
  CenterAlign = "centerAlign",
  RightAlign = "rightAlign",
  JustifyAlign = "justifyAlign",
  Divider = "divider",
  Undo = "undo",
  Redo = "redo",
}

export const RICH_TEXT_OPTIONS: any = [
  { id: RichTextAction.Bold, icon: <FormatBoldIcon />, label: "Bold" },
  { id: RichTextAction.Italics, icon: <FormatItalicIcon />, label: "Italics" },
  { id: RichTextAction.Underline, icon: <FormatUnderlinedIcon />, label: "Underline" },
  { id: RichTextAction.Divider },
  {
    id: RichTextAction.Strikethrough,
    icon: <StrikethroughSIcon />,
    label: "Strikethrough",
  },
  {
    id: RichTextAction.Superscript,
    icon: <SuperscriptIcon />,
    label: "Superscript",
  },
  {
    id: RichTextAction.Subscript,
    icon: <SubscriptIcon />,
    label: "Subscript",
  },
  { id: RichTextAction.Divider },
  {
    id: RichTextAction.LeftAlign,
    icon: <FormatAlignLeftIcon />,
    label: "Align Left",
  },
  {
    id: RichTextAction.CenterAlign,
    icon: <FormatAlignCenterIcon />,
    label: "Align Center",
  },
  {
    id: RichTextAction.RightAlign,
    icon: <FormatAlignRightIcon />,
    label: "Align Right",
  },
  {
    id: RichTextAction.JustifyAlign,
    icon: <FormatAlignJustifyIcon />,
    label: "Align Justify",
  },

  { id: RichTextAction.Divider },
  {
    id: RichTextAction.Undo,
    icon: <UndoIcon />,
    label: "Undo",
  },
  {
    id: RichTextAction.Redo,
    icon: <RedoIcon />,
    label: "Redo",
  },
];

export const LOW_PRIORITY = 1;
export const HEADINGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];