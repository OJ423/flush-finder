import { Block, Text } from "galio-framework";

export default function ({comment}) {
  return(
    <Block marginTop={40}>
      <Text muted>{comment.name}</Text>
      <Text>{comment.comment}</Text>
    </Block>
  )
}