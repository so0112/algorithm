// isPrime 함수 만들기
// filter로 거르기

let isPrime = function(x) {
    
    let   sqrt = Math.sqrt(x);
  
    for (let i = 2; i <= sqrt; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function solution(n) {
    let   arr = [2];
  
    for (let i = 3; i <= n; i += 2) {
      arr.push(i);
    }
    arr = arr.filter((el) => {return isPrime(el) === true});
    return arr.length;
  }
  
