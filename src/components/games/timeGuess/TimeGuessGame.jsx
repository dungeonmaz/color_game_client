import { Button, Grid, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import { getData } from '../../../colors'
import ColorsContainer from '../ColorsContainer'
import { createSettings } from './settings'
import { withTheme } from '@emotion/react'
import ColorEndDialog from '../ColorEndDialog'
import TimeGuessWinDialog from './TimeGuessWinDialog'

const needWins = 10

export class TimeGuessGame extends Component {
  constructor(props) {
    super(props)

    this.state = this.createState()

    this.btnSx = {
      transition: 'transform 0.2s, background 0.3s',
      width: '100%',
      aspectRatio: '8/1',
      borderRadius: '0.5rem',
      '&:hover': {
        background: props.theme.palette.secondary.dark,
        transform: 'scale(1.05)'
      },
      '&:active': {
        transform: 'scale(0.95)'
      },
      '&:disabled': {
        transform: 'scale(0.8)'
      },
    }
  }

  getSettings() {
    return createSettings(5)
  }

  createState() {
    const settings = this.getSettings()
    return {
      data: getData(settings.count),
      wins: 0,
      isLose: false,
      time: 0,
      date: Math.floor(new Date().getTime()),
      curDate: Math.floor(new Date().getTime()),
      playerColor: null,
      isWin: false,
      intId: null,
    }
  }

  restartGame() {
    this.setState(this.createState())
  }

  updateColors() {
    this.setState({ data: getData(this.getSettings().count) })
  }

  checkAnswer(ans) {
    if (this.state.isLose) return
    if (ans[0] === this.state.data.answer[0]) {
      this.updateColors()
      this.setState({ wins: this.state.wins + 1 })
      if (this.state.wins === needWins - 1) this.setState({ isWin: true })
    } else {
      this.setState({ playerColor: ans, isLose: true })
    }
  }

  getCurrentDate() {
    this.setState({ curDate: Math.floor(new Date().getTime()) })
  }

  _handleKeyboard = (event) => {
    if (event.key.toUpperCase() === 'R') {
      this.restartGame()
      return
    }
    if (isNaN(event.key) || event.key === " ") return
    this.checkAnswer(this.state.data.colors[event.key - 1])
  }

  setTime() {
    if (this.state.isWin) clearInterval(this.state.intId)
    this.getCurrentDate()
    this.setState({time: (this.state.curDate - this.state.date)})
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyboard)
    const id = setInterval(() => this.setTime(), 50)
    this.setState({intId: id})
    console.log(id)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyboard)
  }

  render() {
    const ms = this.state.time % 1000
    const seconds = Math.floor((this.state.time / 1000) % 60)
    const minutes = Math.floor((this.state.time / (1000 * 60)) % 60)
    return (
      <div>
        {this.state.isLose && <ColorEndDialog score={this.state.wins} btnSx={this.btnSx}
          playerColor={this.state.playerColor} answerColor={this.state.data.answer}
          restartGame={this.restartGame.bind(this)} />}

        {this.state.isWin && <TimeGuessWinDialog time={this.state.time}  btnSx={this.btnSx}
        restartGame={this.restartGame.bind(this)}/>}

        <Typography sx={{ typography: { xs: 'h4', sm: 'h3', md: 'h2' } }} textAlign="center">{this.state.data.answer[1]}</Typography>
        <ColorsContainer colors={this.state.data.colors} checkAnswer={this.checkAnswer.bind(this)} />
        <Typography variant="h5" textAlign="center">{this.state.wins} / {needWins}</Typography>
        <Stack direction="row" justifyContent="center" ml="30px">
          <Typography variant="h5" textAlign="center">{minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}</Typography>
          <Typography variant="body1" textAlign="center" sx={{ width: '30px' }}>{ms}</Typography>
        </Stack>
        <Grid container justifyContent="center" sx={{ width: '60%', margin: '0px auto 80px auto' }} spacing={2}>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={this.btnSx} onClick={() => this.restartGame()} >
              Restart {this.props.matches && "(R)"}
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withTheme(TimeGuessGame)