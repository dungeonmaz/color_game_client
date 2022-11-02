import React from 'react'
import { Dialog, DialogContent, DialogTitle, Typography, Paper, Button } from '@mui/material'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const ColorEndDialog = ({ score, playerColor, answerColor, btnSx, restartGame }) => {
    const navigate = useNavigate()
    return (
        <Dialog open={true}>
            <DialogTitle sx={{ textAlign: 'center' }}>Game Over</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <Typography>Score: {score}</Typography>
                <Stack spacing={1} alignItems="center">
                    <Stack spacing={1} direction="row">
                        <Typography>Your Answer:</Typography>
                        <Typography>{playerColor[1]}</Typography>
                    </Stack>
                    <Paper elevation={3} sx={{ aspectRatio: '1 / 1', width: '60px', backgroundColor: `#${playerColor[0]}`, borderRadius: '1rem' }} />
                </Stack>
                <Stack spacing={1} alignItems="center">
                    <Stack spacing={1} direction="row">
                        <Typography>Correct Answer:</Typography>
                        <Typography>{answerColor[1]}</Typography>
                    </Stack>
                    <Paper elevation={3} sx={{ aspectRatio: '1 / 1', width: '60px', backgroundColor: `#${answerColor[0]}`, borderRadius: '1rem' }} />
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

export default ColorEndDialog