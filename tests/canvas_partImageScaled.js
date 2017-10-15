var test = {
   draws: 0,
   fps: {
      value: 0,
      check: 0,
      frames: 0
   },
   loop: function(){
      setTimeout(() =>{ this.loop() }, 1000/60)
      for(var i = 0; i < this.draws; i++){
         ctx.drawImage(images.large,
            5, 5, 45, 20,
            0, 0, ctx.canvas.width, ctx.canvas.height)
      }

      this.fpsUpdate()

      if(Math.random() < 0.1){ this.draws += 1 }
   },
   fpsUpdate: function(){
      this.fps.frames += 1
      if(performance.now() - this.fps.check > 1000 ){
         this.fps.check = performance.now()
         this.fps.value = this.fps.frames
         this.fps.frames = 0

         results.set([
            { name: 'fps', value: this.fps.value },
            { name: 'draws', value: this.draws },
         ])
      }
   }
}

test.loop()
