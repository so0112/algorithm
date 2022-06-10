// 0번째 인덱스의 요소를 쫙 훑음
// 마지막 인덱스까지 반복

function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] === 'B'){
          return [i, j];
        }
      }
  
    }
  }
  