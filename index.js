

function findMatching(collection, name) {

   return collection.filter(function (driver) {
  return driver.toLowerCase() === name.toLowerCase()
})
}
function fuzzyMatch(collection, name) {
  return collection.filter(function (guessDriver) {
 return guessDriver[0] === name
})
}
