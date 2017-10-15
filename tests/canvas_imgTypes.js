

var imgCanvas = document.createElement('canvas').getContext('2d')
var img = images.large
imgCanvas.canvas.width = img.width
imgCanvas.canvas.height = img.height
imgCanvas.drawImage(img, 0, 0);


dataUrl = imgCanvas.canvas.toDataURL(),
imgData = document.createElement('img');
imgData.src = dataUrl;

setInterval(function(){
   results.reset()
   setTimeout(function(){ testCanvas() }, 100)
   setTimeout(function(){ testImg() }, 120)
   setTimeout(function(){ testCanvasData() }, 140)
}, 1000)

function testCanvasData(){
   var x = img.width*2
   var time = performance.now()
   for(var i = 0; i < 1000; i++){
      ctx.drawImage(imgData, x, 0)
   }

   results.push({ name: 'Canvas Data', value: performance.now() - time })
}

function testCanvas(){
   var x = img.width
   var time = performance.now()
   for(var i = 0; i < 1000; i++){
      ctx.drawImage(imgCanvas.canvas, x, 0)
   }

   results.push({ name: 'Canvas', value: performance.now() - time })
}


function testImg(){
   var time = performance.now()
   for(var i = 0; i < 1000; i++){
      ctx.drawImage(img, 0, 0)
   }

   results.push({ name: 'Image', value: performance.now() - time })
}
