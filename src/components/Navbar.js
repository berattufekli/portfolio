import { React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import { Box, Flex, IconButton, useDisclosure, useBreakpointValue, DrawerCloseButton, Text } from '@chakra-ui/react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

function Navbar() {
  const Size = useBreakpointValue(['sm', 'md', "lg"]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  
  useEffect(()=>{
    localStorage.setItem("theme", theme);
  }, [theme]);

  

  return (
      <Router>
        <Box height={"100vh"} backgroundSize={"contain"} bgColor={theme === "dark" ? "gray.900" : "white"} padding={"2"}>
          <Flex padding={"2"} alignItems={"center"} width={"full"} justifyContent={"space-between"}>
            {
              Size === "lg" ? <Text textShadow={"-1px -1px red"} color={theme === "dark" ? "white" : "gray.700"} bg={"transparent"} _active={{background:"transparnet"}} _hover={{background:"transparent"}} className="text"><NavLink className={"w-full h-full"} to={"/"}>bt</NavLink></Text> :
              <IconButton color={theme === "dark" ? "white" : "gray.700"} bg={"transparent"} _active={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} onClick={onOpen} icon={<HamburgerIcon/>}></IconButton>  
            }

            {
              Size === "lg" ? 
              <Flex color={theme === "dark" ? "white" : "gray.700"} width={"sm"} justifyContent={"space-around"}>
                <NavLink className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/">Home</NavLink>
                <NavLink className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/project">Project</NavLink>
                <NavLink className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/about">About Me</NavLink>
                <NavLink className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/contact">Contact</NavLink>
              </Flex> :
                <Text textShadow={"-1px -1px red"} color={theme === "dark" ? "white" : "gray.700"} bg={"transparent"} _active={{background:"transparnet"}} _hover={{background:"transparent"}} className="text">
                  <NavLink className={"w-full h-full"} to={"/"}>
                    bt
                  </NavLink>
                </Text>
            }


            
            <IconButton color={theme === "dark" ? "white" : "gray.700"} bg={"transparent"} _active={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} _hover={theme === "dark" ? {background:"gray.700"} : {background:"gray.300"}} icon={theme === "dark" ? <SunIcon /> : <MoonIcon />} onClick={()=>setTheme(theme==="dark" ? "light" : "dark")}></IconButton>
          </Flex>

          


          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            size={Size === "sm" ? "full" : "xs"}
            
            >
            
            <DrawerOverlay />
            <DrawerContent color={theme === "dark" ? "white" : "gray.700"} bg={theme === "dark" ? "gray.800" : "gray.200"} _hover={""}>
              <DrawerCloseButton />
              <DrawerHeader className='text'>Menu</DrawerHeader>
              <DrawerBody>
                <Flex flexDirection={"column"}>
                  <NavLink onClick={onClose} className={theme === "dark" ? "nav rounded text-center p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/">Home</NavLink>
                  <NavLink onClick={onClose} className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/project">Project</NavLink>
                  <NavLink onClick={onClose} className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/about">About Me</NavLink>
                  <NavLink onClick={onClose} className={theme === "dark" ? "nav rounded p-2 hover:bg-gray-700" : "nav rounded p-2 hover:bg-gray-300"} to="/contact">Contact</NavLink>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        



          <Routes>
            <Route exact path="/" element={<Home theme={theme}/>}/>
            <Route path="/project" element={<Project theme={theme}/>}/>
            <Route path="/about" element={<About theme={theme}/>}/>
            <Route path="/contact" element={<Contact theme={theme} size={Size}/>}/>
          </Routes>
        </Box>
    </Router>
  )
}

export default Navbar