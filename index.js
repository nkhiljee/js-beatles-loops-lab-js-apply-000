// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(musicians[i] + ` plays ` + instruments[i])
 }
  return empty
}

function johnLennonFacts(facts) {
  let newFacts = [];
  let i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!')   
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(num) {
  let empty = [];
  do {
    empty.push("I love the Beatles!")
    num++;
  }
  while (num < 15)
  
  return empty
}