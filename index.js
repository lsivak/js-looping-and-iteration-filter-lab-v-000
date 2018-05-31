

function findMatching(collection, name) {

   return collection.filter(function (driverName) {
  return driverName() === name
})
}
