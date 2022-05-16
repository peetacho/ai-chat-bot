import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Button
} from "@chakra-ui/react";
import Response from "../Response";
import ResponseState from "./FormLogic";
import { useForm } from "react-hook-form";
import { useToast } from '@chakra-ui/react'

export default function Form() {

    const { responses, newResponse } = ResponseState();
    const { register, handleSubmit } = useForm();
    const toast = useToast()
    
    const onSubmit = async data => {
        if (data.prompt !== "") {
            newResponse(data.prompt);
            toast({
                title: "Successful! Please give Curie a moment.",
                status: 'success',
                isClosable: true,
            })
        } else {
            toast({
                title: "Please enter a valid prompt.",
                status: 'warning',
                isClosable: true,
            })
        }
    };
    return (
        <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
            <Box maxWidth='1080px' margin='auto'>
                <SimpleGrid
                    display={{ base: "initial", md: "grid" }}
                    columns={{ md: 1 }}
                    spacing={{ md: 6 }}
                >
                    <GridItem colSpan={{ md: 1 }}>
                        <chakra.form
                            shadow="base"
                            rounded={[null, "md"]}
                            overflow={{ sm: "hidden" }}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                        <Stack
                            px={4}
                            py={5}
                            bg={useColorModeValue("white", "gray.700")}
                            spacing={6}
                            p={{ sm: 6 }}
                        >

                            <FormControl id="prompt" mt={1}>
                            <FormLabel
                                fontSize="sm"
                                fontWeight="md"
                                color={useColorModeValue("gray.700", "gray.50")}
                            >
                                Chat with Curie, your personal AI!
                            </FormLabel>
                            <Textarea
                                placeholder="Enter Prompt here"
                                mt={1}
                                rows={10}
                                shadow="sm"
                                focusBorderColor="teal.400"
                                fontSize={{ sm: "sm" }}
                                {...register("prompt")}
                            />
                            <FormHelperText>
                                Example prompt: Write a haiku about intelligent snails invading the world.
                            </FormHelperText>
                            </FormControl>

                        </Stack>
                        <Box
                            px={{ base: 4, sm: 6 }}
                            py={3}
                            bg={useColorModeValue("gray.50", "gray.900")}
                            textAlign="right"
                        >
                            <Button
                                type="submit"
                                colorScheme="teal"
                                _focus={{ shadow: "" }}
                                fontWeight="md"
                                >
                                Submit
                            </Button>
                        </Box>
                        </chakra.form>
                    </GridItem>
                    <GridItem mt={[5, null, 0]} colSpan={{ md: 1 }}>
                        <Box px={[4, 0]}>
                        <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                            Responses
                        </Heading>
                        <Text
                            mt={1}
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            Check out your past conversations with Curie.
                        </Text>
                        </Box>
                        {responses.data.map((response, index) => (
                            <Response key={response.id} prompt={response.prompt} response={response.ai_response}/>  
                        ))}
                    </GridItem>
                </SimpleGrid>
            </Box>
        </Box>
    );
}