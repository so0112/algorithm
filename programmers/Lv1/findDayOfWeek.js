// 1, 1 === 'FRI'

function solution(a, b) {

    const   day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    const   mon = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let     result = b;
    
    for (let i = 1; i < a; i++){
        result += mon[i];
    }
    return day[result % 7];
}