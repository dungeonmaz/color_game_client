import { Stack } from '@mui/system'
import React from 'react'
import img1 from '../../images/Starege.png'
import GamesCard from './GamesCard'

const Games = () => {
    return (
        <Stack sx={{ borderRight: { xs: "none", md: "solid white 2px" }, borderBottom: { xs: "solid white 2px", md: "none" } }} p="1rem">
            <GamesCard img={img1} description={"Abobasdqwdeasda dqw dasd qwd a"} name={"Guess Color Name"}/>
        </Stack>
    )
}

export default Games