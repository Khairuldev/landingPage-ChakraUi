import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react'
import {BiCheckDouble} from "react-icons/bi"

const Commitment = ({text}:{text:string;}) => {
  return (
    <Flex alignItems="center">
        <Icon w={8} h={8} color="whiteAlpha.800" as={BiCheckDouble} mr={25 }/>
        <Text color="whiteAlpha.800">{text}</Text>
    </Flex>
  )
}

export default Commitment
