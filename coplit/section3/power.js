// 지수 / 2 하기 때문에 지수가 홀수일 경우 밑을 한 번 더 곱해서 리턴
// 오버플로우 방지하기위해서 계속 94906249 나머지 연산해야 함 

function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    // half 까지 재귀를 돌리고 구해진 값 제곱 해서 return 
    let half = parseInt(exponent / 2);
    let tmp = power(base, half);
    let result = (tmp * tmp) % 94906249
  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result % 94906249;
  }
  
  // 연산 예시
  // power(2, 10)
  // 1. power(2, 0) === tmp = 1 , result = 1     return 1 -> tmp = 1
  // 2. power(2, 1) === tmp = 1 , result = 1     return 2 * 1 -> tmp = 2
  // 3. power(2, 2) === tmp = 2 , result = 4     return 4 -> tmp = 4
  // 4. power(2, 5) === tmp = 4 , result = 16    return 2 * 16 -> tmp = 32
  // 5. power(2, 10) === tmp = 32, result = 1024 return 1024
  