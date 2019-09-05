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