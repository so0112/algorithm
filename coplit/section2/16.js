// 중복되는 문자가 있을 경우 false
// 그 외, 빈 문자열일 경우 true

function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
  let cache = {}
  let lower = str.toLowerCase();

  for (let i = 0; i < str.length; i++){
    if (cache[lower[i]]){
        return false;
    }
    cache[lower[i]] = true;
  }

  return true
  }
  