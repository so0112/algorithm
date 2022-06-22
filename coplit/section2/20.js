// before 변수에 str[i - 1] 값 할당 -> 반복문 마지막에 before 변수에 str[i] 값을 할당하고 i++ 
// cnt = 1 -> 다음 문자열이 같을 경우 cnt++ => ex) 'ww' 일 경우 2개 중복 따라서 cnt 2되도록 만들어 줘야함
// 다른 문자열이 나오는 경우에 cnt + 중복문자열 반환하도록

// str의 마지막문자열은 비교할 대상이 없기 때문에 i <= str.length로 마지막 문자열 비교가능하도록 설정

function compressString(str) {
  // TODO: 여기에 코드를 작성합니다.

  let before = str[0];
  let cnt = 1;
  let result = '';

  for (let i = 1; i <= str.length; i++) {
    if (before == str[i]) {
      cnt++;
    } else {
      if (cnt >= 3) {
        result += cnt + before;
      } else {
        result += before.repeat(cnt);
      }
      before = str[i];
      cnt = 1;
    }
  }
  return result;
}

let output = compressString("dsafdasfffffsgaaaaabbbscccdd");
console.log(output);
