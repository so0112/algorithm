function solution(strings, n) {
    
    let tmp = '';
    
    for(let i = 0; i < strings.length - 1; i++){
        if (strings[i][n] > strings[i + 1][n]){
            tmp = strings[i];
            strings[i] = strings[i + 1];
            strings[i + 1] = tmp;
        }
    }
    
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1))