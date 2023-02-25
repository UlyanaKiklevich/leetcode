const t = () => {
  const input = `WWWWWWW\nWGCCCCW\nWCWWWCW\nWCCCCCW\nWGWWWPW\nWCCCCCW\nWWWWWWW`
  let numberOfCoins = input.split('').filter(el => el === 'C').length
  let y = 4,
      x = 5,
      prevY = y,
      prevX = x

  const map = input.split('\n').map(str => str.split(''))

  let result = ''

  while (numberOfCoins) {
    prevY = y
    prevX = x

    // check all directions
    if (map[y][x + 1] === 'C') {
      map[y][x + 1] = '.'
      result += 'R'
      x++
      numberOfCoins --
      continue
    }

    if (map[y][x - 1] === 'C') {
      map[y][x - 1] = '.'
      result += 'L'
      x--
      numberOfCoins --
      continue
    }

    if (map[y + 1][x] === 'C') {
      map[y + 1][x] = '.'
      result += 'D'
      y++
      numberOfCoins --
      continue
    }

    if (map[y - 1][x] === 'C') {
      map[y - 1][x] = '.'
      result += 'U'
      y--
      numberOfCoins --
      continue
    }

    // Check for dots

    if ((map[y][x + 1] === '.' || map[y][x + 1] === 'P') && prevX !== x + 1) {
      map[y][x + 1] = '.'
      result += 'R'
      x++
      numberOfCoins --
      continue
    }

    if ((map[y][x - 1] === '.' || map[y][x - 1] === 'P')  && prevX !== x - 1) {
      map[y][x - 1] = '.'
      result += 'L'
      x--
      numberOfCoins --
      continue
    }

    if ((map[y + 1][x] === '.' || map[y + 1][x] === 'P')  && prevY !== y + 1) {
      map[y + 1][x] = '.'
      result += 'D'
      y++
      numberOfCoins --
      continue
    }

    if ((map[y - 1][x] === '.' || map[y - 1][x] === 'P')  && prevY !== y - 1) {
      map[y - 1][x] = '.'
      result += 'U'
      y--
      numberOfCoins --
      continue
    }

    x = prevX
    y = prevY
  }

  return result
}

console.log(t())
