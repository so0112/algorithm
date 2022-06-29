// 탐색되는 순서대로 노드의 값이 저장된 배열 리턴
// 노드에 자식이 있을 경우 우선 탐색 -> 끝까지 탐색한 뒤 다음 노드 탐색

let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    let values = [node.value]
  
    node.children.forEach((el) =>{
      values = values.concat(dfs(el))
    })
  
    return values;
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };
  