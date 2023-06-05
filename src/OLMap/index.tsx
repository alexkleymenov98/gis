import React, {FC} from "react";
import OLMap from "./OLMap";
import {fromLonLat} from "ol/proj";
import Layers from "./Layers";
import TileLayer from "./TileLayer";
import GeoJSON from 'ol/format/GeoJSON';
import Controls from "./Controls";
import FullScreenControl from "./FullScreenControl";
import {FeatureCollection} from "geojson";
import VectorLayer from "./VectorLayer";
import vector from "./utils/vector";
import {styleFunction} from "./styles";
import {baseMaps} from "../components/Map/consts";
import {OSM, XYZ} from "ol/source";

interface TOpenLayerProps {
    center: number[];
    zoom: number;
    baseMap: string;
    geoJSON: FeatureCollection | null;
    isShowGeoJSON: boolean;
}

const OpenLayer:FC<TOpenLayerProps> = ({zoom , center, baseMap, isShowGeoJSON, geoJSON})=>{

    return (
        <div>
            <OLMap center={fromLonLat(center)} zoom={zoom}>
                <Layers>
                    {baseMaps.map(({value})=>{
                        if(value === baseMap){
                            return (
                                <TileLayer
                                    key={value}
                                    source={new OSM()}
                                    zIndex={0}
                                />
                            )
                        }
                        return null;
                    })}

                    {isShowGeoJSON && geoJSON && (
                        <VectorLayer
                            source={vector({features:new GeoJSON().readFeatures(geoJSON)})}
                            style={styleFunction}
                        />
                    )}
                </Layers>
                <Controls>
                    <FullScreenControl />
                </Controls>
            </OLMap>
        </div>
    )
}

export default OpenLayer;