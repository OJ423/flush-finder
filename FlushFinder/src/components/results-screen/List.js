import {Accordion, Block, Card, Text} from "galio-framework";
import { useContext } from "react";
import { ToiletResponseContext } from "../../context/ToiletResponse";


export default function List() {
    const { toiletResponse } = useContext(ToiletResponseContext);
    const data=toiletResponse.map(({accessible, changing_table, city, directions, distance, name, street, unisex, state})=>{
        const obj = {}
        obj.title = 
`${name}
${street}`
        obj.content = 
`Address: ${street}
Direction: ${directions}
Unisex? ${unisex}

        `
        // obj.icon = {
        //   name: 'keyboard-arrow-up',
        //   family: 'material',
        //   size: 16,
        // } 
        return obj
    }) 
    
    // console.log(data)
  return (
    <Accordion dataArray={data} />
  )
}
