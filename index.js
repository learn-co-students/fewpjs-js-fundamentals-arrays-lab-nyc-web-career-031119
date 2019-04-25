// Write your solution here!
const odi = 'Odie';
 const append = ["Milo", "Otis", "Garfield"];
 let prepend = append.slice();
 let removeLast = append.slice();
 let removeFirst = append.slice();
 removeFirst.shift();
 prepend.unshift(odi);
 removeLast.pop();
 append.push(odi);


