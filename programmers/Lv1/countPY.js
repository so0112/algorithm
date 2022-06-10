function solution(s){
    
    let str = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    
    for (let i = 0; i < str.length; i++ ){
        if (str[i] === 'p'){
            cntP ++;
        }
        if (str[i] === 'y'){
            cntY ++;
        }
    }
    if (cntP === cntY){
        return (true);
    }
    return (false);
}