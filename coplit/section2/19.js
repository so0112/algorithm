// 현재 알파벳 인덱스에서 secret 만큼 빼서 복호화
// 인덱스보다 큰 secret이 들어왔을 때 처리 중요

// 문자열 반복문 설정
// str[i] 인덱스가 alphabet문자열에서 몇 번째 인덱스에 존재하는지?

function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let idx = 0;
  let result = "";

// 문자열 반복문
  for (let i = 0; i < str.length; i++) {
    idx = alphabet.indexOf(str[i]);

// str[i] 공백일 경우 result에 공백 추가 continue
    if (str[i] === ' ') {
      result += ' ';
      continue;
    }

// idx가 secret보다 클 경우 복호화
    if (idx < secret) {
      result += alphabet[26 + (idx - secret)];

//그 외 복호화
    } else {
        result += alphabet[idx - secret];
    }
  }

  return result;
}


let output = decryptCaesarCipher('mnv xnt zqd qdzcx sn lnud sn hlldqrhud bntqrd', 25);
console.log(output); // 'now you are ready to move to immersive course'