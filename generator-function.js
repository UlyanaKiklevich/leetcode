function * generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);

console.log(gen.next().value);


function * idMaker() {
  let index = 0

  while (true) {
    yield index++;
  }
}

const gen1 = idMaker()

console.log(gen1.next().value) // 0
console.log(gen1.next().value) // 1
console.log(gen1.next().value) // 2
console.log(gen1.next().value) // 3
