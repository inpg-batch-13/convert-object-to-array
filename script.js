function convert (data) {
  // Your code here

  //#1
 // cara cepet:
  //return Object.entries(data)

  //#2
  //kalau kurang kerjaan:
  var keys = Object.keys(data)
  var values = Object.values(data)
  var result = []

  for (var i = 0; i < keys.length; i++){
    result.push([keys[i], values[i]])
  }

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
