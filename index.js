// Write your solution here!
let pets = ["Milo", "Otis", "Garfield"]
const append = [...pets]
append.push("Odie")

const prepend = [...pets]
prepend.unshift("Odie")

const removeFirst = [...pets]
removeFirst.shift()

const removeLast = [...pets]
removeLast.pop()
