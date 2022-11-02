import React from 'react'
import { Dialog, DialogContent, DialogTitle, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TimeGuessWinDialog = ({ time, btnSx, restartGame }) => {
    const navigate = useNavigate()
    const ms = time % 1000
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / (1000 * 60)) % 60)
    return (
        <Dialog open={true}>
            <DialogTitle sx={{ textAlign: 'center' }}>Win</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <Stack direction="row" justifyContent="center" ml="30px">
                    <Typography variant="h5" textAlign="center">{minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}</Typography>
                    <Typography variant="body1" textAlign="center" sx={{ width: '30px' }}>{ms}</Typography>
                </Stack>
                <Button variant='contained' sx={btnSx} onClick={() => restartGame()} >
                    Restart
                </Button>
                <Button variant='contained' sx={btnSx} onClick={() => navigate('/')} >
                    Exit
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default TimeGuessWinDialog