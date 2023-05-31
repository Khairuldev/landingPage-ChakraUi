import { AspectRatio, Box, Flex, Heading, HStack, Icon, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from '../../components/serviceCard'
import {RiComputerLine} from "react-icons/ri"
import {BsPencilSquare} from "react-icons/bs"

const Services = () => {
  return (
    <Box w="full" py="60px" px="100px">
    <Flex justifyContent="space-between" alignItems="center" pb="60px" >
      <Heading fontSize={42} letterSpacing="4px" color="blue.900">
       What We Can <br/> Provide you
      </Heading>
      <Text maxW="300px" color="blue.700" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia deserunt blanditiis fugiat molestias natus. Veniam maiores cumque atque saepe corporis quae, repellendus, illo commodi voluptates porro, consequatur reiciendis expedita?
      </Text>
    </Flex>
    <HStack w="full" spacing="90px">
      <ServiceCard icon={RiComputerLine} heading="Web Disign" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio iusto totam porro voluptatem nam sint fugiat. Hic tempore animi ullam quo iusto deleniti dolores in id. Porro, ad illo.'/>
      <ServiceCard icon={BsPencilSquare} heading="Content Writeing" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio iusto totam porro voluptatem nam sint fugiat. Hic tempore animi ullam quo iusto deleniti dolores in id. Porro, ad illo.'/> 
    </HStack>
  </Box>
  )
}

export default Services
