import React, { FunctionComponent } from 'react';
import { Accept } from 'react-dropzone';
type Props = {
    multi?: boolean;
    onFilesSelect: (files: File[]) => void;
    files: File[];
    accept?: Accept;
    disabled?: boolean;
    children: React.ReactNode;
    dragZoneHeight?: string;
};
export declare const dragzoneStyle: (theme: any) => {
    outlined: {
        border: string;
        backgroundColor: any;
        cursor: string;
    };
    text: {
        color: any;
    };
};
export declare const FilesUploadContainer: FunctionComponent<Props>;
export {};
