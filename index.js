

function findMatching(collection, name) {

   return collection.filter(function (driver) {
  return driverName() === name
})
}
