// [5, 6, 7, 1, 2, 3, 4] 3
const rotatedArraySearch = function (rotated, target) {
    // TODO : 여기에 코드를 작성합니다.
    const   min = Math.min(...rotated);
    const   minIdx = rotated.indexOf(min);

    if (target === min){
        return minIdx;
    } else if (rotated[0] <= target){
        for (let i = 0; i <= minIdx; i++){
            if (target === rotated[i]){
                return i;
            }
        }
    } else if (rotated[rotated.length - 1] >= target){
        for (let i = rotated.length - 1; i >= minIdx; i--){
            if (target === rotated[i]){
                return i;
            }
        }
    }
    return -1;
  };