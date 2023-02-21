function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let iterator = head

  while(iterator) {
    if (iterator.next && iterator.val === iterator.next.val) {
      iterator.next = iterator.next.next
    } else {
      iterator = iterator.next
    }
  }

  return head
}

console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1)))))
