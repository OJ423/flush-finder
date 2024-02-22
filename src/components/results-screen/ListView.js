import { Block } from "galio-framework";
import ResultsMap from "./ResultsMap";
import List from "./List";

export default function ListView({ setFullMap }) {
  return (
    <>
      <Block safe={true} top>
        <Block  flex center>
          <ResultsMap setFullMap={setFullMap} />
        </Block>
        <Block shadow flex center>
          <List />
        </Block>
      </Block>
    </>
  );
}


