// Write a Function To Match object Values To a Provided string
// Write matchName - This function takes an array of drivers and a string as arguments.In this function, each element of the drivers array is a JavaScript object that has a property of name.The function should return each element whose name property matches the provided string argument.

function findMatching(arr, str) {
    return arr.filter((driver) => {return driver.toLowerCase() == str.toLowerCase()})
}

function fuzzyMatch(arr, str) {
    return arr.filter((driver) => {
        return driver.substring(0, str.length) == str
    })
}

function matchName(arr, str) {
    return arr.filter((driver) => { return driver.name === str })
}