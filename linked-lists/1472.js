function ListNode(val, next, prev) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
  this.prev = (prev === undefined ? null : prev)
}

/**
 * @param {string} homepage
 */
const BrowserHistory = function(homepage) {
  this.history = new ListNode(homepage)
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.history.next = new ListNode(url, null, this.history)
  this.history = this.history.next
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  for (let i = 0; i < steps; i++) {
    if (this.history.prev) {
      this.history = this.history.prev
    } else {
      break
    }
  }

  return this.history.val
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  for (let i = 0; i < steps; i++) {
    if (this.history.next) {
      this.history = this.history.next
    } else {
      break
    }
  }

  return this.history.val
}

const obj = new BrowserHistory('leetcode.com')
obj.visit('google.com')
obj.visit('facebook.com')
obj.visit('youtube.com')
console.log(obj.back(1))
console.log(obj.back(1))
console.log(obj.forward(1))
obj.visit('linkedin.com')
console.log(obj.forward(2))
console.log(obj.back(2))
console.log(obj.back(7))


/**
 * Your BrowserHistory object will be instantiated and called as such:
 * const obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * const param_2 = obj.back(steps)
 * const param_3 = obj.forward(steps)
 */
