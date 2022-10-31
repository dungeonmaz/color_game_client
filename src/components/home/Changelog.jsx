import { Stack } from '@mui/system'
import React, {useEffect} from 'react'
import ChangelogCard from './ChangelogCard'

const Changelog = () => {
  
  useEffect(() => {
    fetch("https://api.github.com/repos/dungeonmaz/color_game_client/commits")
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])

  return (
    <Stack p="1rem">
      <ChangelogCard name={"0.1"} description={'Create Project'}/>
    </Stack>
  )
}

export default Changelog