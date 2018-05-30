const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  for (const driver in drivers) {
  if (driver === name) {
  console.log(driver);
}
}
}
