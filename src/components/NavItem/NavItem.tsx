import {Box, Button, ListItem} from "@mui/material";
import {FC, useState} from "react";
import * as React from "react";

type NavItemProps = {
    href: string;
    icon:React.ReactNode;
    title: string;
}

export const NavItem:FC<NavItemProps> = (props) => {
    const { href, icon, title, ...others } = props;
    const [active] = useState(false);

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
            }}
            {...others}
        >
            <Button
                component="a"
                startIcon={icon}
                disableRipple
                sx={{
                    backgroundColor: 'rgba(255,255,255, 0.08)',
                    borderRadius: 1,
                    color: active ? 'secondary.main' : 'neutral.300',
                    fontWeight: 'fontWeightBold',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: active ? 'secondary.main' : 'neutral.400'
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)'
                    }
                }
            }
            >
                <Box sx={{ flexGrow: 1 }}>
                    {title}
                </Box>
            </Button>
        </ListItem>
    );
};