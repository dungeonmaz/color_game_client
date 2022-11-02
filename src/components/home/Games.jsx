import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import img1 from '../../images/guessColorGameImage.png'
import GamesCard from './GamesCard'

const Games = () => {
    return (
        <div>
            <Typography textAlign="center" variant="h5" p={1}>Games</Typography>
            <Stack p="1rem">
                <GamesCard img={img1} description={"In this game you need to guess name of color. You can change settings to make game easier or harder"} 
                name={"Guess Color Name"} nav={"/guess_color_name"} />
                <GamesCard img={img1} description={"In this game you need to quickly guess name of color 10 times"} 
                name={"Time Guess"} nav={"/time_guess"} />
            </Stack>
        </div>
    )
}

export default Games