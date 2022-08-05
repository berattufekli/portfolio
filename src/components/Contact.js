import { Badge, Input, Center, Flex, IconButton, Text, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import {  FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';


function Contact(props) {
  const theme = props.theme;

  return (
    <Center  mt={{base: "4", md:"52"}} width={"w-full"}>
      <Flex alignItems={"center"} flexDirection={{base: "column", md: "unset"}} border={theme === "dark" ? "0px" : "1px"} borderColor={"gray.200"} shadow={"md"} bg={theme === "dark" ? "gray.800" : "transparent"} 
      color={theme === "dark" ? "white" : "gray.700"} rounded={"xl"}>
        <Center fle padding={"4"} className='text' justifyContent={"flex-start"} margin={4} gap={"6"} width={{base: "xs", lg:"md"}} flexDirection={"column"} alignItems={"center"}>
          <Flex flexDirection={"column"} width={"xs"}>
            <Badge mb={"2"} fontWeight={"bold"} fontSize={"20"} colorScheme={theme === "dark" ? "teal" : "black"} w={"min"} textAlign={"left"}>
              <Typewriter
              options={{
                strings: ["CONTACT ME!"],
                autoStart: true,
                loop: true,
              }}/>
            </Badge>
            <Text>Fill in the form or drop an email</Text>
          </Flex>

          <Flex mt={"2"} flexDirection={"row"} gap={"4"} justifyContent={"space-around"}>
            <IconButton variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href='https://github.com/berattufekli' rounded={"full"} icon={<FaGithub />}></IconButton>
            
            <IconButton variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href={"https://www.linkedin.com/in/huseyinberattufekli/"} rounded={"full"} icon={<FaLinkedin />}></IconButton>
            
            
            <IconButton variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href='mailto:berattufekli@icloud.com' rounded={"full"} icon={<HiOutlineMail />}></IconButton>

          </Flex>
        </Center>

        

        <Flex className='text' flexDirection={"column"} width={{base: "xs", md:"full"}} justifyContent={"space-around"} padding={"2"} height={"xs"} margin={"4"} rounded={"xl"} bg={theme === "dark" ? "gray.700" : "gray.50"}>
          <Input bg={theme === "light" ? "gray.300" : "gray.800"} _hover={"none"} _active={theme === "dark" && {backgroundColor:"gray.800"}} _focus={theme === "dark" && {backgroundColor:"gray.800"}} shadow={"md"} variant={"filled"} placeholder='Name' />
          
          <Input bg={theme === "light" ? "gray.300" : "gray.800"} _hover={"none"} _active={theme === "dark" && {backgroundColor:"gray.800"}} _focus={theme === "dark" && {backgroundColor:"gray.800"}} shadow={"md"} variant={"filled"} placeholder='Email' />
          
          <Input bg={theme === "light" ? "gray.300" : "gray.800"} _hover={"none"} _active={theme === "dark" && {backgroundColor:"gray.800"}} _focus={theme === "dark" && {backgroundColor:"gray.800"}} shadow={"md"} variant={"filled"} placeholder='Subject' />
          
          <Textarea bg={theme === "light" ? "gray.300" : "gray.800"} _hover={"none"} _active={theme === "dark" && {backgroundColor:"gray.800"}} _focus={theme === "dark" && {backgroundColor:"gray.800"}} shadow={"md"} resize={"none"} variant={"filled"} placeholder='Message'/>
          
          <Button type="submit" shadow={"md"} colorScheme={"teal"}>Send</Button>
        </Flex>
      </Flex>
    </Center>
  )
}

export default Contact