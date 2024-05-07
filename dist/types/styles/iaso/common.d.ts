import { Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';
export type CommonStyles = {
    (theme: Theme): {
        [key: string]: CSSProperties;
    };
};
export declare const commonStyles: CommonStyles;
