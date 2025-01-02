export function styles(theme: any): {
    textAreaContainer: {
        width: string;
        marginTop: string;
    };
    textArea: {
        width: string;
        borderRadius: string;
        borderColor: string;
        padding: string;
        resize: string;
    };
    left: {
        textAlign: string;
    };
    right: {
        textAlign: string;
    };
    center: {
        textAlign: string;
    };
    commentConfirmButton: {
        marginBottom: string;
        marginLeft: string;
    };
    button: {
        color: string;
        backgroundColor: string;
    };
};
export const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"button" | "left" | "right" | "center" | "textArea" | "textAreaContainer" | "commentConfirmButton">;
