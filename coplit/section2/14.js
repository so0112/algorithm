function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0;
  
    for (let i = 0; i < arr.length - 1; i++){
      sum += arr[i]
      if (sum >= arr[i + 1]){
        return false;
      }
    }
    return true;
}
  
  