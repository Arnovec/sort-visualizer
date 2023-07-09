import { SortAlgorithm } from "./../scripts/sortAlgorith";
import ArrayProvider from "../context/ArrayProvide";
import { PillarContainer } from "./PillarContainer";
import { ControlPanel } from "./ControlPanel";

type props = {
  sortAlgorithm: SortAlgorithm;
};

function SortSection(props: props) {
  return (
    <ArrayProvider>
      <div className="section">
        <PillarContainer />
        <ControlPanel {...props} />
      </div>
    </ArrayProvider>
  );
}

export { SortSection };
