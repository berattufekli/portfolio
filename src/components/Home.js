import { Flex, Text, IconButton, Center } from '@chakra-ui/react'
import React from 'react'
import Typewriter from 'typewriter-effect';
import {  FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Home(props) {
  const theme = props.theme;
  return (
    <Center height={{base:"60vh", md:"90vh"}}>
      <Flex position={"fixed"} bottom={{base:"5", md:"5"}} left={{base:"unset", md:"5"}} flexDirection={{base: "row", md: "column"}} justifyContent={"space-around"}>
            <IconButton margin={2} variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href='https://github.com/berattufekli' rounded={"full"} icon={<FaGithub />}></IconButton>
            
            <IconButton margin={2}  variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href={"https://www.linkedin.com/in/huseyinberattufekli/"} rounded={"full"} icon={<FaLinkedin />}></IconButton>
            
            
            <IconButton margin={2}  variant={"outline"} as={"a"} borderColor={theme === "dark" ? "gray.700" : "gray.300" }  color={theme === "dark" ? "white" : "black"} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} target="_blank" href='mailto:berattufekli@icloud.com' rounded={"full"} icon={<HiOutlineMail />}></IconButton>

          </Flex>

      <Flex alignItems={"flex-start"} flexDirection={"column"}  className="homeText" color={props.theme === "dark" ? "white" : "gray.700"} width={{base:"xs", md:"md", lg:"lg", xl:"container.md"}} textAlign={"center"}>
        <Text color={"gray.500"} fontSize={{base:"20px", md:"24px"}}>hi, my name is</Text>
        <Text fontSize={{base:"26px", md:"40px"}}>berat tufekli.</Text>
        <Flex alignItems={"flex-start"} flexDirection={{base:"column", md:"column", lg:"unset"}} fontSize={{base:"26px", md:"40px"}}>
          <Text paddingRight={4}>i am a</Text>
          <Text className={theme === "dark" ? 'gradientDark' : 'gradientLight'}>
            <Typewriter
              options={{
                strings: ["software engineer."],
                autoStart: true,
                loop: true,
              }}/>
          </Text></Flex> 
      </Flex>
    </Center>
  )
}

export default Home