import { useArrayContext } from "../context/ArrayProvide";

function getElementHeight(val: number, min: number, max: number) {
  return 5 + ((val - min) / (max - min)) * 95;
}

function PillarContainer() {
  const { arr, min, max, currentElements } = useArrayContext();

  return (
    <div className="pillar-container">
      <div className="pillar-container__content ">
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
  );
}

export { PillarContainer };
