import { FunctionComponent } from 'react';
import { Accept } from 'react-dropzone';
type Props = {
    multi?: boolean;
    onFilesSelect: (files: File[]) => void;
    files: File[];
    accept?: Accept;
    placeholder?: string;
    required?: boolean;
    errors?: string[];
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
