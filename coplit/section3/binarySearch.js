// 이진탐색
// target이 arr[parseInt(arr.length / 2)] 를 기준으로 탐색

const binarySearch = function (arr, target) {
    // TODO : 여기에 코드를 작성합니다.
  
    const search = function (start, end){
      let mid = parseInt((start + end) / 2);
  
      // arr 길이가 1될 때 까지
      if (start === end){
        // tartget 있으면 인덱스 반환 없으면 -1 반환
        return target === arr[start] ? start : -1;
      } 
      
      if (target > arr[mid]){
        return search(mid + 1, end);
      } else if (target < arr[mid]) {
        return search(0, mid - 1);
      } else if (target === arr[mid]){
        return mid;
      }
    }
    return search(0, arr.length - 1);
  };
  