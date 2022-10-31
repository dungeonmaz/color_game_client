import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { Component } from 'react'
import ChangelogCard from './ChangelogCard'

export class Changelog extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      commits: null,
    };
  }

  update() {
    fetch("https://api.github.com/repos/dungeonmaz/color_game_client/commits")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            commits: result.slice(0, -3)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.update()
  }

  render() {
    return (
      <div>
        <Typography textAlign="center" variant="h5" p={1}>Changelogs</Typography>
        <Stack p="1rem" sx={{ overflowY: 'scroll', height: '500px', '&::-webkit-scrollbar': { display: 'none' } }}>
          {this.state.isLoaded && this.state.commits.map((com, index) => (
            <ChangelogCard key={index} name={com.commit.message.split('\n')[0]} description={com.commit.message.split('\n')[1]} />
          ))}
        </Stack>
      </div>
    )
  }
}

export default Changelog