//----------------------------------------------------------------------------------------------//
//------------------------------------------| Global |------------------------------------------//
//----------------------------------------------------------------------------------------------//
var ctx = document.querySelector('canvas').getContext('2d')
var settings = settings || {}
var images = {}
var html = {}
//----------------------------------------------------------------------------------------------//
//----------------------------------------| Initialize |----------------------------------------//
//----------------------------------------------------------------------------------------------//
var init = function(){
   // Setup Images
   var imgHTML = document.querySelectorAll('img')
   for(var i = 0; i < imgHTML.length; i++) {
      var name = imgHTML[i].getAttribute('data-name')
      images[name] = imgHTML[i]
   }
   console.log('Settings', settings)
   console.log('Images', images)

   html.tests = document.querySelector('tests')
   for(var test of settings.tests){
      html.tests.innerHTML += `<test onclick="loadTest('${test.src}')">${test.name}</test>`
   }

   resolution.init('full')
}

//----------------------------------------------------------------------------------------------//
//----------------------------------------| Load Test |-----------------------------------------//
//----------------------------------------------------------------------------------------------//
var loadTest = function(src){
   html.tests.classList.add('hide')
   var scriptHTML = document.createElement('script')
   scriptHTML.src = src
   document.body.appendChild(scriptHTML)
}

//----------------------------------------------------------------------------------------------//
//----------------------------------------| Resolution |----------------------------------------//
//----------------------------------------------------------------------------------------------//
var resolution = {
   current: 'full',
   init: function(set){
      this.current = set
      this.set(this.current)
      window.addEventListener('resize', () => { this.set(this.current) })
   },
   set: function(choice){
      var canvas = ctx.canvas;
      var size = settings.resolutions[choice]
      var width = eval(size.width)
      var height = eval(size.height)

      canvas.width = width
      canvas.height = height
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
   }
}

//----------------------------------------------------------------------------------------------//
//-------------------------------------------| Results |----------------------------------------//
//----------------------------------------------------------------------------------------------//
var results = {
   html: document.querySelector('results'),
   data: [],
   set: function(data){
      this.data = data
      this.display()
   },
   push: function(data){
      this.data.push(data)
      this.display()
   },
   display: function(results){
      this.html.innerHTML = ''
      for(var data of this.data)[
         this.html.innerHTML += `<result><name>${data.name}</name><value>${data.value}</value>`
      ]
   },
   reset: function(){
      this.data = []
   }
}
