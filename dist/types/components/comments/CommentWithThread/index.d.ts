import { FunctionComponent } from 'react';
type Props = {
    comments?: {
        id: number;
        avatar?: string;
        author: string;
        comment: string;
        dateTime?: string;
    }[];
    actionText?: string;
    onAddComment?: (newComment: string, id?: number) => void;
    parentId?: number;
};
export declare const CommentWithThread: FunctionComponent<Props>;
export {};
