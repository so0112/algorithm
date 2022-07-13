// 왼쪽 숫자보다 작으면 바꾸는 정렬방식

const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let i, j, tmp;

  for (i = 1; i < arr.length; i++) {
    tmp = arr[i];
    for (j = i - 1; j >= 0 && tmp < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tmp;
  }
  return arr;
};

let output = insertionSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
