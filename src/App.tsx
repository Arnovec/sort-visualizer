import { SortSection } from "./blocks/SortSection";
import "./App.css";
import { bubbleSort, selectionSort } from "./scripts/sortAlgorith";

function App() {
  return (
    <>
      <SortSection sortAlgorithm={bubbleSort} />
      <SortSection sortAlgorithm={selectionSort} />
    </>
  );
}

export default App;
