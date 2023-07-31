const { ST7735 } = require('st7735')
const st7735 = new ST7735()
const font = require('simple-fonts/lee-sans')

st7735.setup(board.spi(1, { sck: 10, mosi: 11, miso: -1, baudrate: 20000000 }), {
  width: 128,
  height: 160,
  xstart: 2,
  ystart: 1,
  dc: 8,
  rst: -1,
  cs: 9,
  rotation: 0
})
const gc = st7735.getContext('buffer')

const buttons = { A: 15, B: 17, X: 19, Y: 21, UP: 2, DOWN: 18, LEFT: 16, RIGHT: 20, CTRL: 3 }

const colors = [
  gc.color16(255, 255, 255), // white
  gc.color16(255, 0, 0), // red
  gc.color16(0, 255, 0), // green
  gc.color16(0, 0, 255), // blue
  gc.color16(255, 255, 0),
  gc.color16(255, 0, 255),
  gc.color16(0, 255, 255),
  gc.color16(127, 127, 127)
]

const t = 3000

// start
gc.clearScreen()
gc.setFontColor(gc.color16(255, 255, 255))
gc.setColor(colors[0])
gc.drawRect(0, 0, st7735.width - 1, st7735.height - 1)
gc.drawText(10, 10, 'Graphics Examples')
gc.display()
delay(t)

// pixels
gc.clearScreen()
for (let x = 0; x < gc.getWidth(); x += 5) {
  for (let y = 0; y < gc.getHeight(); y += 5) {
    gc.setPixel(x, y, 0xffff)
  }
}
gc.display()
delay(t)

// lines
gc.clearScreen()
let c = 0
for (let x = 0; x < gc.getWidth(); x += 5) {
  gc.setColor(colors[c])
  gc.drawLine(0, 0, x, gc.getHeight() - 1)
  gc.drawLine(gc.getWidth() - 1, 0, x, gc.getHeight() - 1)
  c++
  if (c > colors.length - 1) c = 0
}
gc.display()
delay(t)

// rectangles
gc.clearScreen()
c = 0
for (let x = 0; x < gc.getWidth(); x += 5) {
  gc.setColor(colors[c])
  if (x * 2 < Math.min(gc.getHeight(), gc.getWidth())) {
    gc.drawRect(x, x, gc.getWidth() - x * 2, gc.getHeight() - x * 2)
  }
  c++
  if (c > colors.length - 1) c = 0
}
gc.display()
delay(t)

// filled rectangles
gc.clearScreen()
c = 0
for (let x = 0; x < gc.getWidth(); x += 10) {
  for (let y = 0; y < gc.getWidth(); y += 10) {
    if (((x + y) / 10) % 2 === 0) {
      gc.setFillColor(colors[c])
      gc.fillRect(x, y, 10, 10)
      c++
      if (c > colors.length - 1) c = 0
    }
  }
}
gc.display()
delay(t)

// circles
gc.clearScreen()
c = 0
for (let x = 0; x < gc.getWidth(); x += 30) {
  for (let y = 0; y < gc.getWidth(); y += 30) {
    gc.setColor(colors[c])
    gc.setFillColor(colors[c])
    gc.drawCircle(x + 15, y + 15, 14)
    gc.fillCircle(x + 15, y + 15, 8)
    c++
    if (c > colors.length - 1) c = 0
  }
}
gc.display()
delay(t)

// round rectangles
gc.clearScreen()
c = 0
for (let x = 0; x < gc.getWidth(); x += 30) {
  for (let y = 0; y < gc.getWidth(); y += 20) {
    gc.setColor(colors[c])
    gc.setFillColor(colors[c])
    gc.drawRoundRect(x, y, 28, 18, 5)
    gc.fillRoundRect(x + 3, y + 3, 22, 12, 4)
    c++
    if (c > colors.length - 1) c = 0
  }
}
gc.display()
delay(t)

// font
gc.clearScreen()
gc.setFontColor(0xffff)
gc.drawText(
  0,
  0,
  "ABCDEFGHIJKLMN\nOPQRSTUVWXYZ\nabcdefghijklmn\nopqrstuvwxyz\n0123456789\n~!@#$%^&*()-=_+\n[]{}\\|:;'<>/?.,"
)
gc.display()
delay(t)

// font scale
gc.clearScreen()
gc.setFontColor(0xffff)
gc.setFontScale(3, 3)
gc.drawText(
  0,
  0,
  "ABCDEFGHIJKLMN\nOPQRSTUVWXYZ\nabcdefghijklmn\nopqrstuvwxyz\n0123456789\n~!@#$%^&*()-=_+\n[]{}\\|:;'<>/?.,"
)
gc.setFontScale(1, 1)
gc.display()
delay(t)

// custom font
gc.clearScreen()
gc.setFontColor(0xffff)
gc.setFont(font)
gc.setFontScale(1, 1)
gc.drawText(0, 0, 'Custom Font\n"Lee Sans"\nVariable-width Font')
gc.display()
delay(t)

module.exports = { gc, buttons }
