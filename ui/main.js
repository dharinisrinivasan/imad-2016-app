// counter code
var button = document.getElementById('counter');

var counter = 0;
button.onClick = function () {
    // Make request to counter end point
    //capture the response and store it in a variable
    
    //Render the variable in the correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML=counter.toString();
};