function solution(dartResult) {
    let arr = [dartResult[0]];
    let cnt = 0;
    
    // 각 기회를 배열로 나누어줌
    for (let i = 1; i < dartResult.length; i++){
        if (isNaN(Number(dartResult[i])) === true){
           arr[cnt] += dartResult[i]; 
        }else {
            if (cnt === 2){
                arr[cnt] += dartResult[i]; 
            }else{
                cnt++;
                arr.push(dartResult[i])
            }
        }
    }
    
    // 코드 확인용
    console.log(arr); 
}

solution('1D2S#10S');