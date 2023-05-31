import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from '../../components/testimonialCard'
import user1 from"../../assets/1.jpeg"
import user2 from"../../assets/2.jpeg"
import user3 from"../../assets/3.jpeg"
import user4 from"../../assets/1.jpg"
import user5 from"../../assets/2.jpg"
import user6 from"../../assets/3.jpg"

const Testimonials = () => {
  return (
    <Box px="100px" py='60px'bg="yellow.50" >
      <Heading color="blue.900" fontSize={42} letterSpacing="3px" pb="80px">
        The People Have Spoken
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap="60px">
        <TestimonialCard image={user1} name="Zack Walker" posision="Founder of Mack.io" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        <TestimonialCard image={user2} name="Ryan Florence" posision="CEO" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        <TestimonialCard image={user3} name="Segun Adebayo" posision="General Manager" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        <TestimonialCard image={user4} name="Kent Dodds" posision="Software Enginer" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        <TestimonialCard image={user5} name="Hanna Bussing" posision="UI/UX Designer" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        <TestimonialCard image={user6} name="Dyana Waszaj" posision="Programmer" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, enim fugit! Veritatis dolores quibusdam vel molestiae!' />

        
        
        
      </Grid>
      
    </Box>
  )
}

export default Testimonials
