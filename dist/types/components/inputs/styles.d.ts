declare const styles: (theme: any) => {
    inputLabel: {
        color: string;
        paddingLeft: number;
        paddingRight: number;
        transition: any;
    };
    shrink: {
        fontSize: number;
        marginTop: number;
        backgroundColor: string;
    };
    popupIndicator: {
        marginRight: string;
        marginLeft: string;
    };
    clearIndicator: {
        marginTop: number;
    };
    hasClearIcon: {
        '& .MuiAutocomplete-inputRoot': {
            paddingRight: string;
        };
    };
};
declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"inputLabel" | "shrink" | "popupIndicator" | "clearIndicator" | "hasClearIcon">;
export { styles, useStyles };
