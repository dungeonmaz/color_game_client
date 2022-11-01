import React from 'react'
import { Card, Typography, CardContent } from '@mui/material'

const cardSx = {
    display: 'flex',
    p: '1rem',
    m: '1rem 0',
    flexShrink: 0,
}

const ChangelogCard = ({ description, name }) => {
    return (
        <Card sx={cardSx}>
            <CardContent sx={{width:'100%'}}>
                <Typography textAlign="center" sx={{ typography: { xs: 'h5', sm: 'h4' } }}>{name}</Typography>
                <Typography sx={{ typography: { xs: 'body2', sm: 'body1' } }}>{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default ChangelogCard