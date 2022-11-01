import { AppBar, Toolbar, Typography, Box, Divider, Button, IconButton, Drawer, Grid, useTheme, Popover, Paper } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme()
    const navigate = useNavigate()

    const handleNavigate = (path) => navigate(path)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                <Button variant='contained' sx={btnSx} onClick={handleClick}>
                    Play
                </Button>
                <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Paper elevation={3}>
                        <Grid container sx={{ p: 1, textAlign: 'center' }} spacing={1} >
                            <Grid item xs={12}>
                                <Button variant='contained' sx={btnSx} onClick={() => handleNavigate("/guess_color_name")}>
                                    Guess Name
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='contained' sx={btnSx} onClick={() => handleNavigate("/time_guess")}>
                                    Time Guess
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Popover>
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
        <Box sx={{ textAlign: 'center' }}>
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