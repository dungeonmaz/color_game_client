import { Grid } from '@mui/material'
import React from 'react'
import OneColor from './OneColor'

const ColorsContainer = ({colors, checkAnswer}) => {
    return (
        <Grid container spacing={2} p={2} justifyContent="center">
            {colors.map((el, index) => (
                <Grid item xs={4} md={2} key={index}>
                <OneColor color={el} num={index+1} checkAnswer={checkAnswer}/>
            </Grid>
            ))}
        </Grid>
    )
}

export default ColorsContainer