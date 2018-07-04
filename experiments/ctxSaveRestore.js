settings = new Settings()
settings.add({ name: 'draws', min: 1, max: 100000, value: 100, step: 500 })
settings.add({ name: 'saveRestore', min: 0, max: 1, value: 1, step: 1 })
settings.add({ name: 'translateX', min: 0, max: 100, value: 0, step: 1 })
settings.add({ name: 'translateY', min: 0, max: 100, value: 0, step: 1 })
settings.add({ name: 'scaleX', min: -1, max: 1, value: 1, step: 0.1 })
settings.add({ name: 'scaleY', min: -1, max: 1, value: 1, step: 0.1 })

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
	var draws = settings.read('draws')

	core.debug('FPS: ' + core.fps.rate)
	core.debug('Draws: ' + draws)

	while(draws--) {
		drawImage(100, 100, images.imgLarge)

		var translateX = settings.read('translateX')
		var translateY = settings.read('translateY')
		var scaleX = settings.read('scaleX')
		var scaleY = settings.read('scaleY')
		if(!settings.read('saveRestore')) return

		core.ctx.save()
		core.ctx.translate(translateX, translateY)
		core.ctx.scale(scaleX, scaleY)
		core.ctx.rotate(0)
      core.ctx.restore()
	}
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
