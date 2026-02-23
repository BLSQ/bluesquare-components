export function styles(theme: any): {
    commentRoot: {
        padding: string;
        margin: string;
    };
    commentAuthor: {
        margin: number;
        textAlign: string;
    };
    commentPostingTime: {
        textAlign: string;
        color: any;
    };
    commentGrid: {
        justifyContent: string;
        padding: string;
    };
    replyToComment: {
        textAlign: string;
    };
    commentText: {
        textAlign: string;
        marginTop: string;
    };
    toggleCommentText: {
        alignSelf: string;
        cursor: string;
        color: string;
        '&:hover': {
            textDecoration: string;
        };
    };
    expandThread: {
        textAlign: string;
    };
    button: {
        backgroundColor: string;
        color: string;
    };
    childComment: {
        paddingLeft: string;
    };
};
export const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "commentRoot" | "commentAuthor" | "commentPostingTime" | "commentGrid" | "replyToComment" | "commentText" | "toggleCommentText" | "expandThread" | "childComment">;
