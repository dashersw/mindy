const font = require('simple-fonts/lee-sans')

// const { PicoCYW43 } = require('pico_cyw43')
// const pico_cyw43 = new PicoCYW43()

// // Blink on-board LED
// setInterval(() => {
//   if (pico_cyw43.getGpio(0)) {
//     pico_cyw43.putGpio(0, false) // turn-off LED
//   } else {
//     pico_cyw43.putGpio(0, true) // turn-on LED
//   }
// }, 1000)

// const { gc, buttons } = require('./displays/pico-display')
// const { gc, buttons } = require('./displays/ws18')
const { gc, buttons } = require('./displays/ws13-joystick')

function drawMessage(msg) {
  gc.clearScreen()
  gc.setFontColor(gc.color16(255, 255, 0))
  gc.setFont(font)
  gc.setFontScale(2, 2)
  gc.drawText(0, 0, msg)
  if (gc.display) {
    gc.display()
  }
}

const { Button } = require('button')

for (let button in buttons) {
  const btn = new Button(buttons[button])

  btn.on('click', function () {
    console.log(`button ${button} clicked`)
    drawMessage(`button ${button} clicked`)
  })
}

drawMessage(`Welcome to Mindy.`)
