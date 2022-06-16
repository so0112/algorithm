// 중복되는 문자가 있을 경우 false
// 그 외, 빈 문자열일 경우 true

function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
  
    let lower = str.toLowerCase()
    for (let i = 0; i < lower.length; i++){
      for(let j = i + 1; j < lower.length; j++){
        if(lower[i] === lower[j]){
          return false;
        }
      }
    }
    return true;
  }
  