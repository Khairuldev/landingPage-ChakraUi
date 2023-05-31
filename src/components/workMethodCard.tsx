import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const WorkMethodCard = ({imagePath, heading, description}:{imagePath:string; heading:string; description:string} ) => {
  return (
    <Box w="full">
        <AspectRatio ratio={5 / 7}>
            <img src={imagePath} />
        </AspectRatio>
        <Heading pt="30px" fontSize="24px" color="blue.900" pb="20px">
            {heading}
        </Heading>
        <Text fontSize="14px" color="blue.700">{description}</Text>
       
    </Box>
  )
}

export default WorkMethodCard
