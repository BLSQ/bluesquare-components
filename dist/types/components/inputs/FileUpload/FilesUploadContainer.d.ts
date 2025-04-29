import React, { FunctionComponent } from 'react';
import { Accept } from 'react-dropzone';
type Props = {
    multi?: boolean;
    onFilesSelect: (files: File[]) => void;
    files: File[];
    accept?: Accept;
    disabled?: boolean;
    hideIfDropZone?: boolean;
    children: React.ReactElement;
};
export declare const dragzoneStyle: (theme: any) => {
    outlined: {
        border: string;
        backgroundColor: any;
    };
    text: {
        color: any;
    };
};
export declare const FilesUploadContainer: FunctionComponent<Props>;
export {};
