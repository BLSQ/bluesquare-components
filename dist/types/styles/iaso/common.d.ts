import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles';
export declare type CommonStyles = {
    (theme: Theme): {
        [key: string]: CSSProperties;
    };
};
export declare const commonStyles: CommonStyles;
