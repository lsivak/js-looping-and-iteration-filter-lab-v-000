const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name) {
debugger
   return collection.filter(function (driverName) {
  return driverName() === name
})
}
