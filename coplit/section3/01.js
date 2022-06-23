// 배열을 내림차순으로 정렬 인덱스 0, 1, 2 곱의 값
// 인덱스 0, len - 2, len - 3 곱의 값

const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    const sorted = arr.slice().sort((a,b) => b - a)
    const num1 = sorted[0] * sorted[1] * sorted[2]
    const num2 = sorted[0] * sorted[sorted.length - 1] * sorted[sorted.length - 2]
  
    return Math.max(num1, num2)
  
  };
  