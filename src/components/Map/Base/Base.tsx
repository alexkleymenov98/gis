import React, {FC} from 'react';
import {FeatureGroup, GeoJSON, MapContainer, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import {baseMaps} from "../consts";
import {FeatureCollection} from "geojson";

type TBaseProps = {
    center: LatLngExpression;
    baseMap: string;
    geoJSON: FeatureCollection | null;
    isShowGeoJSON: boolean;
}

export const BaseMap:FC<TBaseProps> = ({baseMap, center, isShowGeoJSON, geoJSON})=>{
    return (
        <MapContainer center={center} zoom={10} scrollWheelZoom={false}>
            {baseMaps.map(({value})=>{
                if(value === baseMap){
                    return (
                        <TileLayer
                            key={value}
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url={value}
                        />
                    )
                }
                return null;
            })}
            <FeatureGroup>
                {isShowGeoJSON && geoJSON && <GeoJSON data={geoJSON}/>}
            </FeatureGroup>
        </MapContainer>
    )
}