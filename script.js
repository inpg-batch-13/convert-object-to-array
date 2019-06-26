function convert (data) {
  var result = Object.keys(data).map(function(key) {
    return [(key), data[key]]
  })

  return result
}

// TEST CASES
console.log(convert({
  id: 1,
  firstName: 'Dimitri',
  lastName: 'Wahyudiputra',
  email: 'dimitri@mail.com'
}));
/*
[
  ['id', 1],
  ['firstName', 'Dimitri'],
  ['lastName', 'Wahyudiputra'],
  ['email', 'dimitri@mail.com']
]
*/

console.log(convert({ 
  id: 2,
  firstName: 'Sergei',
  lastName: 'Dragunov',
  email: 'sergei@mail.com'
}));
/*
[
  ['id', 1],
  ['firstName', 'Sergei'],
  ['lastName', 'Dragunov'],
  ['email', 'sergei@mail.com']
]
*/
