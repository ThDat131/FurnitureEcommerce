import type { } from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import { getDesignTokens } from './themePrimitives';
import {
    chartsCustomizations,
    dataGridCustomizations,
    datePickersCustomizations,
    treeViewCustomizations,
    layoutComponentsCustomizations,
    menuComponentsCustomizations,
} from './customizations';

export default function getDashboardTheme(mode: PaletteMode): ThemeOptions {
    return {
        ...getDesignTokens(mode),
        components: {

        },
    };
}
