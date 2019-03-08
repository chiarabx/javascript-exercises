/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    stringA = stringA.split('').sort().toString().toLowerCase().replace(/[.,!*+?^${}()|[\]\\]/g, "")
    stringB = stringB.split('').sort().toString().toLowerCase().replace(/[.,!*+?^${}()|[\]\\]/g, "")
    console.log(stringA)
    console.log(stringB)
    return(stringA == stringB ? true : false)
}

console.log(anagrams('palo', 'opla'))

