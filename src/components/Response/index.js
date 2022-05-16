import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

export default function Response(props){
  return (
    <Flex
      bg={useColorModeValue("gray.50", "inherit")}
      w="full"
      py={5}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        w="inherit"
        px={8}
        py={4}
        rounded="lg"
        shadow="base"
        bg={useColorModeValue("white", "gray.800")}
      >

        <Box mt={2}>
          <Text
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
          >
            {props.prompt}
          </Text>
          <chakra.p my={2} color={useColorModeValue("gray.600", "gray.300")}>
            {props.response.split('\n').map(function(item, key) {
              return (
                <span key={key}>
                  {item}
                  <br/>
                </span>
              )
            })}
          </chakra.p>
        </Box>
        <Flex justifyContent="space-between" alignItems="end" direction="column" mt={4}>
          <Text
              color={useColorModeValue("gray.700", "gray.200")}
              fontWeight="600"
          >
              - Curie AI
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

