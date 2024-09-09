import logo from './logo.svg';
import './App.css';
import Homepage from './ShareMarketUI_HomePage/Homepage';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login_SignUpPages from './ShareMarketUI_HomePage/Login_SignUpPages';

function App() {
  return (
    <div className="App">
      <ChakraProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            {/* <Route path='/signUpAndLogin' element={<Login_SignUpPages />} /> */}
          </Routes>
        </BrowserRouter>


      </ChakraProvider>
    </div>
  );
}

export default App;
