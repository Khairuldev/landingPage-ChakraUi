import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const Footer = () => {
  return (
    <Box w="full" bg="gray.900" px="200px" py="100px" >
      <Heading  fontSize={46} letterSpacing="5px" textAlign="center" color="white">
        Want To Grow Your Bussnies? <br/> We Should Talk.
      </Heading>
      <Flex mt="30px" justifyContent="center">
      <Link color="whiteAlpha.900">
        Get In Touch
        <Icon as={FiArrowUpRight} ml="20px" h={5} w={5}/>
    </Link>
      </Flex>
    </Box>
  )
}

export default Footer
