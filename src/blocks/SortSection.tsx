import { SortAlgorithm } from "./../scripts/sortAlgorith";
import ArrayProvider from "../context/ArrayProvide";
import { PillarContainer } from "./PillarContainer";
import { ControlPanel } from "./ControlPanel";

type props = {
  sortAlgorithm: SortAlgorithm;
  title: string;
};

function SortSection(props: props) {
  return (
    <ArrayProvider sortAlgorithm={props.sortAlgorithm}>
      <div className="section">
        <h2>{props.title}</h2>
        <PillarContainer />
        <ControlPanel />
      </div>
    </ArrayProvider>
  );
}

export { SortSection };
