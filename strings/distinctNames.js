function TreeNode(val, children) {
  this.val = (val === undefined ? 0 : val)
  this.children = children ?? []
  this.terminates = false
}

const Trie = function() {
  this.root = new TreeNode()

  this.insert = function (word) {
    const letters = word.split('')
    let pointer = this.root
    const firsNode = pointer.children.find(node => node.val === letters[0])

    if (firsNode) {
      pointer = firsNode
    } else {
      const newNode = new TreeNode(letters[0])
      pointer.children = [ ...pointer.children, newNode ]
      pointer = newNode
    }

    const newNode = new TreeNode(letters.slice(1).join(''))
    pointer.children = [ ...pointer.children, newNode ]
    pointer.terminates = true
  }

  function search(word) {

  }

  function startsWith(prefix) {

  }
}

const distinctNamesMy = function(ideas) {
  const trie = new Trie()
  const res = []

  ideas.forEach(word => trie.insert(word))

  for (let i = 0; i < trie.root.children.length; i++) {
    for (let j = i + 1; j < trie.root.children.length; j++) {
      const setA = trie.root.children[i]
      const setB = trie.root.children[j]


    }
  }

  return res
}

console.log(distinctNamesMy(["coffee","cafe","cytrus","toffee", "time"]))
