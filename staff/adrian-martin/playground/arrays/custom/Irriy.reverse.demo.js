function Irriy() {
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var length = arguments[0]

        this.length = length
    } else {
        for (var i = 0; i < arguments.length; i++) {
            var argument = arguments[i]

            this[i] = argument
        }

        this.length = arguments.length
    }
}

Irriy.prototype.reverse = function (){
    var left, right

    for (var i = 0, j = this.length - 1; i < j; i++, j--){  
         left = this[i]
         right = this[j]

         this[i] = right
         this[j] = left
    }
    return this
}

console.log('CASE inverts order of 3 nums')

var nums = new Irriy('one', 'two', 'three');
var result = nums.reverse()

console.assert(result instanceof Irriy, 'result is an array')
console.assert(result.length === 3, 'result length is 3')
console.assert(result[0] === 'three', 'result value at index 0 is three')
console.assert(result[1] === 'two', 'result value at index 1 is two')
console.assert(result[2] === 'one', 'result value at index 2 is one')



console.log('CASE inverts order of 4 nums')

var nums = new Irriy('one', 'two', 'three', 'four');
var result = nums.reverse()

console.assert(result instanceof Irriy, 'result is an array')
console.assert(result.length === 4, 'result length is 4')
console.assert(result[0] === 'four', 'result value at index 0 is four')
console.assert(result[1] === 'three', 'result value at index 1 is three')
console.assert(result[2] === 'two', 'result value at index 2 is two')
console.assert(result[3] === 'one', 'result value at index 3 is one')



console.log('CASE inverts order of 5 nums')

var nums = new Irriy('one', 'two', 'three', 'four', 'five');
var result = nums.reverse()

console.assert(result instanceof Irriy, 'result is an array')
console.assert(result.length === 5, 'result length is 5')
console.assert(result[0] === 'five', 'result value at index 0 is five')
console.assert(result[1] === 'four', 'result value at index 1 is four')
console.assert(result[2] === 'three', 'result value at index 2 is three')
console.assert(result[3] === 'two', 'result value at index 3 is two')
console.assert(result[4] === 'one', 'result value at index 4 is one')



console.log('CASE inverts order of 6 nums')

var nums = new Irriy('one', 'two', 'three', 'four', 'five', 'six');
var result = nums.reverse()

console.assert(result instanceof Irriy, 'result is an array')
console.assert(result.length === 6, 'result length is 6')
console.assert(result[0] === 'six', 'result value at index 0 is five')
console.assert(result[1] === 'five', 'result value at index 1 is five')
console.assert(result[2] === 'four', 'result value at index 2 is four')
console.assert(result[3] === 'three', 'result value at index 3 is three')
console.assert(result[4] === 'two', 'result value at index 4 is two')
console.assert(result[5] === 'one', 'result value at index 5 is one')