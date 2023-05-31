import {  Box, Flex, Heading, Img, Text } from '@chakra-ui/react';


const TestimonialCard = ({image, name, posision, description}:{image:string; name:string; posision:string; description:string}) => {
  return (
    <Box bg="white" w="full" px="40px" py="20px">
        <Flex alignItems="center" pb="20px">
            <Img borderRadius="full" width="100px" h="100px" src={image} />      
          <Box ml="20px">
            <Heading fontSize={16} color="blue.900" mb="2px">{name}</Heading>
            <Text fontSize={12} color="grey.500">{posision}</Text>
          </Box>
        </Flex>
          <Text color="blue.700" fontSize={14}>{description}</Text>
    </Box>
  )
}

export default TestimonialCard
