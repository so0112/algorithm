function solution(s, n) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = lower.toUpperCase();
  let   idx = 0;
  let   result = "";

  for (let i = 0; i < s.length; i++) {
    
    if (s[i] === " ") {
      result += " ";
      continue;
    }

    if (s[i] === s[i].toLowerCase()){
        idx = lower.indexOf(s[i]);
        result += lower[(idx + n) % 26];
    } else {
        idx = upper.indexOf(s[i]);
        result += upper[(idx + n) % 26];
        }
    }
    return result;
  }

// test code
console.log(solution("A", 26));
