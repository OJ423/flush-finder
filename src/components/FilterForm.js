import { Block, Text,Switch } from "galio-framework";
import { useState } from "react";

export default function FilterForm ({isAccessibleOnly, setIsAccessibleOnly,hasChangingTable,setHasChangingTable,isUnisexOnly,setIsUnisexOnly}) {



  return (
    <>
      <Text muted color="white" style={{marginTop:20, marginBottom: 10}}>Only show results with: </Text>
    <Block row>
    <Block center flex={1}>
  <Switch accessibilityLabel={`Accesssible ${isAccessibleOnly}`} aria-value="off" color="white"   value={isAccessibleOnly}
  onChange={() => setIsAccessibleOnly(!isAccessibleOnly)}/>
  <Text color="white">Accessible</Text>
    </Block>
    <Block  center flex={1}>
    <Switch accessibilityLabel={`Unisex ${isUnisexOnly}`} color="white"  value={isUnisexOnly}
  onChange={() => setIsUnisexOnly(!isUnisexOnly)}/>
  <Text color="white">Unisex</Text>
    </Block>
    <Block center flex={1}>
  <Switch accessibilityLabel={`Changing table ${hasChangingTable}`} color="white"  value={hasChangingTable}
  onChange={() => setHasChangingTable(!hasChangingTable)}/>
  <Text color="white">Changing table</Text>
    </Block>
</Block>
</>)
}