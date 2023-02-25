const fs = require('fs');

const files = [
    // './level5/level5_1.in',
    // './level5/level5_2.in',
    './level5/level5_3.in',
    // './level5/level5_4.in',
    // './level5/level5_5.in',
    // './level5/level5_example.in',
]

for (const file of files) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // const map = data.slice(1, lines + 1).map((v) => v.split(''))
            // const movesMap = {
            //     U: [0, -1],
            //     D: [0, 1],
            //     L: [-1, 0],
            //     R: [1, 0]
            // }
            //
            // let count = 0,
            //     survived = 'YES',
            //     [ y, x ] = data[lines + 1]
            //         .split(' ')
            //         .map((v) => parseInt(v) - 1)

//================================== START ==============================================
            data = data.split('\r\n')
            const lines = parseInt(data[0]),
                ghostsNumber = parseInt(data[lines + 2])

            const ghosts = []
            for (let i = 0; i < ghostsNumber * 3; i += 3) {
                const [ y, x ] = data[lines + 3 + i]
                    .split(' ')
                    .map((v) => parseInt(v) - 1)
                ghosts.push({ pos: [x, y], moves: data[lines + 5 + i], under: 'E', move: 0 })
            }

            const [ y, x ] = data[lines + 1]
                .split(' ')
                .map((v) => parseInt(v) - 1)

            const map = data.slice(1, lines + 1)
            const path = collectAllCoins(x, y, map, ghosts)

            // Write the contents to another file
            fs.writeFile(file.replace(
                    'level5',
                    'level5_answ'),
                path,
                (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(file, 'written successfully!');
                    }
                });

            return
//================================== END ==============================================
            for (let i = 0; i < moves.length ; i++) {
                const [ dx, dy ] = movesMap[moves[i]]
                // if (map[y + dy][x + dx] !== '%') {
                x += dx
                y += dy
                // }

                if (map[y][x] === 'W') {
                    survived = 'NO'
                    break
                }

                for (const ghost of ghosts) {
                    let [ gx, gy ] = ghost.pos
                    const [ dx, dy ] = movesMap[ghost.moves[i]]
                    gx += dx
                    gy += dy
                    ghost.pos = [gx, gy]
                    if (gx === x && gy === y) {
                        survived = 'NO'
                        break
                    }
                }

                if (survived === 'NO') {
                    break
                }

                if (map[y][x] === 'C') {
                    count++
                    map[y][x] = 'E'
                }
            }

            // Write the contents to another file
            fs.writeFile(file.replace(
                    'level3',
                    'level3_answ'),
                count.toString() + ' ' + survived,
                (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log(file, 'written successfully!');
                    }
                });
        }
    });
}

const moveGhosts = (ghosts, map) => {
    const movesMap = {
        U: [0, -1],
        D: [0, 1],
        L: [-1, 0],
        R: [1, 0]
    }

    for (const ghost of ghosts) {
        let [ gx, gy ] = ghost.pos
        map[gy][gx] = ghost.under

        ghost.move += 1
        if (ghost.move === ghost.moves.length) {
            ghost.move = 0
            ghost.moves = ghost.moves.split('').reverse().map(v => {
                if (v === 'U') {
                    return 'D'
                } else if (v === 'D') {
                    return 'U'
                } else if (v === 'L') {
                    return 'R'
                } else {
                    return 'L'
                }
            }).join('')
        }

        const [ dx, dy ] = movesMap[ghost.moves[ghost.move]]
        gx += dx
        gy += dy


        ghost.pos = [gx, gy]
        ghost.under = map[gy][gx]

        map[gy][gx] = 'G'

        // if (gx === x && gy === y) {
        //     survived = 'NO'
        //     break
        // }
    }
}

