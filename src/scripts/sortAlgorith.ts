export type SortGenerator = Generator<number[], void, unknown>;

export type SortAlgorithm = (arr: number[]) => SortGenerator;
type SortAlgorithmWithBorders = (
  arr: number[],
  startIndex: number,
  endIndex: number
) => SortGenerator;

const bubbleSort: SortAlgorithm = function* (arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      yield [j, j + 1];
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const selectionSort: SortAlgorithm = function* (arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let k = 0;
    for (let j = k + 1; j < arr.length - i; j++) {
      yield [k, j];
      if (arr[k] < arr[j]) {
        k = j;
      }
    }
    [arr[k], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[k]];
  }
};

const quickSort: SortAlgorithm = function* (arr: number[]) {
  yield* quickSortStep(arr, 0, arr.length - 1);
  // const quickSortStepGenerator = quickSortStep(arr, 0, arr.length - 1);
  // for (const currentElements of quickSortStepGenerator) yield currentElements;
};

const quickSortStep: SortAlgorithmWithBorders = function* (
  arr: number[],
  startIndex: number,
  endIndex: number
) {
  if (startIndex >= endIndex) return;
  const pivot = arr[startIndex];
  let leftIndex = startIndex + 1;
  let rightIndex = endIndex;
  let isLeftWait = false;
  let isRightWait = false;

  while (leftIndex < rightIndex) {
    yield [leftIndex, rightIndex];
    if (!isLeftWait && arr[leftIndex] < pivot) {
      leftIndex++;
    } else {
      isLeftWait = true;
    }
    if (!isRightWait && arr[rightIndex] > pivot) {
      rightIndex--;
    } else {
      isRightWait = true;
    }
    if (isRightWait && isLeftWait) {
      [arr[rightIndex], arr[leftIndex]] = [arr[leftIndex], arr[rightIndex]];
      leftIndex++;
      rightIndex--;
      isLeftWait = false;
      isRightWait = false;
    }
  }
  if (pivot < arr[leftIndex]) {
    leftIndex = leftIndex - 1;
  }

  yield [startIndex, leftIndex];
  [arr[startIndex], arr[leftIndex]] = [arr[leftIndex], arr[startIndex]];

  yield* quickSortStep(arr, startIndex, leftIndex - 1);
  yield* quickSortStep(arr, leftIndex + 1, endIndex);
  // const quickSortLeftStep = quickSortStep(arr, startIndex, leftIndex - 1);
  // for (const currentElements of quickSortLeftStep) yield currentElements;
  // const quickSortRightStep = quickSortStep(arr, leftIndex + 1, endIndex);
  // for (const currentElements of quickSortRightStep) yield currentElements;
};

export { bubbleSort, selectionSort, quickSort };
