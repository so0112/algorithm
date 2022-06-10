function solution(a, b) {
    
    let result = 0;
    let tmp = 0;
    
    if (a > b){
        tmp = a;
        a = b;
        b = tmp;
    }
    
    for (let i = a; i <= b; i++){
        result += i;    
    }
    
    return result
}