collectAllCoins = (x, y, map, ghosts) =>{
    let steps = ''
// Initialize Pac-Man's current position to the starting point
    let currentPos = {x, y};

// Keep track of the number of coins collected
    let coinsCollected = 0;

    const totalCoints = map.reduce((total, row) => total + row.split('C').length - 1, 0);
    map = map.map((v) => v.split(''))

// While there are still coins left on the board:
    while (coinsCollected < totalCoints) {
        moveGhosts(ghosts, map)

        // Find the nearest coin to Pac-Man's current position
        let nearestCoin = { x: null, y: null };
        let shortestDistance = Infinity;
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if (map[y][x] === 'C') {
                    let distance = Math.abs(x - currentPos.x) + Math.abs(y - currentPos.y);
                    if (distance < shortestDistance) {
                        shortestDistance = distance;
                        nearestCoin.x = x;
                        nearestCoin.y = y;
                    }
                }
            }
        }

        // Calculate the shortest path from Pac-Man's current position to the nearest coin
        let path = findShortestPath(currentPos, nearestCoin, map);

        for (let i = 0; i< ghosts.length; i++) {
            var t = ghosts.find((el, index) => {
                return el.pos[0] === ghosts[i].pos[0] && el.pos[1] === ghosts[i].pos[1] && index !== i
            })
            if (t) {
                console.log(t)
            }
        }
        /*console.log(r)*/

        // Move Pac-Man along the calculated path to the nearest coin
        for (let i = 0; i < path.length; i++) {
            if (currentPos.x > path[i].x) {
                steps += 'L';
            } else if (currentPos.x < path[i].x) {
                steps += 'R';
            } else if (currentPos.y > path[i].y) {
                steps += 'U';
            } else {
                steps += 'D';
            }

            currentPos = path[i];

            if (map[currentPos.y][currentPos.x] === 'C') {
                map[currentPos.y][currentPos.x] = 'E';
                coinsCollected++;
            }
        }

        // Update Pac-Man's current position to the location of the collected coin
        // currentPos = nearestCoin;
    }

    return steps
}

function findShortestPath(start, end, map) {
    // Create a 2D array to store the distances between each point on the map
    let distances = [];
    for (let y = 0; y < map.length; y++) {
        distances.push(new Array(map[y].length).fill(Infinity));
    }

    // Create a priority queue to store the points to visit, sorted by distance
    let queue = new PriorityQueue();
    queue.enqueue(start, 0);
    distances[start.y][start.x] = 0;

    // Keep track of the previous point in the shortest path
    let previous = [];
    for (let y = 0; y < map.length; y++) {
        previous.push(new Array(map[y].length));
    }

    // Process the queue until it's empty
    while (!queue.isEmpty()) {
        let current = queue.dequeue();

        // If we've reached the end point, reconstruct the shortest path
        if (current.x === end.x && current.y === end.y) {
            let path = [current];
            while (previous[current.y][current.x]) {
                path.push(previous[current.y][current.x]);
                current = previous[current.y][current.x];
            }
            return [path.reverse()[1]];
        }

        // Visit each neighbor of the current point
        let neighbors = getNeighbors(current, map);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            let distance = distances[current.y][current.x] + 1;
            if (distance < distances[neighbor.y][neighbor.x]) {
                distances[neighbor.y][neighbor.x] = distance;
                previous[neighbor.y][neighbor.x] = current;
                queue.enqueue(neighbor, distance);
            }
        }
    }

    // If we've processed the entire queue and haven't found the end point, there is no path
    return null;
}

// Helper function to get the neighbors of a point on the map
function getNeighbors(point, map) {
    let neighbors = [];
    if (point.x > 0 && !['W', 'G'].includes(map[point.y][point.x - 1])) {
        neighbors.push({ x: point.x - 1, y: point.y });
    }
    if (point.x < map[point.y].length - 1 && !['W', 'G'].includes(map[point.y][point.x + 1])) {
        neighbors.push({ x: point.x + 1, y: point.y });
    }
    if (point.y > 0 && !['W', 'G'].includes(map[point.y - 1][point.x])) {
        neighbors.push({ x: point.x, y: point.y - 1 });
    }
    if (point.y < map.length - 1 && !['W', 'G'].includes(map[point.y + 1][point.x])) {
        neighbors.push({ x: point.x, y: point.y + 1 });
    }
    return neighbors;
}

// Helper class to implement a priority queue
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(element, priority) {
        this.elements.push({element, priority});
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().element;
    }
}
