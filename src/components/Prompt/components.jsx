import { Text } from '@chakra-ui/react'

export const PromptBreadcrumb = () => {
  return (
    <>
      <Text as="span" fontWeight={"bold"} color="#f1fa8c">you </Text>
      <Text as="span" fontWeight={"bold"} color="#f8f8f2">in </Text>
      <Text as="span" fontWeight={"bold"} color="#8be9fd">~</Text>
    </>
  )
}

export const PromptResult = ({ promptResult }) => {
  return (
    <div
      style={{ color: "#f8f8f2" }}
      dangerouslySetInnerHTML={{ __html: promptResult }}
    />
  )
}