class Core {
	constructor(options = {}) {
		this.canvas = options.canvas || document.querySelector('canvas')
		this.width = this.canvas.getBoundingClientRect().width
		this.height = this.canvas.getBoundingClientRect().height
		this.canvas.width = this.width
		this.canvas.height = this.height

		this.ctx = this.canvas.getContext('2d')
		this.ctx.font = '14px monospace'


		this.step = options.step || function(){ console.log('no step event') }
		this.speed = 1000/(options.speed || 60)
		this.images = []

		// debugging
		this.debugLines = []
		this.fps = { frame: 0, rate: 0, check: performance.now() }

		this.step.bind(this)
		this.loop()
	}

	loop() {
		setTimeout(() => this.loop(), this.speed)
		this.clear()
		this.step()
		this.updateFPS()
		this.drawDebugLines()
	}


	debug(line) {
		this.debugLines.push(line)
	}

	drawDebugLines() {
		this.ctx.fillStyle = '#FFF'
		this.ctx.strokeStyle = '#FFF'
		
		// Draw debug lines
		var x = 10, y = 20
		for(var line of this.debugLines) {
			this.ctx.fillText(line, x, y)
			y += 20
		}
		this.debugLines = []
	}

	updateFPS() {
		this.fps.frame += 1
		if(performance.now() - this.fps.check > 1000) {
			this.fps.check = performance.now()
			this.fps.rate = this.fps.frame
			this.fps.frame = 0
		}
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}

	// drawSettings(settings) {
	//
	// }
	//
	// drawCircle(x, y, radius) {
	// 	this.ctx.beginPath()
	// 	this.ctx.arc(x, y, radius, 0, 2*Math.PI)
	// 	this.ctx.stroke()
	// }
	//
	// drawImage(x, y, img) {
	// 	this.ctx.drawImage()
	// }
}
