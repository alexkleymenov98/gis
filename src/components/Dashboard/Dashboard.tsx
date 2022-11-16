import React, {FC, PropsWithChildren} from 'react';
import {Box} from "@mui/material";

import './dashboard.styles.css';

const Dashboard: FC<PropsWithChildren<unknown>> = ({children})=>{
    return (
        <>
            <div className="dashboard-layout">
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </div>
        </>
    )
}
export default Dashboard;