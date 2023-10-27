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
    containerFullHeight: {
        width: string;
        height: string;
        margin: number;
        overflow: string;
        backgroundColor: string;
    };
    containerFullHeightPadded: {
        [x: number]: {
            padding: any;
        };
        width: string;
        height: string;
        padding: any;
        margin: number;
        backgroundColor: string;
        overflow: string;
    };
    containerFullHeightNoTabPadded: {
        [x: number]: {
            padding: any;
        };
        width: string;
        height: string;
        padding: any;
        margin: number;
        overflow: string;
        backgroundColor: string;
    };
    indicator: {
        backgroundColor: string;
    };
    buttonIcon: {
        marginRight: any;
        width: number;
        height: number;
    };
    smallButtonIcon: {
        marginRight: any;
        width: number;
        height: number;
        position: string;
        top: number;
    };
    listitem: {
        width: string;
        paddingLeft: any;
    };
    marginY: {
        marginTop: any;
        marginBottom: any;
    };
    marginBottom: {
        marginBottom: any;
    };
    marginBottomBig: {
        marginBottom: any;
    };
    paddingBottomBig: {
        marginBottom: any;
    };
    marginLeft: {
        marginLeft: string;
    };
    marginRight: {
        marginRight: string;
    };
    marginTop: {
        marginTop: string;
    };
    marginTopBig: {
        marginTop: string;
    };
    justifyFlexEnd: {
        display: string;
        justifyContent: string;
    };
    floatRight: {
        float: string;
    };
    tabs: {
        padding: any;
    };
    textAlignLeft: {
        textAlign: string;
    };
    textAlignRight: {
        textAlign: string;
    };
    dividerMarginNeg: {
        margin: any;
    };
    containerMarginNeg: {
        margin: any;
        width: string;
    };
    relativeContainer: {
        position: string;
    };
    svgIcon: {
        width: number;
        heigth: number;
    };
    svgChipIcon: {
        width: number;
        heigth: number;
        padding: number;
    };
    textError: {
        color: any;
        display: string;
        alignItems: string;
    };
    popperFixed: {
        position: string;
    };
    iconButton: {
        padding: number;
    };
    linkButton: {
        color: string;
        textDecoration: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        height: any;
        width: any;
    };
    capitalize: {
        display: string;
        '&:first-letter': {
            textTransform: string;
        };
    };
    mapContainer: {
        height: string;
        marginBottom: any;
        '& .leaflet-container .leaflet-popup-content a': {
            color: any;
        };
        '& .marker-cluster.color': {
            color: string;
        };
        '& .marker-cluster.color div': {
            marginLeft: number;
            marginTop: number;
            display: string;
            justifyContent: string;
            alignItems: string;
        };
        '& .marker-cluster.color div .border': {
            position: string;
            display: string;
            height: string;
            width: string;
            top: number;
            left: number;
            borderRadius: string;
            zIndex: number;
        };
        '& .marker-cluster.primary': {
            backgroundColor: string;
        };
        '& .marker-cluster.primary > div': {
            backgroundColor: any;
            color: any;
        };
        '& .marker-custom': {
            zIndex: string;
        };
        '& .marker-custom.primary span': {
            position: string;
            display: string;
            height: string;
            width: string;
        };
        '& .marker-custom .marker_bg, & .marker-custom.primary .marker_bg': {
            position: string;
            display: string;
            height: string;
            width: string;
            borderRadius: string;
            backgroundColor: string;
            top: number;
            left: number;
        };
        '& .marker-custom.color': {
            zIndex: string;
        };
        '& .marker-custom.color .svg-icon': {
            display: string;
            height: string;
            width: number;
            position: string;
            top: number;
            left: number;
            zIndex: number;
            borderRadius: string;
        };
        '& .marker-custom.color .marker_shadow': {
            position: string;
            bottom: number;
            left: number;
            zIndex: number;
            pointerEvents: string;
        };
        '& .marker-custom.color svg': {
            position: string;
            bottom: number;
            left: number;
            pointerEvents: string;
        };
        '& .marker-custom.primary svg': {
            fill: any;
            position: string;
            bottom: number;
            left: number;
            pointerEvents: string;
        };
        '& path.primary': {
            fill: string;
            stroke: any;
        };
        '& path.secondary': {
            fill: string;
            stroke: any;
        };
        '& path.no-pointer-event': {
            pointerEvents: string;
        };
        '& .marker-custom.primary img': {
            position: string;
            bottom: number;
            left: number;
            zIndex: number;
            pointerEvents: string;
            width: string;
        };
        '& .leaflet-draw.leaflet-control': {
            display: string;
        };
    };
};
export const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"containerFullHeight" | "containerFullHeightPadded" | "containerFullHeightNoTabPadded" | "indicator" | "buttonIcon" | "marginRight" | "smallButtonIcon" | "marginBottom" | "marginLeft" | "marginTop" | "button" | "capitalize" | "listitem" | "marginY" | "marginBottomBig" | "paddingBottomBig" | "marginTopBig" | "justifyFlexEnd" | "floatRight" | "tabs" | "textAlignLeft" | "textAlignRight" | "dividerMarginNeg" | "containerMarginNeg" | "relativeContainer" | "svgIcon" | "svgChipIcon" | "textError" | "popperFixed" | "iconButton" | "linkButton" | "mapContainer" | "commentRoot" | "commentAuthor" | "commentPostingTime" | "commentGrid" | "replyToComment" | "commentText" | "toggleCommentText" | "expandThread" | "childComment">;
