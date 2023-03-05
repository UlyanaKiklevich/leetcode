/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function(arr) {
  const createGraph = nums => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
      let indices = []

      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j] && i !== j) {
          indices.push(j)
        }
      }

      if (i > 0 && i < nums.length - 1) {
        map.set(i, new Set([ ...indices, i - 1, i + 1 ].sort()))
      } else if (i < nums.length - 1) {
        map.set(i, new Set([ ...indices, i + 1 ].sort()))
      } else if (i > 0) {
        map.set(i, new Set([ ...indices, i - 1].sort()))
      } else {
        map.set(i, [ i ])
      }
    }

    return map
  }

  const getShortestWay = (matrix, V, root, target) => {
    const visited = new Array(V).fill(false)
    const queue = []
    const dist = new Array(V).fill(Number.MAX_VALUE)
    const pred = new Array(V).fill(-1)

    visited[0] = true
    dist[0] = 0
    queue.push(0)

    while(queue.length) {
      const vertex = queue.shift()
      let neighbors = matrix.get(vertex)
      if (!neighbors) {
        continue
      }

      for (let i = 0; i < [ ...neighbors ].length; i++) {
        const t = [ ...neighbors ][i]
        if (!visited[t]) {
          visited[t] = true
          dist[t] = dist[vertex] + 1
          pred[t] = vertex
          queue.push(t)
        }
      }
    }

    return dist[target]
  }

  const matrix = createGraph(arr)

  return getShortestWay(matrix, arr.length, 0, arr.length - 1)
}


console.log(minJumps([100,-23,-23,404,100,23,23,23,3,404]))
console.log(minJumps([101, 1, 2, 3, 101, 4, 5, 6]))
console.log(minJumps([7]))
