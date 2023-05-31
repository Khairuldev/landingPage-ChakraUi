import { Box, Flex, Heading, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { IconType } from 'react-icons';
import { FiArrowUpRight } from 'react-icons/fi';

const ServiceCard = ({icon, heading, description}:{icon:IconType; heading:string; description:string;}) => {
  return (
    <Flex flexDirection="column" bg="yellow.50" p="40px" w="full" h="380px" justifyContent="space-between">
        <Icon color="blue.900" w={20} h={20} as={icon}/>
        <Box>
        <Heading color="blue.900" fontSize={28} letterSpacing="3px" pb="20px">{heading}</Heading>
        <Text color="blue.700">{description}</Text>
        </Box>
        <Link color="blue.800">
            explore More
            <Icon as={FiArrowUpRight} ml="10px" h={5} w={5}/>
        </Link>
    </Flex>
  )
}

export default ServiceCard
