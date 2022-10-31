import { Stack } from '@mui/system'
import React from 'react'
import ChangelogCard from './ChangelogCard'

const Changelog = () => {
  return (
    <Stack p="1rem">
      <ChangelogCard name={"0.1"} description={'Create Project'}/>
    </Stack>
  )
}

export default Changelog