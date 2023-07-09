import { useState, useEffect } from "react";
import { useArrayContext } from "../context/ArrayProvide";
import { SortAlgorithm, SortGenerator } from "./../scripts/sortAlgorith";
import { PositiveInput } from "../ui/PositiveInput";

type props = {
  sortAlgorithm: SortAlgorithm;
};

function ControlPanel({ sortAlgorithm }: props) {
  const [algorithm, setAlgorithm] = useState<SortGenerator>();
  const [count, setCount] = useState(60);
  const [speed, setSpeed] = useState(90);
  const [disablePanel, setDisablePanel] = useState(false);
  const { shuffle, setCurrentElements } = useArrayContext();

  useEffect(() => {
    startShuffle();
  }, []);

  function startShuffle() {
    setAlgorithm(sortAlgorithm(shuffle(count)));
  }

  function startSort() {
    setDisablePanel(true);
    sortNext();
  }

  function sortNext() {
    const result = algorithm?.next();
    if (result?.value) {
      setCurrentElements(result.value);
      setTimeout(() => {
        sortNext();
      }, 1200 / speed);
    } else {
      setCurrentElements([-1, -1]);
      setDisablePanel(false);
    }
  }

  return (
    <div className="control-panel">
      {disablePanel ? (
        <></>
      ) : (
        <>
          <div className="control-panel_elem">
            <p>Count:</p>
            <PositiveInput value={count} setValue={setCount} />
          </div>
          <div className="control-panel_elem">
            <p>Speed:</p>
            <PositiveInput value={speed} setValue={setSpeed} />
          </div>
          <button onClick={startSort}>Sort</button>
          <button onClick={startShuffle}>Shuffle</button>
        </>
      )}
    </div>
  );
}

export { ControlPanel };
