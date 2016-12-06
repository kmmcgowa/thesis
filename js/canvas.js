var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var isStreaming = false;
var w = 640;
var h = 480;
var imgData;
var set = [];


videoElement.addEventListener('canplay', function(e) {
   if (!isStreaming) {
      if (videoElement.videoWidth > 0) h = videoElement.videoHeight / (videoElement.videoWidth / w);
      canvas.setAttribute('width', w);
      canvas.setAttribute('height', h);
      // Reverse the canvas image
      //context.translate(w, 0);
      //context.scale(-1, 1);
      isStreaming = true;
   }
}, false);

videoElement.addEventListener('play', function() {
 // Every 33 milliseconds copy the video image to the canvas
 setInterval(function() {
    if (videoElement.paused || videoElement.ended) return;
    context.fillRect(0, 0, w, h);
    context.drawImage(videoElement, 0, 0, w, h);
 }, 33);

 setInterval(function(){
   // get data here
   getColors();
   analyse();

 }, 250);

}, false);

function getColors(){
  imgData = context.getImageData(0,0,canvas.width,canvas.height);
  for(var i =0; i<4; ++i){
    points[i] = getPixelXY(imgData, coords[i][0], coords[i][1]);
  }
  //testing purposes only
  //console.log(points);
}

function getPixel(imgData, index) {
  var i = index*4, d = imgData.data;
  return [d[i],d[i+1],d[i+2],d[i+3]];
}

function getPixelXY(imgData, x, y) {
  return getPixel(imgData, y*imgData.width+x);
}

function analyse(){
  if(points){
    for(var i =0; i<4; ++i){
      if( Math.abs(points[i][0] - tolerances.red[0]) < tolerances.diff && Math.abs(points[i][1] - tolerances.red[1]) < tolerances.diff && Math.abs(points[i][2] - tolerances.red[2]) < tolerances.diff ) {
        //console.log('red');
        set[i] = 'red';
      } else if( Math.abs(points[i][0] - tolerances.green[0]) < tolerances.diff && Math.abs(points[i][1] - tolerances.green[1]) < tolerances.diff && Math.abs(points[i][2] - tolerances.green[2]) < tolerances.diff ) {
        //console.log('green');
        set[i] = 'green';
      } else if( Math.abs(points[i][0] - tolerances.yellow[0]) < tolerances.diff && Math.abs(points[i][1] - tolerances.yellow[1]) < tolerances.diff && Math.abs(points[i][2] - tolerances.yellow[2]) < tolerances.diff ) {
        //console.log('yellow');
        set[i] = 'yellow';
      } else if( Math.abs(points[i][0] - tolerances.purple[0]) < tolerances.diff && Math.abs(points[i][1] - tolerances.purple[1]) < tolerances.diff && Math.abs(points[i][2] - tolerances.purple[2]) < tolerances.diff ) {
        //console.log('purple');
        set[i] = 'purple';
      }
    }
    //console.log(set);
    compose();
  }
}

function compose(){
  var h1 = document.querySelector('#h1'),
      p1 = document.querySelector('#p1'),
      i  = document.querySelector('#italics'),
      p2 = document.querySelector('#p2');


  h1.innerHTML = inputs[ set[0] ][0];
  p1.innerHTML = inputs[ set[1] ][1];
  i.innerHTML  = inputs[ set[2] ][2];
  p2.innerHTML = inputs[ set[3] ][3];

}




//
// function writeMessage(canvas, message) {
//   //var context = canvas.getContext('2d');
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.font = '18pt Calibri';
//   context.fillStyle = 'black';
//   context.fillText(message, 10, 25);
// }
// function getMousePos(canvas, evt) {
//   var rect = canvas.getBoundingClientRect();
//   return {
//     x: evt.clientX - rect.left,
//     y: evt.clientY - rect.top
//   };
// }
// //  var canvas = document.getElementById('myCanvas');
// //  var context = canvas.getContext('2d');
//
// canvas.addEventListener('mousemove', function(evt) {
//   var mousePos = getMousePos(canvas, evt);
//   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//   writeMessage(canvas, message);
// }, false);
