import { Button, Grid, Typography } from '@mui/material'
import React, { Component } from 'react'
import { withTheme } from '@emotion/react'
import { createSettings, getData } from '../../colors'
import ColorsContainer from './ColorsContainer'
import ColorEndDialog from './ColorEndDialog'
import ColorOptionsMenu from './ColorOptionsMenu'



export class ColorGame extends Component {
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

    _handleKeyboard = (event) => {
        if (event.key === 'Escape') {
            this.handleSettings()
            return
        }
        if (event.key.toUpperCase() === 'T') {
            this.skipColors()
            return
        }
        if (event.key.toUpperCase() === 'R') {
            this.restartGame()
            return
        }
        if (isNaN(event.key) || event.key === " ") return
        this.checkAnswer(this.state.data.colors[event.key - 1])
    }

    getSettings() {
        const guessColorNameSettings = JSON.parse(localStorage.getItem('guessColorNameSettings'))
        if (guessColorNameSettings) return guessColorNameSettings
        return createSettings({count: 3, skips: 5})
    }

    handleSettings() {
        this.setState({ isSettings: !this.state.isSettings })
    }

    updateColors() {
        this.setState({ data: getData(this.getSettings().count) })
    }

    addScore() {
        this.setState({ score: this.state.score + this.state.scoreModifier })
    }

    checkAnswer(ans) {
        if (this.state.isLose) return
        if (ans[0] === this.state.data.answer[0]) {
            this.updateColors()
            this.addScore()
            this.setState({ corAnswers: this.state.corAnswers + 1})
            if ((this.state.corAnswers + 1) % 5 === 0) this.setState({skips: this.state.skips + 1})
        } else {
            this.setState({ playerColor: ans, isLose: true })
        }
    }

    restartGame() {
        this.setState(this.createState())
    }

    createState() {
        return {
            data: getData(this.getSettings().count),
            score: 0,
            scoreModifier: this.getSettings().scoreModifier,
            skips: this.getSettings().skips,
            isLose: false,
            playerColor: null,
            isSettings: false,
            corAnswers: 0,
        }
    }

    skipColors() {
        if (this.state.skips < 1 || this.state.isLose) return
        this.setState({ skips: this.state.skips - 1 })
        this.updateColors()
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyboard)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyboard)
    }

    render() {
        return (
            <div>
                {this.state.isLose && <ColorEndDialog score={this.state.score}
                    answerColor={this.state.data.answer} playerColor={this.state.playerColor}
                    restartGame={this.restartGame.bind(this)} btnSx={this.btnSx} />}

                {this.state.isSettings && <ColorOptionsMenu restartGame={this.restartGame.bind(this)} btnSx={this.btnSx}
                    getSettings={this.getSettings.bind(this)} handleSettings={this.handleSettings.bind(this)} />}

                <Typography sx={{typography: {xs: 'h4', sm:'h3', md:'h2'}}} textAlign="center">{this.state.data.answer[1]}</Typography>
                <ColorsContainer colors={this.state.data.colors} checkAnswer={this.checkAnswer.bind(this)} />
                <Typography variant="h5" textAlign="center">Score : {this.state.score}</Typography>
                <Typography variant="h5" textAlign="center">Skips : {this.state.skips}</Typography>
                <Grid container justifyContent="center" sx={{ width: '60%', margin: '0px auto 80px auto' }} spacing={2}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' disabled={this.state.skips < 1} sx={this.btnSx} onClick={() => this.skipColors()}>
                            Skip {this.props.matches && "(T)"}
                        </Button>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={this.btnSx} onClick={() => this.restartGame()} >
                            Restart {this.props.matches && "(R)"}
                        </Button>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained' sx={this.btnSx} onClick={() => this.handleSettings()} >
                            Settings {this.props.matches && "(Esc)"}
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withTheme(ColorGame)