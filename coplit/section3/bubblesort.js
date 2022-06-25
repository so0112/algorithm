const bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    const   len = arr.length - 1; 
    let     tmp = 0;

    for (let i = 0; i < len; i++) {
      let   cnt = 0;
      for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
          tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          cnt++;
        }
      }
      if (cnt === 0) {
        return arr;
      }
    }
     return arr;
  }