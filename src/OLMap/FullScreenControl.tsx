import { useContext, useEffect } from "react";
import { FullScreen } from "ol/control";
import MapContext from "./OLMapContext";

const FullScreenControl = () => {
    const { map } = useContext(MapContext);
    // @ts-ignore
    useEffect(() => {
        if (!map) return;
        let fullScreenControl = new FullScreen({});
        // @ts-ignore
        map.controls.push(fullScreenControl);

        // @ts-ignore
        return () => map.controls.remove(fullScreenControl);
    }, [map]);
    return null;
};
export default FullScreenControl;