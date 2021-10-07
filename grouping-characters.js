/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
Note: You can expect all of the inputs to be the same length. */

//input three strings of equal length
//returns string
//Input: "aa", "bb", "cc" => Output: "abcabc", 
//for every char in first str concat with char of same index in every string

function concatCharacters(str1,str2,str3) {
let str = ""
for (index in str1) {
  str += str1[index] + str2[index] + str3[index]
}
return str
}

console.log(concatCharacters("aa", "bb", "cc"), "abcabc")