// 1. 자리수 파악
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 2. 정렬을 몇 번 반복해야하는지 파악 : 가장 큰 숫자의 자릿수 찾기
const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3. 배열에서 최대 자릿수 찾기
const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits; 
}

// 4. 기수 정렬 함수
const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++){
        let digitBukets = Array.from({length:10}, () => [])
        for (let i = 0; i < nums.length; i++){
            digitBukets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBukets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))