const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {

  for (const driver of drivers) {
  if (driver[name] === name) {
  console.log(driver);
}
}
}
