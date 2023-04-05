import React, { useEffect, useRef, useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { COMMANDS } from '../../constants'
import { PromptBreadcrumb, PromptResult } from './components'

export const Prompt = ({ onSubmit, executedCommands = [], isFirstPrompt = false, isLastPrompt = false }) => {
  const [inputText, setInputText] = useState("")
  const [promptResult, setPromptResult] = useState("")
  const [promptColor, setPromptColor] = useState("#f8f8f2")
  const [inputBlocked, setInputBlocked] = useState(false)
  const [currentCommandSelected, setCurrentCommandSelected] = useState(executedCommands.length)

  const inputRef = useRef(null);

  const handleChange = (text) => {
    const inputText = `${text}`
    const inputTextTrim = inputText.trim()
    setInputText(inputText)

    if (isValidCommand(inputTextTrim)) {
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
    const inputTextTrim = inputText.trim()

    if (inputText === "") {
      setPromptResult("")
    } else if (isValidCommand(inputTextTrim)) {
      setPromptResult(COMMANDS[inputTextTrim])
    } else {
      const firstCommandPart = inputTextTrim.split(" ")[0]
      setPromptResult(`Command "${firstCommandPart}" not recognized`)
    }

    setInputBlocked(true)
    onSubmit(inputTextTrim)
  }

  const handleKeyPress = (key) => {

    if (key === 'ArrowUp') {
      if (currentCommandSelected > 0) {
        setCurrentCommandSelected(prev => prev - 1)
        handleChange(executedCommands[currentCommandSelected - 1])
      }
    } else if (key === 'ArrowDown') {
      if (currentCommandSelected < executedCommands.length - 1) {
        setCurrentCommandSelected(prev => prev + 1)
        handleChange(executedCommands[currentCommandSelected + 1])
      } else {
        setCurrentCommandSelected(executedCommands.length)
        handleChange("")
      }
    }
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
            onChange={(e) => handleChange(e.target.value)}
            value={inputText}
            fontSize={"small"}
            onKeyDown={(e) => handleKeyPress(e.key)}
          />
        </InputGroup>
      </form>

      <PromptResult promptResult={promptResult} />
    </Box>
  )
}