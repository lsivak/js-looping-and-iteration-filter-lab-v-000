

function findMatching(collection, name) {

   return collection.filter(function (driver) {
  return driver.toLowerCase() === name.toLowerCase()
})
}
function fuzzyMatch(collection, name) {
   debugger
  return collection.filter(function (drivers) {
 return drivers[0][0] === name

})
}
