export function mapStyles(theme: any): {
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
