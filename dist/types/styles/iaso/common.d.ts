import { CSSProperties } from '@mui/material/styles/createTypography';
import { Theme } from '@mui/material/styles';
export type CommonStyles = {
    (theme: Theme): {
        [key: string]: CSSProperties;
    };
};
export declare const commonStyles: CommonStyles;
