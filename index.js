// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

let fuzzyMatch = (drivers, query) => {
  return drivers.filter(driver => {
    return driver.slice(0, query.length) === query
  })
}

let matchName = (drivers, name) => {
  return drivers.filter(driver => {
    return driver.name === name
  })
}
