/* Reverse a string */

//Input: string
//Return string
//Input:"worms" => Output: "smrow"
// from index 0 to length/2, switch with char on opposite side

function reverse(str) {
  let arr = str.split('');
  for (let leftIndex =0; leftIndex < arr.length/2; leftIndex++) {
    const rightIndex = arr.length - 1 - leftIndex
    const temp = arr[leftIndex]
    arr[leftIndex] = arr[rightIndex]
    arr[rightIndex] = temp
 }
 return arr.join('')
}

console.log(reverse("worms"), "smrow")
console.log(reverse("big"), "gib")
console.log(reverse("whey"), "yehw")