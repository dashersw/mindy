const { ST7789 } = require('st7789')

const st7789 = new ST7789()

st7789.setup(board.spi(0, { sck: 18, mosi: 19, miso: 4, baudrate: 20000000 }), {
  width: 240,
  height: 135,
  dc: 16,
  rst: -1 /* RST connected to RUN */,
  cs: 17,
  rotation: 0
})

const gc = st7789.getContext('buffer')

const buttons = { A: 12, B: 13, X: 14, Y: 15 }

// const r = 6
// const g = 7
// const b = 8

// function setColor(red, green, blue) {
//   analogWrite(r, red)
//   analogWrite(g, green)
//   analogWrite(b, blue)
// }

// setInterval(() => {
//   let rv = Math.random()
//   let gv = Math.random()
//   let bv = Math.random()
//   setColor(rv, gv, bv)
//   console.log(`random color: r=${rv.toFixed(2)},g=${gv.toFixed(2)},b=${bv.toFixed(2)}`)
// }, 1000)

module.exports = { gc, buttons }
