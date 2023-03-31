import React, { useState } from 'react';
import { Box, Center, Container, Flex, IconButton, propNames } from '@chakra-ui/react'
import { MinusIcon, CloseIcon } from '@chakra-ui/icons';
import { Prompt } from '../Prompt';

export const TerminalWindow = ({ children }) => {
  return (
    <Center
      color='#262626'
      minH="90vh"
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Flex pl={5} pr={5} h={10} bg={"#44475a"} alignItems={"center"} justifyContent={"space-between"} minWidth={700}>
        <Box fontFamily={"JetBrains Mono"} color={"gray.400"}>
          joaovictornsv's shell
        </Box>
        <Box>
          <MinusIcon mr={1} cursor={"pointer"} fontSize={12} color={"yellow.400"} />
          <CloseIcon ml={1} cursor={"pointer"} fontSize={12} color={"red.400"} />
        </Box>
      </Flex>
      <Box maxWidth={700} minWidth={700} bg="#282a36" maxHeight={500} minHeight={500} overflowY={"auto"}>
        {children}
      </Box>
    </Center >
  )
}