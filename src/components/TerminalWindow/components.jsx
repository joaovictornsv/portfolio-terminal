import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { MinusIcon, CloseIcon, ArrowUpDownIcon } from '@chakra-ui/icons'

export const WindowTitleButtons = () => {
  const defaultButtonStyle = {
    w: "20px",
    h: "20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  }

  return (
    <Flex>
      <Flex
        sx={{...defaultButtonStyle}}
        mr={1}
        bg="yellow.400"
      >
        <MinusIcon fontSize={8} color={"gray.800"} />
      </Flex>

      <Flex
        sx={{...defaultButtonStyle}}
        mr={1}
        transform={"rotate(45deg)"}
        bg="green.300"
      >
        <ArrowUpDownIcon fontSize={8} color={"gray.800"} />
      </Flex>

      <Flex
        sx={{...defaultButtonStyle}}
        bg="red.400"
      >
        <CloseIcon fontSize={8} color={"gray.800"} />
      </Flex>
    </Flex>
  )
}

export const TerminalWindowTitle = () => {
  return (
    <Flex
      pl={2}
      pr={2}
      h={8}
      bg="#44475a"
      alignItems="center"
      justifyContent="space-between"
      borderTopRadius={12}
    >
      <Box fontSize={14} color={"gray.400"} sx={{
          '-webkit-user-select': "none",
          '-moz-user-select': "none",
          '-ms-user-select': "none",
          'user-select': "none",
      }}>
        joaovictornsv's shell
      </Box>
      <WindowTitleButtons />
    </Flex >
  )
}

export const TerminalWindowContainer = ({ children }) => {
  return (
    <Flex
      flexDirection={"column"}
      filter="drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2))"
      fontFamily={"JetBrains Mono, monospace"}
      w={"95%"}
      maxWidth={700}
    >
      {children}
    </Flex>
  )
}

export const PromptsBox = ({ children }) => {
  return (
    <Box
      pt={1}
      bg="#282a36EE"
      h={500}
      overflowY={"auto"}
      borderBottomRadius={12}
      sx={{
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
  )
}