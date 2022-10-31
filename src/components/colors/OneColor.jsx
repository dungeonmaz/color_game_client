import { Paper, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react'
import { useTheme } from '@mui/material/styles';

const OneColor = ({color, num, checkAnswer}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Paper onClick={()=> checkAnswer(color)} elevation={3} 
    sx={{aspectRatio: '1 / 1', backgroundColor:`#${color[0]}`, position:'relative', borderRadius:'1rem'}}>
      {matches ? <Typography position="absolute" right="5%" bottom="5%" variant="h3" 
      sx={{WebkitTextStroke:'2px black', color:'white'}}>{num}</Typography> : null}
    </Paper>
  )
}

export default OneColor