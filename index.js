function writeCards(names, str) {
  let greetings = [] 
  for(let name of names) {
    greetings.push(`Thank you, ${name}, for the wonderful ${str} gift!`)
  }
  return greetings
}

function countDown(num) {
  while(num > -1) {
    console.log(num)
    num--
  }
}
