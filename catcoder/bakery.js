const calculate = s => {
  const parsed = s.split(' ')
  const fs = []
  const bs = []
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i] === 'F') {
      i ++
      fs[parseInt(parsed[i]) - 1] = parseInt(parsed[++i])
      continue
    }
    if (parsed[i] === 'B') {
      i ++

      if (bs[parseInt(parsed[i]) - 1]) {
        bs[parseInt(parsed[i]) - 1] = bs[parseInt(parsed[i]) - 1] + parseInt(parsed[++i])
      } else {
        bs[parseInt(parsed[i]) - 1] = parseInt(parsed[++i])
      }

      continue
    }
  }

  let result = ''

  for (let i = 0; i < fs.length; i++) {
    if (!bs[i] || fs[i] > bs[i]) {
      result += i + 1 + ' '
    }
  }

  console.log(fs, bs)

  return result
}

/*console.log(calculate('F 1 200 F 2 170 B 1 200 B 2 100'))*/
console.log(calculate('F 1 209 F 2 254 F 3 895 F 4 439 B 1 104 B 2 127 B 3 74 B 3 447 B 4 127 B 4 219 B 5 448 B 6 220'))
