export function mapPopupStyles(theme: any): {
    popup: {
        zIndex: number;
        '& .leaflet-popup-content-wrapper': {
            padding: number;
        };
        '& .leaflet-popup-content': {
            margin: number;
            minHeight: number;
            width: string;
            '& p.MuiTypography-root': {
                margin: number;
                fontSize: number;
            };
            '& .MuiGrid-root > div': {
                top: number;
            };
        };
        '& a.leaflet-popup-close-button': {
            color: string;
            backgroundColor: any;
            padding: number;
            top: string;
            right: string;
            borderRadius: string;
            height: string;
            width: string;
            display: string;
            justifyContent: string;
            alignItems: string;
        };
        '& a.leaflet-popup-close-button span': {
            position: string;
            top: string;
        };
        '& a.leaflet-popup-close-button:hover': {
            color: any;
            backgroundColor: string;
            border: string;
        };
    };
    popupListItemLabel: {
        textAlign: string;
        fontWeight: string;
        display: string;
        paddingRight: number;
    };
    popuplistItem: {
        textAlign: string;
    };
    popupCard: {
        height: string;
        width: string;
        borderRadius: number;
        overflow: string;
        boxShadow: string;
    };
    popupCardMedia: {
        height: number;
    };
    popupCardContent: {
        margin: any;
        overflow: string;
        wordBreak: string;
        padding: string;
    };
};
