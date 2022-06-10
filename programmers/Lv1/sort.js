// function solution(strings, n) {
    
//     strings.sort((a, b) => {
//     if (a[n] < b[n]) {
//         return -1;
//     }
//     if (a[n] > b[n]) {
//         return 1;
//     }
//     if (a[n] === b[n]) {
//         return a < b ? -1 : 1;
//     }
//     return 0;
//   });
    
//     return strings;
// }

function solution(strings, n) {
    
    let tmp = '';
    
    for (let i = 0; i < strings.length - 1; i++){
        for (let j = 0; j < strings.length - 1 - i; j++){
            if (strings[j][n] > strings[j + 1][n]){
            tmp = strings[j];
            strings[j] = strings[j + 1];
            strings[j + 1] = tmp;
            } else if (strings[j][n] === strings[j + 1][n]){
                if (strings[j] > strings[j + 1]){
                    tmp = strings[j];
                    strings[j] = strings[j + 1];
                    strings[j + 1] = tmp; 
                }
            }
        }
    }
    return strings;
}