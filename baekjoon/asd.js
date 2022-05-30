// 문자열에서 숫자 추출하기
// include와 정규표현식을 이용해 숫자를 추출할 수 있을 것 같음

function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.

  if(str.length === 0){
    return 0;
  }

  let len = str.length;
  const regex = /[^0-9]/g;
  const result = str.replace(regex, "");
  const number = result.split('').map(el => parseInt(el));
  let sum = 0
  
  console.log(number)
  for(let i = 0; i < number.length; i++){
    sum = sum + number[i];
    }

    console.log(sum)
    console.log(len)
    return (sum / len);

}


output = numberSearch('Sou2bgPJkS7Lp5r2j6jeWOts8X');
console.log(output); // --> 2