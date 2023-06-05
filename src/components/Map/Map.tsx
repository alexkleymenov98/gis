import React, {FC} from 'react';

import 'leaflet/dist/leaflet.css'

import './Map.styles.css';
import {BaseMap} from "./Base/Base";
import TemplateMap from "../../Template/TemplateMap";


const Map:FC = ()=>{
    return (
        <TemplateMap>
            {({baseMap, center, isShowGeoJSON, geoJSON})=>
                (<BaseMap center={center} baseMap={baseMap} geoJSON={geoJSON} isShowGeoJSON={isShowGeoJSON}/>)}
        </TemplateMap>
    )
}

export default Map;