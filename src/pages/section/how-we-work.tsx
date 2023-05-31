import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import WorkMethodCard from '../../components/workMethodCard'
import jhon from"../../assets/jhon.jpg"
import andrea  from"../../assets/andrea.jpg"
import arina from"../../assets/arina.jpg"

const Howwework = () => {
  return (
    <Box w="full" px="100px" py="60px">
      <Heading color="blue.900" fontSize={42} letterSpacing="3px" pb="80px">How Do We Work ?
      </Heading>
      <HStack w="full" alignItems="flex-start" spacing="75px">
        <WorkMethodCard imagePath={jhon} heading="User Centered design" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus odit quas voluptatum, et commodi animi aut perferendis ducimus quidem delectus illo neque! Eaque provident dolor modi accusamus pariatur delectus?'/>
        <WorkMethodCard imagePath={andrea} heading="Agile Development" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus odit quas voluptatum, et commodi animi aut perferendis ducimus quidem delectus illo neque!'/>
        <WorkMethodCard imagePath={arina} heading="Continous integretion" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni accusamus odit quas voluptatum, et commodi animi aut perferendis ducimus quidem delectus illo neque! Eaque provident dolor modi accusamus pariatur delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'/> 
      </HStack>
    </Box>
  )
}

export default Howwework
