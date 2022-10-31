import { AppBar, Toolbar, Typography, Box, Divider, Button, IconButton, Drawer, Grid, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme()
    const navigate = useNavigate()

    const handleNavigate = (path) => navigate(path)

    const btnSx = {
        transition: 'transform 0.2s, background 0.3s',
        width: '80%',
        borderRadius: '0.5rem',
        '&:hover': {
            background: theme.palette.secondary.dark,
            transform: 'scale(1.05)'
        },
        '&:active': {
            transform: 'scale(0.95)'
        },
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const buttons = (
        <>
            <Grid item xs={6} md={2}>
                <Button variant='contained' sx={btnSx} onClick={() => handleNavigate("/")}>
                    Home
                </Button>
            </Grid>
            <Grid item xs={6} md={2}>
                <Button  variant='contained' sx={btnSx} onClick={() => handleNavigate("/guess_color_name")}>
                    Play
                </Button>
            </Grid>
            {/*<Grid item xs={6} md={2}>
                <Button variant='contained' sx={btnSx} onClick={() => handleNavigate("/scores")}>
                    Scores
                </Button>
            </Grid>
            <Grid item xs={6} md={2}>
                <Button variant='contained' sx={btnSx} onClick={() => handleNavigate("/profile")}>
                    Profile
                </Button>
            </Grid>*/}
        </>
    )

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2 }}>
                Color Game
            </Typography>
            <Divider sx={{ mb: '1rem' }} />
            <Grid container spacing={2} sx={{ mb: '1rem' }}>
                {buttons}
            </Grid>
        </Box>
    )


    return (
        <AppBar position='fixed' sx={{ top: 'auto', bottom: 0, }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Grid container sx={{ display: { xs: 'none', md: 'flex' }, }} justifyContent="center">
                    {buttons}
                </Grid>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    anchor='top'
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100vw' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Typography variant="h5" sx={{ width: { xs: '60vw', md: '20vw' } }}>
                    Color Game
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar