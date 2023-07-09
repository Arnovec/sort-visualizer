import React, { useState } from "react";

type ArrayContextType = {
  arr: number[];
  max: number;
  min: number;
  currentElements: number[];
  shuffle: (count: number) => number[];
  setCurrentElements: React.Dispatch<React.SetStateAction<number[]>>;
};

type props = {
  children: JSX.Element;
};

const Context = React.createContext<ArrayContextType>({} as ArrayContextType);

const ArrayProvider = function ({ children }: props) {
  const [arr, setArr] = useState<Array<number>>([]);
  const [currentElements, setCurrentElements] = useState([-1, -1]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  function shuffle(count: number) {
    const newArr = Array.from({ length: count }, () =>
      Math.round(Math.random() * 100)
    );

    setArr(newArr);
    setMin(Math.min(...newArr));
    setMax(Math.max(...newArr));
    return newArr;
  }


  return (
    <Context.Provider
      value={{ arr, min, max, currentElements, shuffle, setCurrentElements }}
    >
      {children}
    </Context.Provider>
  );
};

export const useArrayContext = () => React.useContext(Context);
export default ArrayProvider;
