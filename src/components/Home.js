import { Center } from '@chakra-ui/react'
import React from 'react'

function Home(props) {
  return (
    <Center height={"90vh"}>
      <Center shadow={"md"} className="text" bg={props.theme === "dark" ? "gray.800" : "gray.400"} color={props.theme === "dark" ? "white" : "gray.700"} width={"sm"} height={"20"} rounded={"xl"} textAlign={"center"}>
        Home
      </Center>
    </Center>
  )
}

export default Home