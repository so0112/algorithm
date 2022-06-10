// short, long 문자열 찾기
// 해당 인덱스 배열 splice로 제거

function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    let short = arr[0]
    let long = arr[0]
  
    for (let i = 1; i < arr.length; i++){
      if(short.length >= arr[i].length){
        short = arr[i]
      }
  
      if(long.length <= arr[i].length){
        long = arr[i]
      }
    }
    arr.splice(arr.indexOf(short), 1)
    arr.splice(arr.indexOf(long), 1)
  
    return arr;
  }
  