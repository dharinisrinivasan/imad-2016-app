//var button = document.getElementById('counter');
//var counter = 0;
//button.onclick = function() {
//    counter = counter + 1;
//    var s = document.getElementById('count');
//    s.innerHTML = counter.toString();
    
//};

// counter code

 var button = document.getElementById('counter');

  button.onclick = function() {
    // Create a request Object to counter end point
    var req = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    req.onreadystatechange = function() {
      if(req.readyState === XMLHttpRequest.DONE){
          if(req.status === 200) {
              var counter1 = req.resposeText;
              var s = document.getElementById('count');
              s.innerHTML = counter1.toString();
          }
      }  
      //Not done yet
    };
    
  // Make request
  req.open('GET', 'http://dharinisrinivasan.imad.hasura-app.io/counter',true);
  req.send(null);
};

//
var nameInp = document.getElementById('name');
var name = nameInp.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function () {
  var names = ['name1','name2','name3','name4']  ;
  var list = '';
  for(var i=0;i<names.length;i++) {
      list += '<li>' + names[i] + '</li>'
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};