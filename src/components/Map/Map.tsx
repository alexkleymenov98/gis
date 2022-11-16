import React, {FC} from 'react';

import 'leaflet/dist/leaflet.css'

import './Map.styles.css';
import {useCustomHook} from "./useCustomHook";
import { Settings } from '@mui/icons-material';
import {Box, Checkbox, Drawer, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from "@mui/material";
import {baseMaps} from "./consts";
import {BaseMap} from "./Base/Base";


const Map:FC = ()=>{
    const {
        center,
        baseMap,
        isSettings,
        onCloseSettings,
        toggleSettings,
        handleSelectsChange,
        geoJSON,
        isShowGeoJSON,
        setIsShowGeoJSON
    } = useCustomHook();
    return (
        <div className="map-container">
            <div className="map-settings" onClick={toggleSettings}>
                <Settings/>
            </div>
            <Drawer
                anchor='right'
                className='sidebar'
                open={isSettings}
                onClose={onCloseSettings}
            >
                <Box sx={{
                    padding: '30px 15px 15px 15px',
                    width: '300px'
                }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Базовая карта</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={baseMap}
                            label="Базовая карта"
                            onChange={handleSelectsChange}
                        >
                            {baseMaps.map(({value, label})=>
                                <MenuItem key={value} value={value}>{label}</MenuItem>
                            )}
                        </Select>
                        <FormControlLabel
                            checked={isShowGeoJSON}
                            onChange={(e,checked)=>{
                                setIsShowGeoJSON(checked);
                            }}
                            control={<Checkbox />}
                            label="Включить слой"
                        />
                    </FormControl>
                </Box>
            </Drawer>
            <BaseMap center={center} baseMap={baseMap} geoJSON={geoJSON} isShowGeoJSON={isShowGeoJSON}/>
        </div>
    )
}

export default Map;