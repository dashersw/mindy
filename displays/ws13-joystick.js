const { ST7789 } = require('st7789')

const st7789 = new ST7789()

st7789.setup(board.spi(1, { sck: 10, mosi: 11, miso: -1, baudrate: 100000000 }), {
  width: 240,
  height: 240,
  dc: 8,
  rst: 12,
  cs: 9,
  rotation: 1
})
// pinMode(13, OUTPUT)
// digitalWrite(13, HIGH)

const gc = st7789.getContext('buffer')

const buttons = { A: 15, B: 17, X: 19, Y: 21, UP: 2, DOWN: 18, LEFT: 16, RIGHT: 20, CTRL: 3 }

module.exports = { gc, buttons }
