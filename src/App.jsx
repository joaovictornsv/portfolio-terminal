import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { TerminalMain } from './components/TerminalMain/index.jsx';

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
        <TerminalMain />
      </ChakraProvider>
    </>
  );
};
