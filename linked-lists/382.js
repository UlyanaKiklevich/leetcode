function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 */
const Solution = function(head) {
  this.head = head
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let currentHead = this.head,
      k = currentHead.val,
      i = 1

  while (currentHead) {
    const p = 1 / i
    const j = Math.random()

    if (p > j) {
      k = currentHead.val
    }

    i++
    currentHead = currentHead.next
  }

  return k
}

/**
 * @param {number[]} arr
 * @return {ListNode}
 */
function createListFromArray(arr) {
  let list = new ListNode(arr[0]);
  let current = list;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return list
}

const list = createListFromArray([1,2,3])
const s = new Solution(list)
console.log(s.getRandom())
console.log(s.getRandom())
console.log(s.getRandom())
console.log(s.getRandom())
console.log(s.getRandom())
