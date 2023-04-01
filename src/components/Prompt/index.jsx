import React, { useEffect, useRef, useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { COMMANDS } from '../../constants'
import { PromptBreadcrumb, PromptResult } from './components'

export const Prompt = ({ onSubmit, isFirstPrompt = false, isLastPrompt = false }) => {
  const [inputText, setInputText] = useState("")
  const [promptResult, setPromptResult] = useState("")
  const [promptColor, setPromptColor] = useState("#f8f8f2")
  const [inputBlocked, setInputBlocked] = useState(false)

  const inputRef = useRef(null);

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

    if (inputText == "") {
      setPromptResult("")
    } else if (isValidCommand(inputText)) {
      setPromptResult(COMMANDS[inputText])
    } else {
      const firstCommandPart = inputText.split()[0]
      setPromptResult(`Command "${firstCommandPart}" not recognized`)
    }

    setInputBlocked(true)
    onSubmit(inputText)
  }

  useEffect(() => {
    if (isLastPrompt) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <Box maxWidth="700" ml={1} fontFamily={"JetBrains Mono, monospace"}>
      <PromptBreadcrumb />
      <br />

      <form onSubmit={handleSubmit}>
        <InputGroup border={"none"} ml={-3} mt={-2} mb={-2}>
          <InputLeftElement
            pointerEvents='none'
            children={<ArrowForwardIcon color={"#50fa7b"} />}
          />
          <Input
            ref={inputRef}
            disabled={inputBlocked}
            size="md"
            type='text'
            border={"none"}
            focusBorderColor='transparent'
            color={promptColor}
            ml={-2}
            _disabled={{ color: promptColor }}
            placeholder={isFirstPrompt ? 'Type "help"' : ""}
            onChange={handleChange}
            value={inputText}
            fontSize={"small"}
          />
        </InputGroup>
      </form>

      <PromptResult promptResult={promptResult} />
    </Box>
  )
}