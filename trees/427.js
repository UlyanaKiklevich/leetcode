function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function (grid) {
  const all1 = grid.flat().every(el => el === 1)
  const all0 = grid.flat().every(el => el === 0)
  let n = grid.length,
      x = 0,
      y = 0

  if (all1) {
    return new Node(1, 1)
  }

  if (all0) {
    return new Node(0, 1)
  }

  const t = (x, y, n) => {
    const section = grid.slice(x, x + n).map(el => el.slice(y, y + n)).flat()
    const all1 = section.every(el => el === 1)
    const all0 = section.every(el => el === 0)

    if (all1) {
      return new Node(1, 1)
    }

    if (all0) {
      return new Node(0, 1)
    }

    n /= 2

    const topLeft = t(x, y, n)
    const topRight = t(x, y + n, n)
    const bottomLeft = t(x + n, y, n)
    const bottomRight = t(x + n, y + n, n)
    return new Node(0, 0, topLeft, topRight, bottomLeft, bottomRight)
  }

  return t(x, y, n)
}

/*console.log(construct([[0,1],[1,0]]))*/
console.log(construct([[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]))

function TreeToArray(root) {
  if (root == null) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node == null) {
      result.push(null);
      continue;
    }
    result.push(node.val);
    queue.push(node.topLeft);
    queue.push(node.topRight);
    queue.push(node.bottomLeft);
    queue.push(node.bottomRight);
  }
  return result;
}

function ArrayToTree(arr) {
  if (arr.length == 0) return null;
  let root = new Node(arr[0], true, null, null, null, null);
  let queue = [root];
  let index = 1;
  while (index < arr.length) {
    let node = queue.shift();
    if (node == null) continue;
    node.isLeaf = false;
    node.topLeft = new Node(arr[index++], true, null, null, null, null);
    node.topRight = new Node(arr[index++], true, null, null, null, null);
    node.bottomLeft = new Node(arr[index++], true, null, null, null, null);
    node.bottomRight = new Node(arr[index++], true, null, null, null, null);
    queue.push(node.topLeft);
    queue.push(node.topRight);
    queue.push(node.bottomLeft);
    queue.push(node.bottomRight);
  }
  return root;
}
