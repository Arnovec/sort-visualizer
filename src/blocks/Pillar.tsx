import React from "react";

type props = {
  elem: number;
  max: number;
  index: number;
  min: number;
  isActive: boolean;
};

function getElementHeight(val: number, min: number, max: number) {
  return 5 + ((val - min) / (max - min)) * 95;
}

export const Pillar = React.memo(function ({
  elem,
  index,
  min,
  max,
  isActive,
}: props) {
  console.log("Новый столбик " + index);

  return (
    <div
      className="pillar"
      style={{
        height: `${getElementHeight(elem, min, max)}%`,
        backgroundColor: isActive ? "red" : undefined,
      }}
    />
  );
});
