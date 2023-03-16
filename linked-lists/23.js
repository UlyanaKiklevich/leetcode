function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if (!lists.length) return null
  let result = lists[0]

  for (let i = 1; i < lists.length; i++) {
    result = merge2Lists(result, lists[i])
  }

  return result ?? null
}

const merge2Lists = function(list1, list2) {
  let result, currentHead

  while(list1 || list2) {
    if (list1 && list2 && list1.val <= list2.val || list1 && !list2) {
      if (result) {
        currentHead.next = new ListNode(list1.val)
        currentHead = currentHead.next
      } else {
        currentHead = new ListNode(list1.val)
        result = currentHead
      }
      list1 = list1.next
    } else if (list1 && list2 && list1.val > list2.val || list2 && !list1) {
      if (result) {
        currentHead.next = new ListNode(list2.val)
        currentHead = currentHead.next
      } else {
        currentHead = new ListNode(list2.val)
        result = currentHead
      }

      list2 = list2.next
    }
  }

  return result
}

console.log(mergeKLists([ createListFromArray([1,4,5]), createListFromArray([1,3,4]), createListFromArray([2,6]) ]))
console.log(mergeKLists([]))
console.log(mergeKLists([]))

var mergeKLists1 = function(lists) {
  const Queue = function () {
    const heap = []

    /**
     * @param {ListNode} node
     */
    const push = function (node) {
      /**
       * @param {number} val
       * @param {number} l
       * @param {number} r
       */
      const getPosition = (val, l, r) => {
        while (l <= r) {
          const m = l + Math.trunc((r - l) / 2)
          if (this.heap[m].val < val) {
            r = m - 1
          } else {
            l = m  + 1
          }
        }

        return l
      }

      const position = getPosition(node.val, 0, this.heap.length - 1)
      this.heap.splice(position, 0, node)
    }

    const pop = function () {
      return this.heap.pop()
    }

    const length = function () {
      return this.heap.length
    }

    return { heap, push, pop, length }
  }

  const queue = new Queue()

  for (const list of lists) {
    if (list) {
      queue.push(list)
    }
  }

  let result = new ListNode(),
    node = result
  while (queue.length()) {
    node.next = queue.pop()
    node = node.next
    if (node.next) {
      queue.push(node.next)
    }
  }

  return result.next
}
