import { SortSection } from "./blocks/SortSection";
import "./App.css";
import { bubbleSort, quickSort, selectionSort } from "./scripts/sortAlgorith";

function App() {
  return (
    <>
      <SortSection sortAlgorithm={bubbleSort} title="Сортировка пузырьком" />
      <SortSection
        sortAlgorithm={selectionSort}
        title="Сортировка прямым выбором"
      />
      <SortSection sortAlgorithm={quickSort} title="Быстрая сортировка" />
    </>
  );
}

export default App;
