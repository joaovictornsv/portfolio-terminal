import React, { useState } from 'react';
import { TerminalWindow } from '../TerminalWindow';
import { Prompt } from '../Prompt';

export const Terminal = () => {
  const [prompts, setPrompts] = useState([1])
  const [promptsLength, setPromptsLength] = useState(1)

  const onSubmit = (command) => {
    if (command == 'clear') {
      setPrompts([])
      setPromptsLength(1)
      setTimeout(() => setPrompts([1]), 100)

    } else {
      setPrompts([...prompts, 1])
      setPromptsLength(prev => prev + 1)
    }
  }

  return (
    <TerminalWindow>
      {prompts.map((_, i) => {

        if (i == 0 && promptsLength == 1) {
          return <Prompt onSubmit={onSubmit} isLastPrompt={true} isFirstPrompt={true} key={i} />
        } else
          if (i == promptsLength - 1) {
            return <Prompt onSubmit={onSubmit} isLastPrompt={true} key={i} />
          }
        return <Prompt onSubmit={onSubmit} key={i} />
      })}
    </TerminalWindow>
  )

}