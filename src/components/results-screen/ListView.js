import { Block } from "galio-framework";
import ResultsMap from "./ResultsMap";
import List from "./List";
import { useState } from "react";

export default function ListView({ setFullMap, setSelectedToilet, selectedToilet}) {
  return (
    <>
      <Block top>
        <Block  flex center>
          <ResultsMap setFullMap={setFullMap} selectedToilet={selectedToilet} />
        </Block>
        <Block shadow flex center>
          <List setSelectedToilet={setSelectedToilet} selectedToilet={selectedToilet} />
        </Block>
      </Block>
    </>
  );
}


