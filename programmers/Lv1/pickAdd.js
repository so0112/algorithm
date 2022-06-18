function solution(numbers) {
    let cache = {};
    let result = [];
    
    for (let i in numbers){
        for (let j in numbers){
            if (i !== j){
                cache[numbers[i] + numbers[j]] = true;
            }
        }
    }
    
    for (let i in cache){
        result.push(i)
    }
    
    return result.map(el => Number(el));
}