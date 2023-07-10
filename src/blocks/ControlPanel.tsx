import { useState } from "react";
import { useArrayContext } from "../context/ArrayProvide";
import { PositiveInput } from "../ui/PositiveInput";

function ControlPanel() {
  const { count, speed, setCount, setSpeed, shuffle, sort } = useArrayContext();

  const [disablePanel, setDisablePanel] = useState(false);

  function startShuffle() {
    shuffle();
  }

  async function startSort() {
    setDisablePanel(true);
    await sort();
    setDisablePanel(false);
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
