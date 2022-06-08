function solution(n) {

    let   result = 0;
    const sqrtOfN = Math.sqrt(n);
  
    for (let i = 1; i <= sqrtOfN; i++) {
      if (n % i === 0) {
        result += i;
        if (n / i !== i) {
          result += n / i;
        }
      }
    }
    return (result);
  }
  