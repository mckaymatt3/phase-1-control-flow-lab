function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (someValue < 400) {
    result = 'This one is on me!'
  }
  else if (someValue > 2500) {
  result = 'No can do.'
  }
  else {
    result = 'I will gladly take your thirty bucks.'
  }
  return result    
}

function ternaryCheckCity(someCity){
  // Write your code here!
  let result
  if (someCity !== 'NYC') {
    result='No go.'
  }
  else {
    result='Ok, sounds good.'
  }
  return result
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  let result;
  switch (someTip) {
    case 'not as generous':
      result = 'Thank you.';
      break;
    case 'generous':
      result = 'Thank you so much.';
      break;
    default: 
      result = 'Bye.'
      break;
  }
  return result
}