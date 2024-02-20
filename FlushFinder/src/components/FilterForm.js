import { Block, Text,Switch } from "galio-framework";
import { useState } from "react";

export default function FilterForm () {



  return (
    <Block row>
    <Block center flex={1}>
  {/* <Switch color="white"   value={this.state["switch-1"]}
  onValueChange={() => this.toggleSwitch("switch-1")}></Switch> */}
  <Text color="white">Accessible?</Text>
    </Block>
    <Block  center flex={1}>
  {/* <Switch color="white"></Switch> */}
  <Text color="white">Unisex?</Text>
    </Block>
    <Block center flex={1}>
  {/* <Switch color="white"></Switch> */}
  <Text color="white">Changing table?</Text>
    </Block>
</Block>
  )
}