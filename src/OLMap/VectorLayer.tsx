import {FC, useContext, useEffect} from "react";
import MapContext from "./OLMapContext";
import OLVectorLayer from "ol/layer/Vector";

interface VectorLayerProps {
    zIndex?: number;
    style: any;
    source: any;
}

const VectorLayer: FC<VectorLayerProps> = ({ source, style, zIndex = 0 }) => {
    const { map } = useContext(MapContext);
    useEffect(() => {
        if (!map) return;
        let vectorLayer = new OLVectorLayer({
            source,
            style
        });
        map.addLayer(vectorLayer);
        vectorLayer.setZIndex(zIndex);
        return () => {
            if (map) {
                map.removeLayer(vectorLayer);
            }
        };
    }, [map]);
    return null;
};
export default VectorLayer;