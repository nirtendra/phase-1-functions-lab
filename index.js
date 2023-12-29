// Code your solution in this file!


function distanceFromHqInBlocks(position){
 return Math.abs(42-position);

}





function distanceFromHqInFeet(position){
    return distanceFromHqInBlocks(position)*264

}


function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } 
    else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } 
    else if (distance > 2500) {
        return 'cannot travel that far'
    } 
    else {
     return 25;
    }
   
    
   }
  