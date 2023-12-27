const arr1 = [{name: "Akshat"}, {name: "Akshat"}, {name: "Bob"}]
const arr2 =  [...new Set(arr1)]

console.log(arr1, arr2)