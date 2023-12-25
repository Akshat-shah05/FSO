console.log("hello world")

const t = [1, 2, 3, 4, 5]

const t2 = t.map(value => value*2)

console.log(t2)

const [...rest] = t2
console.log(rest)

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

let res = sum(3, 4)

console.log(sum(1, 2), res)