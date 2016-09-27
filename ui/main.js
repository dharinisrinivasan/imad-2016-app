//console.log('Loaded!');

//move the image
//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight() {
//    marginLeft = marginLeft + 10;
//    img.style.marginLeft = marginLeft + 'px' ;
//}
//img.onclick = function () {
//    var interval = setInterval(moveRight, 50);
//};

// counter code
var counter = 0;
var button = document.getElementById('counter');
button.onClick = function () {
  
  counter = counter + 1;
  var span = document.getElementById ('count');
  span.innerHTML=counter.toString();
};