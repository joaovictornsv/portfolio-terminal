import React, { useState } from 'react';
import { TerminalWindow } from '../TerminalWindow';
import { PromptsList } from '../PromptsList';
import { Center } from '@chakra-ui/react';

export const TerminalMain = () => {
  const [prompts, setPrompts] = useState([1])
  const [promptsLength, setPromptsLength] = useState(1)
  const [executedCommands, setExecutedCommands] = useState([])

  const onSubmit = (command) => {
    if (command == 'clear') {
      setPrompts([])
      setTimeout(() => {
        setPromptsLength(1)
        setPrompts([1])
      }, 10)
    } else {
      setPrompts([...prompts, 1])
      setPromptsLength(prev => prev + 1)
    }

    const lastCommandExecuted = executedCommands[executedCommands.length - 1]
    if (command != "" && command != lastCommandExecuted) {
      setExecutedCommands(prev => [...prev, command])
    }
  }

  return (
    <Center color='#262626' minH="100vh" >
      <TerminalWindow>
        <PromptsList
          prompts={prompts}
          promptsLength={promptsLength}
          onSubmit={onSubmit}
          executedCommands={executedCommands}
        />
      </TerminalWindow>
    </Center>
  )

}