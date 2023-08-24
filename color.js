var links = {
  setcolor:function (color){
  var alist = document.querySelectorAll('a');
  var i = 0;
while(i<alist.length){
  console.log(alist[i]);
  alist[i].style.color = color;
  i= i+1;}
}
}
var body ={
  setcolor: function(color){
  document.querySelector('body').style.color = color;
  },
  setbackcolor: function(color){
    document.querySelector('body').style.backgroundColor = color;
 }
}
function handler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
body.setbackcolor ('black');
body.setcolor('white');
self.value = 'day';
links.setcolor('yellow');
}
else {
body.setbackcolor( 'white');
body.setcolor( 'black'); self.value = 'night'; 
links.setcolor('blue');
}
}