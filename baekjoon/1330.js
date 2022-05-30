// 공백을 기준으로 arr 인덱스에 할당

function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = str.split(' ');
  let result = []

  for(let i = 0; i < arr.length; i++){

  result.push(arr[i][0].toUpperCase());
  result.push(arr[i].slice(1,str.length))
  }
  
  return result;
}

let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "
