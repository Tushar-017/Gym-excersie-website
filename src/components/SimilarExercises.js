import React from 'react'
import { Box,Typography,Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscelExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'},p:'20px'}}>
      <Typography variant='h3' mb={5}>
        Exercise that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {targetMuscelExercises.length ?
          <HorizontalScrollbar data={targetMuscelExercises}/>
        : <Loader/>}
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercise that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises}/>
        : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
