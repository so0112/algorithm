//각 배열을 순환하면서 문자열의 한 요소씩 번갈아가면서
//스트링으로 추가해줌 만약의 요소가 undefined일 경우 추가 x

// arr[0][0] + arr[1][0] + arr[0][1] + arr[1][1]

function readVertically(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        ///////////
        if (newArr.length === j) {
          // 수정된 코드는 newArr의 길이보다 긴 인자가와도 더긴 부분은 추가로 
          //push를 해주게되서 문제없이 코드가 실행된다!
          newArr.push(arr[i][j]);
        } else {
          newArr[j] += arr[i][j];
        }
      }
    }
    return newArr.join('');
  }
  
  
  input = [
    //
    'hi',
    'wolrd',
  ];
  output = readVertically(input);
  console.log(output); // --> 'hwiolrd'

  // 단계별 과정
  // len = 0, i = 0, j = 0 [h]
  // len = 1, i = 0, j = 1 [h, i]
  // len = 1, i = 1, j = 0 [hw, i]
  // len = 2, i = 1, j = 1 [hw, io]
  // len = 2, i = 1, j = 2 [hw, io, l]
  // len = 3, i = 1, j = 3 [hw, io, l, r]
  // len = 4, i = 1, j = 4 [hw, io, l, r, d]

  //join 'hwiolrd'