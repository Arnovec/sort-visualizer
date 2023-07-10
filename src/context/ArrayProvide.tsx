import React, { useState } from "react";
import { SortAlgorithm, SortGenerator } from "../scripts/sortAlgorith";

type ArrayContextType = {
  arr: number[];
  max: number;
  min: number;
  currentElements: number[];
  shuffle: () => number[];
  sort: () => void;
  count: number;
  setCount: (count: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
};

type props = {
  children: JSX.Element;
  sortAlgorithm: SortAlgorithm;
};

function createArray(count: number) {
  return Array.from({ length: count }, () => Math.round(Math.random() * 100));
}

const Context = React.createContext<ArrayContextType>({} as ArrayContextType);

const ArrayProvider = function ({ children, sortAlgorithm }: props) {
  const [count, setCount] = useState(60);
  const [speed, setSpeed] = useState(90);
  const [arr, setArr] = useState<number[]>(createArray(count));
  const [currentElements, setCurrentElements] = useState([-1, -1]);
  const [min, setMin] = useState(Math.min(...arr));
  const [max, setMax] = useState(Math.max(...arr));
  const [algorithm, setAlgorithm] = useState<SortGenerator>(sortAlgorithm(arr));

  function shuffle() {
    const newArr = createArray(count);

    setArr(newArr);
    setMin(Math.min(...newArr));
    setMax(Math.max(...newArr));
    setAlgorithm(sortAlgorithm(newArr));
    return newArr;
  }

  async function sort() {
    // debugger;
    const result = algorithm.next();
    if (result?.value) {
      setCurrentElements(result.value);
      await new Promise((resolve) => {
        setTimeout(async () => {
          await sort();
          resolve(true);
        }, 1200 / speed);
      });
    } else {
      setCurrentElements([-1, -1]);
    }
  }

  return (
    <Context.Provider
      value={{
        arr,
        min,
        max,
        currentElements,
        shuffle,
        sort,
        count,
        setCount,
        speed,
        setSpeed,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useArrayContext = () => React.useContext(Context);
export default ArrayProvider;
