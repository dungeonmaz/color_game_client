import { Grid, Paper } from '@mui/material'
import React from 'react'
import Changelog from './Changelog'
import Games from './Games'

const Home = () => {
    return (
        <Paper elevation={3} sx={{ m: '2% 5%' }}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Games />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Changelog />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Home