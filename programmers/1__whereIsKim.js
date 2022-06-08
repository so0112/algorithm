function solution(seoul) {
    
    let     idx = 0;

    for (let i = 0; i < seoul.length; i++){
        if(seoul[i] === 'Kim'){
            break;
        }
        idx++;
    }
    return `김서방은 ${idx}에 있다`;
}