const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, string) {
debugger
  for (const driver of collection) {
  if (string(driver)) {
  console.log(driver);
}
}
}
