import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Icon,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import corporation from "../../assets/corporation.jpg";

const Intro = () => {
  return (
    <Box w="full" bg="blue.900" px="100px" py="60px" mb="120px">
      <Flex justifyContent="space-between" alignItems="center" pb="80px">
        <Heading fontSize={54} letterSpacing="5px" color="whiteAlpha.900">
          People Who Care <br /> About Your Growth
        </Heading>
        <Box maxW="300px">
          <Text color="whiteAlpha.700" pb="20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odio
            iusto totam porro voluptatem nam sint fugiat. Hic tempore animi
            ullam quo iusto deleniti dolores in id. Porro, ad illo.
          </Text>
          <Link color="whiteAlpha.800">
            Explore More
            <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
          </Link>
        </Box>
      </Flex>
      <AspectRatio w="full" ratio={16 / 9} mb="-200px">
        <Img src={corporation} pb="60px" />
      </AspectRatio>
    </Box>
  );
};

export default Intro;
