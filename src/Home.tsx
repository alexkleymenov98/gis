import React,{FC} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Box} from "@mui/material";

const Home:FC = ()=>{
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column'
        }}>
            <h1>Выбрать карту</h1>
            <Box sx={{
                display: 'flex',
                minWidth: '250px',
                justifyContent: 'space-around'
            }}>
                <Button variant='contained' onClick={()=>navigate('/ol')}>Open Layer</Button>
                <Button variant='contained' onClick={()=>navigate('/leaflet')}>Leaflet</Button>
            </Box>
        </Box>
    )
}
export default Home;