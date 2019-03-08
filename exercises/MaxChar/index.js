/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    let array = str.split('').sort()
    let charOld = null
    let countOld = 0
    let char = null
    let count = 0
    console.log(array) 
    for(let i in array) {
        if (char != array[i]) {
            if (count > countOld) {
                countOld = count 
                charOld = char
            }
            char = array[i]
            count = 1
        } else count++
        console.log(count, countOld)
        console.log(char, charOld)
    }
    return charOld
}

function maxChar(str) {
    const occurences = {}
    let maxCount = 0
    let charWithMaxOccurences
    for (const char of str) {
        if (occurences[char] == null) iccurences[char] = 1
        else occurences[char] += 1

        if (occurences[char] > maxCount) {
            maxCount = occurences[char]
            charWithMaxOccurences = char
        }
    }
    return charWithMaxOccurences
}
