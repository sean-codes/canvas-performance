// var settings = new Settings([
// 	{ label: 'draws', min: 0, max: 1000, value: 1 }
// ])

var images = {
	imgLarge: { src: 'images/imgLarge.png' },
	imgMedium: { src: 'images/imgMedium.png' },
}

for(var image in images) {
	images[image].html = document.createElement('img')
	images[image].html.container = images[image]
	images[image].html.src = images[image].src
	images[image].complete = false

	// canvas version
	images[image].html.onload = function() {
		this.container.canvas = document.createElement('canvas')
		this.container.canvas.width = this.width
		this.container.canvas.height = this.height
		this.container.canvas.getContext('2d').drawImage(this, 0, 0)
		this.container.complete = true
	}
}

var core = new Core()
core.step = () => {
	drawCircle(50, 50, 100)
	drawImage(50, 50, images.imgLarge)
	drawImage(200, 50, images.imgMedium)

	core.debug('FPS: ' + core.fps.rate)
	core.debug('Draws: ' + 1)
}


function drawCircle(x, y, radius) {
	core.ctx.beginPath()
	core.ctx.arc(x, y, radius, 0, 2*Math.PI)
	core.ctx.stroke()
}


function drawImage(x, y, img) {
	if(img.complete) {
		core.ctx.drawImage(img.canvas, x, y)
	}
}
