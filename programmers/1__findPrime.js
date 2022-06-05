// isPrime 함수 만들기
// filter로 거르기

function isPrime(x) {
  let   sqrt = Math.sqrt(x);

  for (let i = 2; i <= sqrt; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  let   arr = [];

  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }
  arr = arr.filter((el) => isPrime(el) === true);
  return arr.length;
}
