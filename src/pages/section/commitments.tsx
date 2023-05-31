import { AspectRatio, Box, Flex, Heading,  Img, VStack } from '@chakra-ui/react'
import programing from"../../assets/programing.jpg"
import Commitment from '../../components/commitment'

const Commitments = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="blue.900" pl="100px" >
      <Box w="full" py="60px" pr="100px">
        <Heading color="whiteAlpha.900" fontSize={42} letterSpacing="4px" pb="60px">Commited Your <br/> Sucsess</Heading>
        <VStack alignItems="flex-start" color="whiteAlpha.800" spacing="30px">
          <Commitment  text='Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet.' />
          <Commitment text='Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet.' />
          <Commitment text='Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet.' />
        </VStack>
      </Box>
      <AspectRatio w="full" ratio={8 / 10} width="800px"> 
        <Img src={programing}  />
      </AspectRatio>
      
    </Flex>
  )
}

export default Commitments
