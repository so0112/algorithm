// 재귀함수을 돌면서 피보나치 수열의 각 항을 배열의 형태로 저장한다
// 피보나치 수열을 담는 배열을 만들어서 이전에 계산했던 항은 다시 재귀로 들어가지 않도록 최적화
function fibonacci(n) {
    // TODO: 여기에 코드를 작성합니다.
  
    const fiboArr = [0, 1, 1];
  
  function fiboRec(n){
      if (fiboArr[n] !== undefined) {
        return fiboArr[n];
      };
  
      fiboArr[n] = fiboRec(n - 2) + fiboRec(n - 1);
      return fiboArr[n];
    };
    return fiboRec(n);
  }
  