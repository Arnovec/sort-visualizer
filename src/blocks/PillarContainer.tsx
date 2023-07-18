import { useMemo } from "react";
import { useArrayContext } from "../context/ArrayProvide";
import { Pillar } from "./Pillar";

const PillarContainer = function () {
  const { arr, min, max, currentElements } = useArrayContext();

  return useMemo(() => {
    console.log("новые столбы");
    return (
      <div className="pillar-container">
        <div className="pillar-container__content ">
          {arr.map((elem, index) => (
            <Pillar
              key={"pillar " + index}
              {...{ elem, index, min, max }}
              isActive={currentElements.includes(index)}
            />
          ))}
        </div>
      </div>
    );
  }, [arr, min, max, currentElements]);
};

export { PillarContainer };
