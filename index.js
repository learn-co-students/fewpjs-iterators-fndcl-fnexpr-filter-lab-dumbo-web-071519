// Code your solution here

function findMatching(drivers, name){
    const matches = drivers.filter(function(driver){
        return name.toLowerCase() === driver.toLowerCase();
    });
    return matches;
}
function fuzzyMatch(drivers, name){
    return drivers.filter(function(driver){
        return driver.substring(0, name.length) === name
    })
}
function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name
    })

}