//var button = document.getElementById('counter');
//var counter = 0;
//button.onclick = function() {
//    counter = counter + 1;
//    var s = document.getElementById('count');
//    s.innerHTML = counter.toString();
    
//};

// counter code

var button = document.getElementById('counter');

button.onlick = function() {
    // Create a request Object to counter end point
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200) {
              var counter = request.resposeText;
              var s = document.getElementById('count');
              s.innerHTML = counter.toString();
          }
      }  
      //Not done yet
    };
    
  // Make request
  request.open('GET', 'http://dharinisrinivasan.imad.hasura-app.io/counter',true);
  request.send(null);
};