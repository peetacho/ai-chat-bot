import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import theme from './lib/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar/>
      <Form/>
    </ChakraProvider>
  );
}

export default App;
