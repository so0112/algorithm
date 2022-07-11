// N개 수의 곱 / N개의 최대 공약수 => N개의 최소공배수
// 유클리드 호제법으로 최대공약수 구하기

function solution(arr) {
    
    function gcd(a, b){
        if (b === 0) {return a;}
        return gcd(b, a % b);
    }
    return arr.reduce((acc, cur) => {
        return (acc * cur) / (gcd(acc, cur));
    })
}