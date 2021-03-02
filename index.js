// Code your solution here
function findMatching(arr, string){
    let result = arr.filter(driver => driver.toUpperCase() == string.toUpperCase())
    if( result == undefined) {
        return undefined
     } else {
        return result
     }
}

function fuzzyMatch(arr, string){
   let result = arr.filter(driver => driver.startsWith(string))
   return result
}

function matchName(arr,string){
    let match = arr.filter(driver => driver.name === string)
    return match
}