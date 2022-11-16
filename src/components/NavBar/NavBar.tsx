import {AppBar, Badge, Box, IconButton, Toolbar, Tooltip} from "@mui/material";
import {FC} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../../icons/bell';
import { Users as UsersIcon } from '../../icons/users';

type DashboardNavbarProps = {
    onSidebarOpen: ()=>void;
}

export const DashboardNavbar:FC<DashboardNavbarProps> = (props) => {
    const { onSidebarOpen, ...other } = props;

    return (
        <>
            <AppBar
                sx={{
                    left: {
                        lg: 280
                    },
                    width: {
                        lg: 'calc(100% - 280px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: 'inline-flex',
                                lg: 'none'
                            }
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Tooltip title="Search">
                        <IconButton sx={{ ml: 1 }}>
                            <SearchIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Contacts">
                        <IconButton sx={{ ml: 1 }}>
                            <UsersIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ ml: 1 }}>
                            <Badge
                                badgeContent={4}
                                color="primary"
                                variant="dot"
                            >
                                <BellIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </>
    );
};