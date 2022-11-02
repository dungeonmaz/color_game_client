import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, Button, Slider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { clampSetting, countScoreMod, saveSettings } from './settings'

const ColorOptionsMenu = ({ btnSx, restartGame, getSettings, handleSettings }) => {
    const [values, setValues] = useState({
        count: getSettings().count,
        skips: getSettings().skips,
    })

    const handleChange = () => {
        saveSettings(values)
        restartGame()
    }

    return (
        <Dialog open={true} onClose={handleSettings}>
            <DialogTitle sx={{ textAlign: 'center' }}>Settings</DialogTitle>
            <DialogContent >
                <Stack spacing={1}>
                    <Typography textAlign="center">Count</Typography>
                    <Stack direction="row" spacing={2}>
                        <Slider value={values.count} min={clampSetting.count.min} max={clampSetting.count.max} onChange={(event) => setValues({ ...values, count: event.target.value })} />
                        <Typography>{values.count}</Typography>
                    </Stack>
                    <Typography textAlign="center">Skips</Typography>
                    <Stack direction="row" spacing={2}>
                        <Slider value={values.skips} min={clampSetting.skips.min} max={clampSetting.skips.max} onChange={(event) => setValues({ ...values, skips: event.target.value })} />
                        <Typography>{values.skips}</Typography>
                    </Stack>
                    <Typography textAlign="center">Score Modifier: {countScoreMod(values.count, values.skips)}</Typography>
                    <Button variant='contained' sx={btnSx} onClick={() => handleChange()} >
                        Change Settings
                    </Button>
                    <Button variant='contained' sx={btnSx} onClick={() => handleSettings()} >
                        Cancel
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ColorOptionsMenu