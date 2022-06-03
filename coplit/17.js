// 임의의 숫자 sqrt
// while sqrt ** 2 < num 될 때까지 +1
// 똑같이 whilte sqrt ** 2 < num 될 때까지 +0.1
// 셋째 자리까지 구해야하니 +0.001 까지 while 작성해야함
// 근사값을 구하기위해 더해야하는 값을 배열로 만듦 decimals

// sqrt ** 2 === num 일 경우 return sqrt
// sqrt ** 2 > num 일 경우 decimals[i] 값을 빼줘서 sqrt ** 2 의 값이 목표값을 넘지않도록 설정해줌

// 마지막으로 .toFixed(2) 메소드로 2번째 자리수까지만 나타내도록
// 위 메소드는 문자열로 변환되기 때문에 Number()로 다시 숫자타입으로 변환

function computeSquareRoot(num) {
    const decimals = [1, 0.1, 0.01, 0.001];
    let sqrt = 1;
    for (let i = 0; i < decimals.length; i++) {
      while (sqrt * sqrt < num) {
        sqrt += decimals[i];
      }
  
      if (sqrt ** 2 === num) {
        return sqrt;
      } else {
        while(sqrt ** 2 > num){
          sqrt -= decimals[i];
        }
      }
    }
    return Number(sqrt.toFixed(2));
  }
  