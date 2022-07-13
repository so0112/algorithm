function powerSet(str) {
  // 문자 정렬
  let strArr = str.split('').sort();
  // 중복 제거
  let uniqueStrArr = strArr.filter((item, idx) => strArr.indexOf(item) === idx);
  console.log(uniqueStrArr)
}

console.log(powerSet('aabc'))
console.log(['a', 'a', 'b', 'c'].indexOf('a'))