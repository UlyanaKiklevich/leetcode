const DegreeToRad = (angle) => {
  return angle * Math.PI / 180
}

const Radius = (wheelBase, angle) => {
  return wheelBase / Math.sin(DegreeToRad(angle))
}

const Degree = (radius, distance) => {
  return radius === Number.POSITIVE_INFINITY ? 0 :  distance / radius
}

const getX = (angle, radius, distance) => {
  return radius === Number.POSITIVE_INFINITY
    ? distance * Math.sin(angle)
    : radius - radius * Math.cos(angle)
}
const getY = (angle, radius, distance) => {
  return radius === Number.POSITIVE_INFINITY
    ? distance * Math.cos(angle)
    : radius * Math.sin(angle)
}

const input = '2.70 3 5.00 10.00 5.00 -10.00 20.00 0.00'.split(' ')
const wheelBase = input[0]
let degree = 0,
  x = 0,
  y = 0
for (let i = 2; i < input.length ; i+=2) {
  const currDistance  = input[i]
  const currentAngle = input[i+1]

  const radius = Radius(wheelBase, currentAngle),
    currDegree = Degree(radius, currDistance)

  const currX = getX(currDegree, radius, currDistance),
    currY = getY(currDegree, radius, currDistance)

  const normalizedX = Math.cos(degree) * currX + Math.sin(degree) * currY,
    normalizedY = -1 * Math.sin(degree) * currX + Math.cos(degree) * currY
  degree = degree + currDegree

  x += normalizedX
  y += normalizedY
}

degree = (degree * 180 / Math.PI) % 360
console.log(
  x.toFixed(2),
  y.toFixed(2),
  (degree < 0 ? 360 + degree : degree).toFixed(2)
)
