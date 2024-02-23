import { Block } from "galio-framework";
import ResultsMap from "./ResultsMap";
import List from "./List";

export default function ListView({ setFullMap, initialRegion, setInitialRegion, setSelectedToilet, selectedToilet}) {
  return (
    <>
      <Block safe={true} top>
        <Block  flex center>
          <ResultsMap setFullMap={setFullMap} selectedToilet={selectedToilet}/>
        </Block>
        <Block shadow flex center>
          <List setSelectedToilet={setSelectedToilet}/>
        </Block>
      </Block>
    </>
  );
}


