/*https://leetcode.com/problems/add-two-numbers/solutions/1340/a-summary-about-how-to-solve-linked-list-problem-c/?orderBy=most_votes*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0
  let result = new ListNode(null),
      iterator = result

  while (l1 || l2) {
    let r = 0
    if (l1 && l2) {
      r = l1.val + l2.val + carry
    } else if (l1) {
      r = l1.val + carry
    } else if (l2) {
      r = l2.val + carry
    }

    carry = 0

    if (r > 9) {
      carry = 1
      r -= 10
    }

    if (result.val === null) {
      result.val = r
    } else {
      iterator.next = new ListNode(r)
      iterator = iterator.next
    }

    l1 = l1?.next
    l2 = l2?.next
  }

  if (carry) {
    iterator.next = new ListNode(1)
  }

  return result
}

/*const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

const ll1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
const ll2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))*/

const l1 = new ListNode(5, new ListNode(6))
const l2 = new ListNode(5, new ListNode(4, new ListNode(9)))

const print = l => {
  while (l) {
    console.log(l.val)
    l = l.next
  }
}

/*console.log(print(addTwoNumbers(l1, l2)))*/
console.log(print(addTwoNumbers(l1, l2)))
