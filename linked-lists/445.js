function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let carry = 0,
      prev = null

  const getLast = l => {
    while (l) {
      if (!l.next || l.next.val === null) {
       return l
      }

      l = l.next
    }
  }

  let n1 = getLast(l1),
      n2 = getLast(l2)

  while (n1.val !== null || n2.val !== null) {
    n1 = getLast(l1)
    n2 = getLast(l2)

    carry += (n1 ? n1.val : 0) + (n2 ? n2.val : 0)

    prev = new ListNode(carry % 10, prev)

    carry = Math.trunc(carry / 10)

    n1.val = null
    n2.val = null
  }

  if (carry) {
    prev = new ListNode(1, prev)
  }

  return prev
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


const print = l => {
  let r = ''
  while (l) {
    r += l.val
    l = l.next
  }
  console.log(r)
}

/*console.log(print(addTwoNumbers(createListFromArray([7, 2, 4, 3]), createListFromArray([5, 6, 4]))))
console.log(print(addTwoNumbers(createListFromArray([2, 4, 3]), createListFromArray([5, 6, 4]))))
console.log(print(addTwoNumbers(createListFromArray([0]), createListFromArray([0]))))*/
console.log(print(addTwoNumbers(createListFromArray([9,0,1]), createListFromArray([8,7,5]))))
