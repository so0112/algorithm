// commands [start, end, n번째 수]
// array를 slice(start - 1, end) 한 뒤 sort((a, b) => b - a) 그 다움 n - 1번째 인덱스의 숫자를 추출
function solution(array, commands) {
    return commands.map(([start,end,n])=>array.slice(start-1, end).sort((a,b)=>a - b)[n-1])
}