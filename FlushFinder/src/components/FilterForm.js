import { Block, Text,Switch } from "galio-framework";

export default function FilterForm () {
  return (
    <Block row>
    <Block center flex={1}>
  {/* <Switch color="white"></Switch> */}
  <Text color="white">Accessible?</Text>
    </Block>
    <Block  center flex={1}>
  {/* <Switch color="info" trackColor="white"></Switch> */}
  <Text color="white">Unisex?</Text>
    </Block>
    <Block center flex={1}>
  {/* <Switch color="success" trackColor="white"></Switch> */}
  <Text color="white">Changing table?</Text>
    </Block>
</Block>
  )
}