const   result = [];

function solution(N, stages) {
    
    for (let i = 1; i <= N; i++){
        
       let curStage = stages.filter((el) => el === i).length;
       let passStage = stages.filter((el) => el >= i).length;
        
        result.push([i, (curStage / passStage)])
    }
    result.sort((a, b) => b[1] - a[1]);
    return result.map((el) => el[0]);
}
