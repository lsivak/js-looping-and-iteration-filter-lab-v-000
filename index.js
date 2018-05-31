

function findMatching(collection, name) {

   return collection.filter(function (driver) {
  return driver.toLowerCase() === name.toLowerCase()
})
}
function fuzzyMatch(collection, name) {
  return collection.filter(function (guessDrivers) {
 return guessDrivers[0][0] === name
})
}
