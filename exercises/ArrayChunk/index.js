/**
 * Array Chunk
 *
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

// let array = [1, 2, 3, 4, 5]



// chunk(array, 4)
//const controllo = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
//const arr = [1, 2, 3];

// const chunked = chunk(arr, 1)
// console.log(chunked)


// function chunkRec(arr, size, result) {
//     if (!arr[0]) return result
//     else {
//         result.push(arr.splice(0, size))
//         return chunkRec(arr,size, result)
//     }
// }

// function chunk(arr, size) {
//     //let newArr = []
//     return chunkRec(arr, size, [])
// }

function chunk(arr, size, result) {
    if (result === undefined) result = []
    if (!arr[0]) return result
    else {
        result.push(arr.splice(0, size))
        return chunk(arr,size, result)
    }
}





