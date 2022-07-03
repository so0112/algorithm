let bfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    let values = [node.value] //값이 들어가고
    let queue = [node] //노드 자체가 들어간다
  
    while (queue.length !== 0) {
      let search = queue.shift(); //탐색 시작할 노드 하나 빼서
      for (let i = 0; i < search.children.length; i++) { //그 노드의 children 배열을 순회
        values.push(search.children[i].value) //값은 values에 push
        queue.push(search.children[i]) //children 노드는 또 탐색을 해주기 위해 queue에 push
      }
    }
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
  

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));