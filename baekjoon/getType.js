let name = 'so';

function showName(){
  let name = 'os'  // 지역 스코프 내에서 새로 선언된 변수 
  console.log(name);
}

console.log(name);
showName();
console.log(name);