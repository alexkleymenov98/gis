import {useCallback, useEffect, useState} from "react";
import {LatLngExpression} from "leaflet";
import {SelectChangeEvent} from "@mui/material";
import {FeatureCollection} from "geojson";

export const useCustomHook = ()=>{
    const [center] = useState<LatLngExpression>([48.7194, 44.5018]);
    const [baseMap, setBaseMap] = useState('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    const [isSettings, setIsSettings] = useState(false);
    const [isShowGeoJSON, setIsShowGeoJSON] = useState(false);
    const [geoJSON, setGeoJSON] = useState<FeatureCollection | null>(null);

    const toggleSettings = useCallback(()=>{
        setIsSettings((prev)=>!prev);
    },[])

    const onCloseSettings = useCallback(()=>{
        setIsSettings(false);
    },[]);

    const handleSelectsChange = (event: SelectChangeEvent) => {
        setBaseMap(event.target.value);
        onCloseSettings();
    };

    useEffect(()=>{
        if(isShowGeoJSON && !geoJSON){
            fetch('/geojson.json').then((response)=>{
                response.json().then((data)=>{
                    setGeoJSON(data);
                })
            });
        }
    },[geoJSON, isShowGeoJSON])



    return {
        center,
        baseMap,
        isSettings,
        onCloseSettings,
        toggleSettings,
        handleSelectsChange,
        isShowGeoJSON,
        geoJSON,
        setIsShowGeoJSON
    }
}