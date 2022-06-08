function solution(s) {
    
    let len = s.length;

    if(len !== 4 && len !==6){
        return false
    }

    for (let i = 0; i < s.length; i++){
        if(isNaN(typeof(s[i]))){
            return false;
        }
    }
    return true;
}

let result = 'a234'
console.log(solution(result));

