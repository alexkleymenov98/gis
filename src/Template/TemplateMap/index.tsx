import React, {FC} from 'react';
import {useCustomHook} from "../../components/Map/useCustomHook";
import {Settings} from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Drawer,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import {baseMaps} from "../../components/Map/consts";
import {useNavigate} from "react-router-dom";

type TemplateMapProps = {
    children: (data: Pick<ReturnType<typeof useCustomHook>, 'center' | 'baseMap' | 'isShowGeoJSON' | 'geoJSON' | 'zoom'>)=>React.ReactNode;
}

const TemplateMap:FC<TemplateMapProps> = ({children})=>{

    const {
        center,
        baseMap,
        isSettings,
        onCloseSettings,
        toggleSettings,
        handleSelectsChange,
        geoJSON,
        isShowGeoJSON,
        setIsShowGeoJSON,
        zoom,
    } = useCustomHook();

    const navigate = useNavigate();


    const redirectToHome = ()=>{
        navigate('/');
    }

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
                    <Button onClick={()=>redirectToHome()}>Вернуться на главную</Button>
                </Box>
            </Drawer>
            {children({baseMap, center, geoJSON, isShowGeoJSON, zoom})}
        </div>
    )
};

export default TemplateMap;