var settings = {
   resolutions: {
      full: { width: "window.innerWidth", height: "window.innerHeight" },
      small: { width: "250", height: "250" },
      medium: { width: "500", height: "300" },
      large: { width: "1000", height: "600" }
   },
   tests: [
      { name: "draws per frame", src: "tests/canvas_drawsPerFrame.js", type: "canvas" },
      { name: "image types", src: "tests/canvas_imgTypes.js", type: "canvas" },
      { name: "canvas clears", src: "tests/canvas_clears.js", type: "canvas" },
      { name: "full image draws", src: "tests/canvas_fullImageDraws.js", type: "canvas" },
      { name: "full part image draws", src: "tests/canvas_partImageScaled.js", type: "canvas" },
   ]
}
