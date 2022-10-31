import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ChangelogCard from './ChangelogCard'

const Changelog = () => {
  const [commits, setCommits] = useState()

  useEffect(() => {
    fetch("https://api.github.com/repos/dungeonmaz/color_game_client/commits")
      .then(res => res.json())
      .then(res => setCommits(res))
  }, [])

  return (
    <Stack p="1rem">
      <ChangelogCard name={"0.1"} description={commits[0].commit.message} />
    </Stack>
  )
}

export default Changelog