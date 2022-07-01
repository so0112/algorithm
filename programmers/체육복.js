// n : 전체 학생수
// lost : 도난 당한 학생의 번호
// reserve : 여벌 체육복을 가져온 학생들의 번호

// return 체육복 입은 학생의 최대값

// 조건
// 여벌 가져온 학생들도 도난 당할 수 있음 -> 여벌이있어도 도난을 당했다면 빌려줄 수 없다
// 인접한 번호의 학생들에게만 빌려줄 수 있다.
function solution(n, lost, reserve) {
    for(let item of lost){
        if (reserve.includes(item)){
           reserve = reserve.filter((el) => el !== item);
           lost = lost.filter((el => el !== item))
        }
    }
    let cnt = n - lost.length
     
    for (let i = 1; i <= n; i++){
        if (lost.includes(i)){
            if (reserve.includes(i - 1)){
                lost = lost.filter((el) => el !== i)
                reserve = reserve.filter((el) => el !== i - 1)
                cnt++;
            } else if (reserve.includes(i + 1)){
                lost = lost.filter((el) => el !== i)
                reserve = reserve.filter((el) => el !== i + 1)
                cnt++;
            }
        }
    }
    return cnt;
}