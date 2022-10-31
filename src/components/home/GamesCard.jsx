import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Typography, CardMedia, CardContent } from '@mui/material'
import { Box } from '@mui/system'

const cardSx = {
    display: 'flex', 
    p: '1rem', 
    m:'1rem 0',
    transition: 'transform 0.3s',
    '&:hover': {
        transform:'scale(1.02)'
    }
}

const GamesCard = ({ img, description, name }) => {
    const navigate = useNavigate()
    return (
        <Card sx={cardSx} onClick={() => navigate('/guess_color_name')}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent >
                        <Typography sx={{ typography: { xs: 'body1', sm: 'h5' } }}>{name}</Typography>
                        <Typography sx={{ typography: { xs: 'body2', sm: 'body1' } }}>{description}</Typography>
                    </CardContent>
                </Box>
                <CardMedia component="img"
                    sx={{ width: {xs:"100px", sm:'150px'}, ml:'auto'}}
                    image={img}
                    alt="Color Game" />
            </Card>
    )
}

export default GamesCard