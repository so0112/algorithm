// 이미 지나간 인덱스는 탐색하지 않도록 중간 세이브 포인트를 만듦 => 함수로 새로 구현

const isSubsetOf = (base, sample) => {
    // 오름차순 정렬
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);
  
    // 오름차순으로 정렬했기 때문에 확인한 인덱스의 값은 다음 비교에서 제외됨
  
    const findSample = (find, arr, start) => {
  
      for (let i = start; i < arr.length; i ++){
        if (find === arr[i]){
          return i;
        }else if (find < arr[i]){
          return -1;
        }
      }
      return -1;
    }
  
    let baseSave = 0;
  
    for (let i = 0; i < sample.length; i++){
      baseSave = findSample(sample[i], base, baseSave);
      if (baseSave === -1){
        return false;
      }
    }
    return true;
  }
  
  base = [10, 99, 123, 7];
  sample = [11, 100, 99, 123];
  output = isSubsetOf(base, sample);
  console.log(output); // --> false