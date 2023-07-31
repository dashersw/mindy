# Mindy

Mindy is an open-source hardware/IoT project that allows you to send MIDI commands to your instruments via Puck.js and Raspberry Pi Pico/Zero boards and some displays.

## Background

I am a guitarist fed up with Roland not releasing a GR-55 alternative, so I decided to make my own.

I use an iPad as a sound processor, and I prefer no floorboards (or a GM-800... who knows.)

I want to be able to quickly switch presets and scenes via controls on my guitar. Puck.js is a great way to achieve it.

The plan is to stick several of them on the guitar's body, have them talk wirelessly to a Raspberry Pi Pico W, that's attached to a tiny screen. This combo sticks onto the top of the body, next to where the guitar strap connection is.

The goal is to enable a guitarist to easily see guitar and MIDI patches on a small screen and to be able to change it wirelessly. Either on an iPad or another MIDI controller.

## Installation

Put together a Raspberry Pi Pico and any of the displays mentioned in the [Displays](#displays) section. The code by default uses the 1.3" LCD screen with a joystick. If you'd like to use any other display, you should change `index.js` and require the code for your display of choice.

Then run the following to install the Kaluma CLI.

```sh
npm install -g @kaluma/cli
```

Then run the following to flash the code to the Pico:

```sh
kaluma flash ./index.js --bundle --shell
```

Good job! Now your board should display 'Welcome to Mindy.'`

## Hardware in consideration

### Boards

- [Puck.js](https://www.puck-js.com)
- [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/)
- [LiPo SHIM for Pico by Pimoroni](https://shop.pimoroni.com/products/pico-lipo-shim)
- [Raspberry Pi Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)

### Displays

- [1.3inch LCD Display Module for Raspberry Pi Pico, 65K Colors, 240×240, SPI](https://www.waveshare.com/pico-lcd-1.3.htm)
- [1.8inch LCD Display Module for Raspberry Pi Pico, 65K Colors, 160×128, SPI](https://www.waveshare.com/pico-lcd-1.8.htm)
- [Pico Display Pack by Pimoroni](https://shop.pimoroni.com/products/pico-display-pack)

# License

```

MIT License

Copyright (c) 2023 Armagan Amcalar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```

```
