// Code your solution here
function findMatching(listOfDrivers ,name){
    return listOfDrivers.filter(function (driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(listOfDrivers,letters){
    return listOfDrivers.filter(function(driver){
        return driver.toLowerCase().substring(0,letters.length) === letters.toLowerCase()
    })
}

function matchName(listOfDrivers, check){
    return listOfDrivers.filter(function(driver){
        return driver.name.toLowerCase() === check.toLowerCase()
    })
}