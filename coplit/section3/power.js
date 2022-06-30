// 시간복잡도 log N -> 반복문으로 exponent / 2 까지만
// 
function power(base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    let result = 1;
    
    for (let i = 0; i < parseInt(exponent / 2); i++){
      result *= base;
    }
  
    result = result * result;
  
    if (exponent % 2 === 1){
      return (result * base) % 94906249;
    }else {
      return result % 94906249;
    }
  }
  