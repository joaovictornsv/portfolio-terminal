import React from 'react';
import { Center } from '@chakra-ui/react'
import { TerminalWindowTitle, TerminalWindowContainer, PromptsBox } from './components';

export const TerminalWindow = ({ children }) => {
  return (
    <TerminalWindowContainer>
      <TerminalWindowTitle />
      <PromptsBox>
        {children}
      </PromptsBox>
    </TerminalWindowContainer>
  )
}