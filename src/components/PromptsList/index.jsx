import { Prompt } from '../Prompt'

export const PromptsList = ({ prompts, promptsLength, onSubmit, executedCommands }) => {
  return (
    <>
      {
        prompts.map((_, i) => {
          const isFirstAndUniquePrompt = (i == 0 && promptsLength == 1)
          const isLastPrompt = (i == promptsLength - 1)

          if (isFirstAndUniquePrompt) {
            return (
              <Prompt
                executedCommands={executedCommands}
                onSubmit={onSubmit}
                isLastPrompt={true}
                isFirstPrompt={true}
                key={i}
              />
            )
          } else
            if (isLastPrompt) {
              return (
                <Prompt
                  executedCommands={executedCommands}
                  onSubmit={onSubmit}
                  isLastPrompt={true}
                  key={i}
                />
              )
            }
          return (
            <Prompt
              onSubmit={onSubmit}
              key={i}
            />)
        })
      }
    </>
  )
}