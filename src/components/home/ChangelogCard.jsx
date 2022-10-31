import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Typography, CardContent } from '@mui/material'

const cardSx = {
    display: 'flex',
    p: '1rem',
    m: '1rem 0',
}

const ChangelogCard = ({ description, name }) => {
    const navigate = useNavigate()
    return (
        <Card sx={cardSx} onClick={() => navigate('/guess_color_name')}>
            <CardContent sx={{width:'100%'}}>
                <Typography textAlign="center" sx={{ typography: { xs: 'h5', sm: 'h4' } }}>{name}</Typography>
                <Typography sx={{ typography: { xs: 'body2', sm: 'body1' } }}>{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default ChangelogCard