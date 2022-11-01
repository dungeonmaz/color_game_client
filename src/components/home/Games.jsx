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
                <GamesCard img={img1} description={"In this game you need to guess name of the color"} name={"Guess Color Name"} />
            </Stack>
        </div>
    )
}

export default Games