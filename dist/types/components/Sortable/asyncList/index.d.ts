import { FC, FunctionComponent } from 'react';
import { SxProps, Theme } from '@mui/material';
import { RenderProps } from './types';
type Props = {
    items: any[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FunctionComponent<RenderProps>;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: any[];
    }) => void;
};
export declare const ScenarioRulesContainer: FC<Props>;
export {};
