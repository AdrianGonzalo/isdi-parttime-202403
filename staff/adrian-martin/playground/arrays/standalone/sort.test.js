delete Array.prototype.sort

// Recrear el metodo sort
function sort(array) {
// Array [1, 30, 4, 21, 100000]

var result = [];

for(var i = 0; i < array.length; i++) {
    var element = array[i];

    for(var j = i + 1; j < array.length; j++) {
        var element2 = array[j];

        if(element < element2) {
            result[result.length] = element
        }else{
            result[result.length] = element2
        }
    }
    
    
    // result[result.length] = element
    // result[result.length] = element2
}

console.log(result);

// var result = []

//     for(var i = 0; i < array.length; i++){
//             var element = array[i]

//             for(var j = i + 1; j < array.length; j++){
//                 var element2 = array[j]

//                 if(element > element2){

//                 var orden = element
//                 element = element2
//                 element2 = orden
//             }

            
//     }
//     console.log(result)
// }


// for(var i = 0;i < array.lenght; i++){
//     var element = array[i]
//     for(var j = 0;j < array.lenght[i]; j++){
//         var element2 = array[j]
//         if(array[i] < array[j]){
//             result[result.lenght] = element
//         }else{
//             result[result.lenght] = element2
//         }
//     }

//     console.log(result)
// }

//     var result = []

//     if(array[0] < array[1]){

//         result[result.length] = array[0]
//     }else{
//         result[result.length] = array[1]
//     }

//     if(array[1] < array[2]){
//         result[result.length] = array[1]
//     }else{
//         result[result.length] = array[2]
//     }

//     console.log(result)

// //     var result = []

// //     if(array[0] < array[1]){

// //         result[result.length] = array[0]
// //     }else{
// //         result[result.length] = array[1]
// //     }

// //     if(array[1] < array[2]){
// //         result[result.length] = array[1]
// //     }else{
// //         result[result.length] = array[2]
// //     }

// //     console.log(result)

    
}

console.info("--- CASE ordenar elementos de un array y devolver un nuevo array ordenado de acuerdo con su valor Unicode ")

var numbers = [1, 30, 4, 21, 100000];
sort(numbers);
//console.log(numbers);
// Expected output: Array [1, 100000, 21, 30, 4]

//! TEST ASSERT
console.assert(numbers[0] === 1, 'index 0 is 1')
console.assert(numbers[1] === 100000, 'index 1 is 100000')
console.assert(numbers[2] === 21, 'index 2 is 21')
console.assert(numbers[3] === 30, 'index 3 is 30')
console.assert(numbers[4] === 4, 'index 4 is 4')

//? --------------------------------------------------------------------------

// console.info("--- CASE ordenar elementos de un array y devolver un nuevo array ordenado de acuerdo con su valor Unicode ")

// var months = ['March', 'Jan', 'Feb', 'Dec'];
// sort(months);
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// //! TEST ASSERT
// console.assert(months[0] === 'Dec', 'index 0 is Dec')
// console.assert(months[1] === 'Feb', 'index 1 is Feb')
// console.assert(months[2] === 'Jan', 'index 2 is Jan')
// console.assert(months[3] === 'March', 'index 3 is March')

//? --------------------------------------------------------------------------