// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400){
    return 'This one is on me!';
  }
   else if (someValue >= 2500){
     return 'No can do.' ;
   }
   else if (someValue > 2000){
     return 'I will gladly take your thirty bucks.' ;
   }
}

    
    
function ternaryCheckCity(arg){
  if (arg === 'NYC'){
    return "Ok, sounds good.";
  }
  else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(arg){
  
}


should return "Thank you so much." if the tip is generous ‣
AssertionError: expected undefined to equal 'Thank you so much.'
    at Context.<anonymous> (test/indexTest.js:30:51)
should return "Thank you." if the tip is not as generous ‣
AssertionError: expected undefined to equal 'Thank you.'
    at Context.<anonymous> (test/indexTest.js:34:58)
should return "Bye." if anything else ‣
AssertionError: expected undefined to equal 'Bye.'
    at Context.<anonymous> (test/indexTest.js:38:64)
    
    
    
    
    