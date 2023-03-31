import React, { useState } from 'react';
import { Box, Center, Container, Flex, IconButton, propNames } from '@chakra-ui/react'
import { MinusIcon, CloseIcon } from '@chakra-ui/icons';
import { Prompt } from '../Prompt';

export const TerminalWindow = ({ children }) => {
  return (
    <Center
      color='#262626'
      minH="100vh"
    >
      <Flex flexDirection={"column"} filter="drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2))">
        <Flex pl={2} pr={2} h={8} bg={"#44475a"} alignItems={"center"} justifyContent={"space-between"} minWidth={700} borderTopRadius={12} >
          <Box fontSize={14} color={"gray.400"}>
            joaovictornsv's shell
          </Box>
          <Flex>
            <Flex justifyContent="center" alignItems="center" bg="yellow.400" borderRadius={"50%"} w={"20px"} h={"20px"} cursor={"pointer"} mr={1}>
              <MinusIcon fontSize={8} color={"gray.800"} />
            </Flex>
            <Flex justifyContent="center" alignItems="center" bg="red.400" borderRadius={"50%"} w={"20px"} h={"20px"} cursor={"pointer"} >
              <CloseIcon fontSize={8} color={"gray.800"} />
            </Flex>
          </Flex>
        </Flex >
        <Box pt={1} maxWidth={700} minWidth={700} bg="#282a36" maxHeight={500} minHeight={500} overflowY={"auto"} borderBottomRadius={12} sx={{
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 10,
          }
        }}>
          {children}
        </Box>
      </Flex>
    </Center >
  )
}