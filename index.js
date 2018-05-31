

function findMatching(collection, name) {
debugger
   return collection.filter(function (driverName) {
  return driverName() === name
})
}
