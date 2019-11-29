const arr1 = [8, 12, 20]
console.log(arr1.map(x => x / 2))

const arr2 = [1, 7, 50]
console.log(arr2.map(x => x + ''))

const arr3 = [-2, 5, 15, -7, -8]
console.log(arr3.map(x => x < 0 ? '-' : '+'))

const arr4 = [{name: "Alberto"}, {name: "Fran"}]
console.log(arr4.map(x => x.name))

const arr5 = ["lorem ipsum dolor", "hello world"]
console.log(arr5.map(x => x.split(' ').map(y => y[0]).join('')))

const arr6 = [[1, 2], [34, 20, 5], [11], [2, 4]]
console.log(arr6.map(x => x.reduce((acc, x) => acc + x, 0)))