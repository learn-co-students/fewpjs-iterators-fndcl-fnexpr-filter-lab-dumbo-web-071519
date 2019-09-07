// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(e => {return e.toLowerCase()===string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
  let count = string.length
  return drivers.filter(e => {
    return e.substring(0,count).toLowerCase()===string.toLowerCase()
  })
}

function matchName(drivers, string){
  return drivers.filter(e => {
    return e.name.toLowerCase()===string.toLowerCase()
  })
}
