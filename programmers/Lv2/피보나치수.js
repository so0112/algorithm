// 동적 프로그래밍

function solution(n) {
    const fiboArr = [0, 1];
      
      for (let i = 2; i <= n; i++){
          fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567;
      }
      return fiboArr[n];
  }