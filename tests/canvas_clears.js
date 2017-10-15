var test = {
   clears: 0,
   fps: {
      value: 0,
      check: 0,
      frames: 0
   },
   loop: function(){
      setTimeout(() =>{ this.loop() }, 1000/60)
      for(var i = 0; i < this.clears; i++){
         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      }

      this.fpsUpdate()

      if(Math.random() < 0.1){ this.clears += 1 }
   },
   fpsUpdate: function(){
      this.fps.frames += 1
      if(performance.now() - this.fps.check > 1000 ){
         this.fps.check = performance.now()
         this.fps.value = this.fps.frames
         this.fps.frames = 0

         results.set([
            { name: 'fps', value: this.fps.value },
            { name: 'clears', value: this.clears },
         ])
      }
   }
}

test.loop()
