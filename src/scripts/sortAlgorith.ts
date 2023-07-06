export type SortGenerator = Generator<number[], void, unknown>;

export type SortAlgorithm = (arr: number[]) => SortGenerator;

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

export { bubbleSort, selectionSort };
