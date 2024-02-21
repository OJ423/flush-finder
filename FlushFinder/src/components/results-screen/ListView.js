import { Block } from "galio-framework"
import ResultsMap from "./ResultsMap"
import List from "./List"

export default function ListView(setFullMap) {
    return (
        <>
        <Block>
          <ResultsMap setFullMap={setFullMap} />
        </Block>
        <Block center>
        <List />
        </Block>
      </>
    )
}
