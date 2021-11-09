import { useState, useEffect } from "react";
import { SwapHistory } from "../components/stash/swapHistory";
import { TabSelector } from "../components/stash/tabSelector";
import { Grid } from "../components/stash/grid";
import { Divider } from "../components/stash/divider";
import Footer from "../components/stash/footer";

function Stash() {
  const [currentTab, setCurrentTab] = useState(0);

  const [selected, setSelected] = useState(null);

  const [swapHistory, setSwapHistory] = useState([]);

  const [steps, setSteps] = useState(0);

  const [vault, setVault] = useState([
    {
      name: "tab1",
      content: items1,
    },
    {
      name: "tab2",
      content: items2,
    },
    {
      name: "tab3",
      content: items3,
    },
  ]);

  const swap = (item) => {
    const itemA = vault[selected.currentTab].content[selected.indexInTab];
    const itemB = vault[item.currentTab].content[item.indexInTab];

    const vaulTemp = [...vault];

    vaulTemp[item.currentTab].content[item.indexInTab] = itemA;
    vaulTemp[selected.currentTab].content[selected.indexInTab] = itemB;

    setVault(vaulTemp);

    setSwapHistory([
      ...swapHistory.slice(swapHistory.length - 2),
      [itemA, itemB],
    ]);

    setSteps(steps + 1);

    setSelected(null);
  };

  return (
    <>
      <div className="bg-red-300">
        <div className="container mx-auto bg-red-600">
          <TabSelector
            vault={vault}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <Grid
            vault={vault}
            currentTab={currentTab}
            selected={selected}
            setSelected={setSelected}
            swap={swap}
          />
          <Divider />
          <SwapHistory
            swapHistory={swapHistory}
            selected={selected}
            steps={steps}
          />
          <Divider />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Stash;

const items = Array(48).fill({});

const items1 = [...items].map((e, i) => {
  return { base: 1, id: i };
});

const items2 = [...items].map((e, i) => {
  return { base: 2, id: i + 50 };
});

const items3 = [...items].map((e, i) => {
  return { base: 3, id: i + 100 };
});
