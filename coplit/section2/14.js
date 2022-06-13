// 0부터 (i - 1)번째 요소까지 담는 새로운 배열 선언 === slice(0, i)
// 위 조건을 만족하는 배열.reduce((acc, cur) => return acc + cur)


function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    
  
    for (let i = 1; i < arr.length; i++){
      let sliceArr = arr.slice(0, i) 
      let sumBefore= sliceArr.reduce((acc,cur) => {return acc + cur}, 0)
      console.log(sumBefore)
      if(sumBefore >= arr[i]){
        return false;
      }
    }
    return true;
  }

  let output = superIncreasing([979, 1737, -2146, -337, 1316]);
console.log(output); // --> true
  