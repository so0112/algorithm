function solution(sizes) {
    let arr = sizes.map(el => el.sort((a, b) => b - a));
    let width = Math.max(...arr.map(el => el[0]));
    let height = Math.max(...arr.map(el => el[1]));
    
    return width * height  
}


}

console.log(solution([[10,30], [20, 30], [40, 50], [15, 10], [20, 5]]))
console.log(solution([[80,30], [20, 30], [40, 50], [15, 10], [20, 5]]))
console.log(solution([[10,5], [3, 4], [15, 8], [9, 11], [20, 5]]))