const fs = require('fs');

const files = [
    './level4/level4_1.in'/*,
    './level4/level4_2.in',
    './level4/level4_3.in',
    './level4/level4_4.in',
    './level4/level4_5.in',
    './level4/level4_example.in',*/
]

for (const file of files) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            data = data.split('\r\n')
            const lines = parseInt(data[0])

            const map = data.slice(1, lines + 1).map((v) => v.split(''))
            const movesMap = {
                U: [0, -1],
                D: [0, 1],
                L: [-1, 0],
                R: [1, 0]
            }

            let count = 0, [ y, x ] = data[lines + 1]
                    .split(' ')
                    .map((v) => parseInt(v) - 1)

//================================== START ==============================================

            const path = collectAllCoins(x, y, data.slice(1, lines + 1))

            // Write the contents to another file
            fs.writeFile(file.replace(
                    'level4',
                    'level4_answ'),
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
                    map[y][x] = '.'
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

collectAllCoins = (x, y, map) =>{
    let steps = ''
// Initialize Pac-Man's current position to the starting point
    let currentPos = {x, y};

// Keep track of the number of coins collected
    let coinsCollected = 0;

    const totalCoints = map.reduce((total, row) => total + row.split("C").length - 1, 0);
    map = map.map((v) => v.split(''))

// While there are still coins left on the board:
    while (coinsCollected < totalCoints) {

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
        let step = findNextStep(currentPos, nearestCoin, map)
        console.log(step)

        // Move Pac-Man along the calculated path to the nearest coin
        for (let i = 0; i < path.length; i++) {
            if (currentPos.x > path[i].x) {
                steps += 'L';
            } else if (currentPos.x < path[i].x) {
                steps += 'R';
            } else if (currentPos.y > path[i].y) {
                steps += 'U';
            } else if (currentPos.y < path[i].y) {
                steps += 'D';
            }

            currentPos = path[i];


            if (map[currentPos.y][currentPos.x] === 'C') {
                map[currentPos.y][currentPos.x] = '.';
                coinsCollected++;
            }
        }

        // Update Pac-Man's current position to the location of the collected coin
        currentPos = nearestCoin;
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
            return path.reverse();
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

function findNextStep(start, end, map) {
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
            return path[path.length === 1 ? 0 : path.length - 1]
            return path.reverse();
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
