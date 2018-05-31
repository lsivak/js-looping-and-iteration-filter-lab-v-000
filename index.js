

function findMatching(collection, name) {

   return collection.filter(function (collectionName) {
  return collectionName() === name
})
}
