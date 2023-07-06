import { useState, useEffect } from "react";
import { PositiveInput } from "../ui/PositiveInput";
import { SortAlgorithm, SortGenerator } from "./../scripts/sortAlgorith";

function getElementHeight(val: number, min: number, max: number) {
  return 5 + ((val - min) / (max - min)) * 95;
}
type props = {
  sortAlgorithm: SortAlgorithm;
};

function SortSection(props: props) {
  const [arr, setArr] = useState<Array<number>>([]);
  const [currentElements, setCurrentElements] = useState([-1, -1]);
  const [algorithm, setAlgorithm] = useState<SortGenerator>();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [count, setCount] = useState(60);
  const [speed, setSpeed] = useState(90);
  const [disablePanel, setDisablePanel] = useState(false);

  useEffect(() => {
    shuffle();
  }, []);

  useEffect(() => {
    setAlgorithm(props.sortAlgorithm(arr));
    setMin(Math.min(...arr));
    setMax(Math.max(...arr));
  }, [arr]);

  function shuffle() {
    setCurrentElements([-1, -1]);
    setArr(
      Array.from({ length: count }, () => Math.round(Math.random() * 100))
    );
  }

  function startSort() {
    setDisablePanel(true);
    sortNext();
  }

  function sortNext() {
    const result = algorithm?.next();
    if (result?.value) {
      setCurrentElements(result.value);
      console.log("i, j", result.value);
      setTimeout(() => {
        sortNext();
      }, 1200 / speed);
    } else {
      setCurrentElements([-1, -1]);
      setDisablePanel(false);
    }
  }

  return (
    <div className="section">
      <div className="pillar-container">
        <div className="pillar-container2 ">
          {arr.map((elem, index) => (
            <div
              key={"pillar" + index}
              className="pillar"
              style={{
                height: `${getElementHeight(elem, min, max)}%`,
                backgroundColor: currentElements.includes(index)
                  ? "red"
                  : undefined,
              }}
            />
          ))}
        </div>
      </div>
      {disablePanel ? (
        <></>
      ) : (
        <div className="control-panel">
          <div className="control-panel_elem">
            <p className="">Count:</p>
            <PositiveInput value={count} setValue={setCount} />
          </div>
          <div className="control-panel_elem">
            <p>Speed:</p>
            <PositiveInput value={speed} setValue={setSpeed} />
          </div>
          <button onClick={startSort}>Sort</button>
          <button onClick={shuffle}>Shuffle</button>
        </div>
      )}
    </div>
  );
}

export { SortSection };
