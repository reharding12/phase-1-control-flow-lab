function scuberGreetingForFeet(feet){
  let freeRide;
  if (feet <= 400) {
    freeRide = 'This one is on me!';
  }
  if (feet > 400 && feet < 2000) {
    freeRide = 'That will be twenty bucks.';
  }
  if (feet > 2000) {
    freeRide = 'I will gladly take your thirty bucks.';
  }
  if (feet > 2500) {
    freeRide = 'No can do.';
  }
return freeRide;
}

function ternaryCheckCity(city){
  let area;
  city === 'NYC' ? (area = 'Ok, sounds good.') : (area = 'No go.');
  
return area;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response;
}