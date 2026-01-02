import { FunctionComponent } from 'react';
type Props = {
    avatar?: string;
    author: string;
    content: string;
    postingTime?: string;
    actionText?: string;
    onAddComment?: (newComment: string, id?: number) => void;
    id?: number;
};
export declare const SingleComment: FunctionComponent<Props>;
export {};
