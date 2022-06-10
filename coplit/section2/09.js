// a를 발견 -> +4번째 인덱스가 b인가?
// b를 발견 -> +4번째 인덱스가 a인가?
function ABCheck(str) {
    // code goes here
  
    let word = str.toLowerCase();
  
    for (let i = 0; i < word.length; i++) {
      if (word[i] === 'a' && word[i + 4] === 'b') {
        return true;
      }
  
      if (word[i] === 'b' && word[i + 4] === 'a') {
        return true;
      }
    }
    return false;
  }