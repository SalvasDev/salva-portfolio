 export function isUsingDarkMode() {
      let bodyElement = document.querySelector('body')
      let bodyStyle = getComputedStyle(bodyElement)
      let bodyBackgroundColor = rgb2hex(bodyStyle.backgroundColor)
      let darkModeBgColor = "#00242A"

      return darkModeBgColor === bodyBackgroundColor
    }

     function rgb2hex(rgb) {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)

      function hex(x) {
        return("0" + parseInt(x).toString(16)).slice(-2)
      }
      return("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase() 
    }
