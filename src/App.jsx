import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme, Heading } from '@chakra-ui/react';
import { Terminal } from './components/Terminal/index.jsx';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
});

export default function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Terminal />
      </ChakraProvider>
    </>
  );
};
