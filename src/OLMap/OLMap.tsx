import React, {useRef, useState, useEffect, FC, PropsWithChildren} from "react"
import "./OLMap.css";
import MapContext from "./OLMapContext";
import * as ol from "ol";
import {TMap} from "./types";
import {MapOptions} from "ol/Map";

interface OLMapProps {
    zoom: number;
    center: number[];
}

const Map:FC<PropsWithChildren<OLMapProps>> = ({ children, zoom, center }) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<TMap>(null);
    // on component mount
    useEffect(() => {
        let options:MapOptions = {
            view: new ol.View({ zoom, center, }),
            layers: [],
            controls: [],
            overlays: [],
        };

        let mapObject = new ol.Map(options);
        mapObject.setTarget(mapRef.current as HTMLDivElement);
        setMap(mapObject);
        return () => mapObject.setTarget(undefined);
    }, []);
    // zoom change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setZoom(zoom);
    }, [zoom]);
    // center change handler
    useEffect(() => {
        if (!map) return;
        map.getView().setCenter(center)
    }, [center])
    return (
        <MapContext.Provider value={{ map }}>
            <div ref={mapRef} className="ol-map">
                {children}
            </div>
        </MapContext.Provider>
    )
}
export default Map;