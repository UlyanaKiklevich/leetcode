function TreeNode(val, children) {
  this.val = (val === undefined ? 0 : val)
  this.children = children ?? []
  this.terminates = false
}

const Trie = function() {
  this.root = new TreeNode()

  this.iterateLetters = word => {
    const letters = word.split('')
    let pointer = this.root
    for (let i = 0; i < letters.length; i++) {
      const letterNode = pointer.children.find(node => node.val === letters[i])
      if (!letterNode) {
        return false
      }

      pointer = letterNode
    }

    return pointer
  }
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  const letters = word.split('')
  let pointer = this.root
  for (let i = 0; i < letters.length; i++) {
    const letterNode = pointer.children.find(node => node.val === letters[i])
    if (!letterNode) {
      const newNode =  new TreeNode(letters[i])
      pointer.children = [ ...pointer.children, newNode ]
      pointer = newNode
    } else {
      pointer = letterNode
    }
  }

  pointer.terminates = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const found = this.iterateLetters(word)
  return found ? found.terminates : false
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this.iterateLetters(prefix)
}

var obj = new Trie()
obj.insert('app')
obj.insert('apple')
obj.insert('beer')
obj.insert('add')
obj.insert('jam')
obj.insert('rental')

console.log(obj.search('apps'))
console.log(obj.search('app'))
console.log(obj.search('ad'))
console.log(obj.search('applepie'))
console.log(obj.search('rest'))
console.log(obj.search('jan'))
console.log(obj.search('rent'))
console.log(obj.search('beer'))
console.log(obj.search('jam'))

console.log(obj.startsWith('apps'))
console.log(obj.startsWith('app'))
console.log(obj.startsWith('ad'))
console.log(obj.startsWith('applepie'))
console.log(obj.startsWith('rest'))
console.log(obj.startsWith('jan'))
console.log(obj.startsWith('rent'))
console.log(obj.startsWith('beer'))
console.log(obj.startsWith('jam'))

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
