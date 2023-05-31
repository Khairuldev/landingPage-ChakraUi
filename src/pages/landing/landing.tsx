import { Box } from '@chakra-ui/react'
import React from 'react'
import Intro from '../section/intro'
import Services from '../section/services'
import Commitments from '../section/commitments'
import Howwework from '../section/how-we-work'
import Testimonials from '../section/testimonials'

const Landing = () => { 
  return (
    <div>
      <Box>
        <Intro/>
        <Services/>
        <Commitments/>
        <Howwework/>
        <Testimonials/>
      </Box>
    </div>
  )
}

export default Landing
