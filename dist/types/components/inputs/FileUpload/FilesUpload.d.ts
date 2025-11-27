import { FunctionComponent } from 'react';
import { Accept } from 'react-dropzone';
import { SxProps } from '@mui/material';
type Props = {
    multi?: boolean;
    onFilesSelect: (files: File[]) => void;
    files: File[];
    accept?: Accept;
    placeholder?: string;
    required?: boolean;
    errors?: string[];
    disabled?: boolean;
    sxInput?: SxProps;
    sxText?: SxProps;
};
export declare const dragzoneStyle: (theme: any) => {
    outlined: {
        border: string;
        height: string;
        backgroundColor: any;
    };
    text: {
        color: any;
    };
};
export declare const FilesUpload: FunctionComponent<Props>;
export {};
