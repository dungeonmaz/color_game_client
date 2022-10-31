import { Stack } from '@mui/system';
import React, { Component } from 'react'
import  ChangelogCard from './ChangelogCard'

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
            commits: result
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
      <Stack p="1rem">
        {this.state.isLoaded && this.state.commits.map(com => (
          <ChangelogCard name={com.commit.message.split('\n')[0]} description={com.commit.message.split('\n')[1]} />
        ))}
      </Stack>
    )
  }
}

export default Changelog