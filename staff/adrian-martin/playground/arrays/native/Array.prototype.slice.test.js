console.info('CASE extract 3 animals from index 2')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', ];
// ["camel", "duck", "elephant"]
var result = animals.slice(2);

console.assert(result.length === 3, 'result length is 3')
console.assert(result[0] === 'camel', 'result animal at 0 is camel')
console.assert(result[1] === 'duck', 'result animal at 1 is duck')
console.assert(result[2] === 'elephant', 'result animal at 2 is elephant')

console.assert(animals.length === 5, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')



console.info('CASE extract 4 animals from index 3')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'cocodrile', 'snake'];
// ['duck', 'elephant', 'cocodrile', 'snake']
var result = animals.slice(3);

console.assert(result.length === 4, 'result length is 3')
console.assert(result[0] === 'duck', 'result animal at 1 is duck')
console.assert(result[1] === 'elephant', 'result animal at 2 is elephant')
console.assert(result[2] === 'cocodrile', 'result animal at 3 is cocodrile')
console.assert(result[3] === 'snake', 'result animal at 4 is snake')

console.assert(animals.length === 7, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')
console.assert(animals[5] === 'cocodrile', 'result animal at 5 is cocodrile')
console.assert(animals[6] === 'snake', 'result animal at 6 is snake')



console.info('CASE extract last 2 animals')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// ["duck", "elephant"]
var result = animals.slice(-2);

console.assert(result.length === 2, 'result length is 2')
console.assert(result[0] === 'duck', 'result animal at 0 is duck')
console.assert(result[1] === 'elephant', 'result animal at 1 is elephant')

console.assert(animals.length === 5, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')



console.info('CASE extract last 4 animals')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'bear'];
// ['camel', 'duck', 'elephant', 'bear']
var result = animals.slice(-4);

console.assert(result.length === 4, 'result length is 4')
console.assert(result[0] === 'camel', 'result animal at 0 is camel')
console.assert(result[1] === 'duck', 'result animal at 1 is duck')
console.assert(result[2] === 'elephant', 'result animal at 2 is elephant')
console.assert(result[3] === 'bear', 'result animal at 3 is bear')

console.assert(animals.length === 6, 'animals length is 6')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')
console.assert(animals[5] === 'bear', 'result animal at 5 is bear')



console.info('CASE extract animals from index 2 to 4')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', ];
// Array ["camel", "duck"]
var result = animals.slice(2, 4);

console.assert(result.length === 2, 'result length is 2')
console.assert(result[0] === 'camel', 'result animal at 0 is camel')
console.assert(result[1] === 'duck', 'result animal at 1 is duck')

console.assert(animals.length === 5, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')



console.info('CASE extract animals from index 1 to 5')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant', ];
// Array ['bison',"camel", "duck",'elephant']
var result = animals.slice(1, 5);

console.assert(result.length === 4, 'result length is 4')
console.assert(result[0] === 'bison', 'result animal at 0 is bison')
console.assert(result[1] === 'camel', 'result animal at 1 is camel')
console.assert(result[2] === 'duck', 'result animal at 2 is duck')
console.assert(result[3] === 'elephant', 'result animal at 3 is elephant')

console.assert(animals.length === 5, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')



console.info('CASE extract from index 0 to -2')

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// Expected output: Array ["camel", "duck"]
var result = animals.slice(0, -2);

console.assert(result.length === 3, 'result length is 3')
console.assert(result[0] === 'ant', ' animal at 0 is ant')
console.assert(result[1] === 'bison', ' animal at 1 is bison')
console.assert(result[2] === 'camel', 'result animal at 2 is camel')

console.assert(animals.length === 5, 'animals length is 5')
console.assert(animals[0] === 'ant', ' animal at 0 is ant')
console.assert(animals[1] === 'bison', ' animal at 1 is bison')
console.assert(animals[2] === 'camel', ' animal at 2 is camel')
console.assert(animals[3] === 'duck', ' animal at 3 is duck')
console.assert(animals[4] === 'elephant', ' animal at 4 is elephant')





