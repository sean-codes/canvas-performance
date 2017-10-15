

var imgCanvas = document.createElement('canvas').getContext('2d')
var img = images.large
imgCanvas.canvas.width = img.width
imgCanvas.canvas.height = img.height
imgCanvas.drawImage(img, 0, 0);


dataUrl = imgCanvas.canvas.toDataURL(),
imgData = document.createElement('img');
imgData.src = dataUrl;

testCanvas()
testImg()
testCanvasData()
function testCanvasData(){
   var time = performance.now()
   for(var i = 0; i < 10000; i++){
      ctx.drawImage(imgData, img.width*2, 0)
   }

   results.push({ name: 'Canvas Data', value: performance.now() - time })
}

function testCanvas(){
   var time = performance.now()
   for(var i = 0; i < 10000; i++){
      ctx.drawImage(imgCanvas.canvas, img.width, 0)
   }

   results.push({ name: 'Canvas', value: performance.now() - time })
}


function testImg(){
   var time = performance.now()
   for(var i = 0; i < 10000; i++){
      ctx.drawImage(img, 0, 0)
   }

   results.push({ name: 'Image', value: performance.now() - time })
}
