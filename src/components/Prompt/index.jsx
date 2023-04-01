import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { COMMANDS } from '../../constants'

export const Prompt = ({ onSubmit, isFirstPrompt = false, isLastPrompt = false }) => {
  const [inputText, setInputText] = useState("")
  const [resultPrompt, setResultPrompt] = useState("")
  const [promptColor, setPromptColor] = useState("#f8f8f2")
  const [inputBlocked, setInputBlocked] = useState(false)

  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (isLastPrompt) {
      focus()
    }
  }, [])


  const handleChange = (e) => {
    const inputText = e.target.value
    setInputText(inputText)
    if (isValidCommand(inputText)) {
      setPromptColor("#50fa7b")
    } else {
      setPromptColor("#f8f8f2")
    }
  }

  const isValidCommand = (inputText) => {
    const validCommands = Object.keys(COMMANDS)
    return validCommands.includes(inputText)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isValidCommand(inputText)) {
      setResultPrompt(COMMANDS[inputText])
    } else if (inputText == "") {
      setResultPrompt("")
    } else {
      setResultPrompt(`Command "${inputText.split()[0]}" not recognized`)
    }

    setInputBlocked(true)
    onSubmit(inputText)
  }
  return (
    <Box maxWidth="700" ml={1} fontFamily={"JetBrains Mono, monospace"}>
      <Text as="span" fontWeight={"bold"} color="#f1fa8c">you </Text>
      <Text as="span" fontWeight={"bold"} color="#f8f8f2">in </Text>
      <Text as="span" fontWeight={"bold"} color="#8be9fd">~</Text><br />

      <form onSubmit={handleSubmit}>

        <InputGroup border={"none"} ml={-3} mt={-2} mb={-2}>
          <InputLeftElement
            pointerEvents='none'
            children={<ArrowForwardIcon color={"#50fa7b"} />}
          />
          <Input
            ref={inputRef}
            disabled={inputBlocked}
            size="md" type='text' border={"none"} focusBorderColor='transparent' color={promptColor} ml={-2}
            _disabled={{ color: promptColor }}
            placeholder={isFirstPrompt ? 'Type "help"' : ""}
            onChange={handleChange}
            value={inputText}
            fontSize={"small"}
          />

        </InputGroup>

      </form>
      <div style={{ color: "#f8f8f2" }} dangerouslySetInnerHTML={{ __html: resultPrompt }}>
      </div>
    </Box>
  )
}