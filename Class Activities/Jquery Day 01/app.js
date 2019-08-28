
// Will show you information about a click on the button.
// document.getElementById('btn').addEventListener('click', function (event) {
//  console.log(event)
// })

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array Methods
// arr.indexOf()
// arr.push()
// arr.toString()
// arr.shift()
// arr.unshift()
// arr.splice()
// arr.forEach

// Review on for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const arr = ['a', 'b', 'c', 'd', 'e', 'f']

// arr.forEach(function (x, i, arr) {
//     console.log(x)
// })

// arr.forEach(function (elem) {
//     console.log(elem)
// })

// Creates an array length to 1000
// for (let i = 0; i < 1000; i++) {
//     arr.push(i)
// }
// console.log(arr) 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

arr.forEach(function (a){
    // comparison ? true : false
    // a % 2 === 0 ? console.log('Yes') : console.log('No')
    // console.log(a % 2 === 0 ? 'Yes' : 'No')

    if (a % 2 === 0) {
        console.log('Yes')
    }
        else {
            console.log('No')
        }
})



