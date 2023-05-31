import { Flex, Heading, HStack, Icon, Link } from '@chakra-ui/react'
import {FiArrowUpRight} from"react-icons/fi"
import React from 'react'

const Header = () => {
  return (
   <Flex px="100px" py="20px" width="full" bg="blue.900" alignItems="flex-end" justifyContent="space-between">
    <Flex alignItems="flex-end">
        <Heading color="whiteAlpha.900" mr="60px" fontSize={20} letterSpacing="1.5px">My Logo</Heading>
        <HStack color="whiteAlpha.700" spacing="40px" >
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Services</Link>
        </HStack>
    </Flex>
    <Link color="whiteAlpha.900">
        Get In Touch
        <Icon as={FiArrowUpRight} ml="20px" h={5} w={5}/>
    </Link>

   </Flex>
  )
}

export default Header
