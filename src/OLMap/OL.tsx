import React, {FC} from 'react';

import TemplateMap from "../Template/TemplateMap";
import OLMap from "./index";


export const OL:FC = ()=>{
    return (
        <TemplateMap>
            {({center, baseMap,isShowGeoJSON, geoJSON, zoom })=>{
                return (<OLMap center={center as number[]} baseMap={baseMap} geoJSON={geoJSON} isShowGeoJSON={isShowGeoJSON} zoom={zoom} />)
            }}
        </TemplateMap>
    )
}