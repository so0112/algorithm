function solution(sizes) {
    let answer = 0;
    let width = 0;
    let height = 0;

    for (let arr of sizes) {
     
        const numA = arr[0] < arr[1] ? arr[1] : arr[0];
        const numB = arr[0] < arr[1] ? arr[0] : arr[1];
        console.log([numA, numB])
        width = width < numA ? numA : width;
        height = height < numB ? numB : height;
    }
   
    answer = width * height;

    return ([width, height, answer])
}

console.log(solution([[10,30], [20, 30], [40, 50], [15, 10], [20, 5]]))
console.log(solution([[80,30], [20, 30], [40, 50], [15, 10], [20, 5]]))
console.log(solution([[10,5], [3, 4], [15, 8], [9, 11], [20, 5]]))