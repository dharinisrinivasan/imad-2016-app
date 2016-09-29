// counter code
var button = document.getElementById('counter');

var counter = 0;
button.onClick = function() {
    // Create a request Object to counter end point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status === 200) {
              var counter = request.ResposeText;
              var span = document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }  
      //Not done yet
    };
    
  // Make request
  request.open('GET', 'http://dharinisrinivasan.imad.hasura-app.io/counter',true);
  request.send(null);
};