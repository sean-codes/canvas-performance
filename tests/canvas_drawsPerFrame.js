console.log('hello')

var test = {
   positions: [],
   result: [],
   fps: {
      value: 0,
      check: 0,
      frames: 0
   },
   init: function(){
      this.loop()
   },
   loop: function(){
      var that = this
      setTimeout(function(){ that.loop() }, 1000/60)

      // Clear and Draw
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      for(var pos of this.positions){
         ctx.drawImage(pos.img, pos.x, pos.y)
      }

      // Add new positions
      if(Math.random() < 1){
         this.addPosition()
      }

      this.fps.frames += 1
      if(performance.now() - this.fps.check > 1000 ){
         this.fps.check = performance.now()
         this.fps.value = this.fps.frames
         this.fps.frames = 0
      }

      results.set([
         { name: 'fps', value: this.fps.value },
         { name: 'draws', value: this.positions.length },

      ])
   },
   addPosition: function(){
      this.positions.push({
         x: Math.random()*ctx.canvas.width,
         y: Math.random()*ctx.canvas.height,
         img: this.chooseImage()
      })
   },
   chooseImage: function(){
      var choices = Object.keys(images)
      var id = Math.floor(choices.length*Math.random())
      return images[choices[id]]
   }
}

test.init()
