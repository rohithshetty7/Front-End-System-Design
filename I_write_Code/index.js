

Array.prototype.myMap = function (callback, arg) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            // result.push(callback(this[i], i, this))
            result.push(callback.call(arg, this[i], i, this))
        }
    }
    return result
}
let array = [1, 2, 3]
const doubled = array.myMap(function (num) {
    return num * 2
})
// console.log(doubled)

Array.prototype.myReduce = function (callback, intialValue) {
    let accumalor = intialValue != null ? intialValue : this[0]
    for (let i = 0; i < this.length; i++) {
        accumalor = callback(accumalor, this[i])
    }
return accumalor
}
const reducedValue = array.myReduce((acc, curr) => {
    return acc + curr
}, 0)
console.log("dff",reducedValue)