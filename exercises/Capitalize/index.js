/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    str = str.split(' ')
    console.log(str)
    var result = ''
    
    for(let i in str){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        result += str[i] + ' '
    }
    result = result.slice(0, result.length-1)
    console.log(result)
    return result 
}


