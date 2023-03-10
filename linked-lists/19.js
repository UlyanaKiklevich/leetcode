function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let counter = 0,
      currHead = { ...head },
      newHead = head

  while(currHead) {
    counter++
    currHead = currHead.next
  }

  if (counter - n === 0) {
    return head.next
  }

  while (counter - n > 1) {
    newHead = newHead.next
    counter --
  }

  newHead.next = newHead.next?.next || null

  return head
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

console.log(removeNthFromEnd(createListFromArray([1, 2]), 2))
console.log(removeNthFromEnd(createListFromArray([1]), 1))
console.log(removeNthFromEnd(createListFromArray([1,2,3,4,5]), 2))
