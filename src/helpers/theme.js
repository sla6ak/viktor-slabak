import { createTheme } from '@mui/material';

const customTheme = {
    colors: {
        white: '#FFFFFF',
        accent: '#4A56E2',
        text: '#000000',
        helperText: '#BDBDBD',
        iconColor: '#E0E0E0',
        fone: '#E5E5E5',
        error: '#97000099',
        hoverWhite: '#eef',
        category: {
            education: '#81E1FF',
        },
    },
    spacing: value => `${4 * value}px`,
};

export const materialTheme = createTheme(customTheme);
