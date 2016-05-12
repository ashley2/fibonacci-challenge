'use strict'

function*fibGenerator(){
  let num1 = 0, num2 = 1, fibNum = 1;
  while(true){
    yield fibNum // yield first to return the first fib number before it changes
    fibNum = num1 + num2;
    num1 = num2;
    num2 = fibNum;
  }
}


function getFibs(n){
  if(typeof(n) !== "number" || n < 0){
    return null
  }

  let fibArr = [] 
  const gen = fibGenerator() 
  for (let i = 0; i < n; i++){
    let fibNum = gen.next().value 
    fibArr.push(fibNum)
  }
  return fibArr
}

module.exports = getFibs