const test = (num1, num2) => {
  num1 = num1 ^ num2
  num2 = num1 ^ num2
  num1 = num1 ^ num2

  return [num1, num2]
}

const test1 = num1 => {
  return ~num1
}

const test2 = (num1, num2) => {
  let t = num1 << 10
  t = t | num2
  t = t >> 10

  return t
}

console.log(test(39, 53))
console.log(test1(-52))
console.log(test2(12, 20))
