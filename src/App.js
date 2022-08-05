import './Main.css';

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import updateOverflowColor from 'overflow-color';

function App() {

  const theme = localStorage.getItem("theme")

  useEffect(() => {
    updateOverflowColor();
  }, [theme]);

  

  return (
    
      <ChakraProvider>
        <Navbar/>
      </ChakraProvider>
  );
}

export default App;
