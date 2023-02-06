/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const letters = p.split('')
  let set = [...letters]
  const indices = []

  for (let i = 0; i < s.length; i++) {
    if (set.length === p.length && set.includes(s[i])) {
      let index = set.indexOf(s[i])
      set.splice(index, 1)

      let j = i + 1
      while (j < i + p.length ) {
        if (set.includes(s[j])) {
          index = set.indexOf(s[j])
          set.splice(index, 1)
        } else {
          break
        }
        j++
      }

      if (!set.length) {
        indices.push(i)
      }

      set = [...letters]
    }
  }

  return indices
}

console.log(findAnagrams('abab', 'ab'))
