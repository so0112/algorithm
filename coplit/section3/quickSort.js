// pivot = 정렬 기준 되는 숫자 (아무 숫자나 상관 없음)
// left, right 지정
// left를 + 1 인덱스 증가 pivot보다 큰 수에 도착하면 멈춤
// right를  - 1 인덱스 감소 pivot 보다 작은 수에 도착하면 멈춤
// left와 right를 교체

// 멈췄던 자리에서 left를 다시 인덱스 + 1하면서 pivot보다 큰 수 찾음
// right도 -1 이동 pivot 보다 작은 수 를 찾음 
// 만약 left right 만난다면 pivot과 교체

// 이 과정이 끝나면 pivot 왼쪽에는 작은 수 오른쪽에는 큰 수가 모인다

// 왼쪽에 모인 작은 수를 대상으로 위와 같은 과정 반복
// 오른쪽 모인 큰 수 대상으로 위와 같은 과정 반복

// 정렬될 때까지 재귀로 반복
const quickSort = function (arr) {
    if (arr.length <= 1) return arr;
  
    const [pivot, left, right] = [arr[0], [], []];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
  };