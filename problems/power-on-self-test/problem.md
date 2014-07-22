# Power On Self Test

Turn on an LED attached to pin 13

* Install the footballbot sketch using the Arduino IDE
* Create a directory for your answers and `cd` into it
* Get footballbot from npm: `npm install footballbot`
* Add a file for your solution (e.g. 01-power-on-self-test.js)
* When the board is ready, turn the **LED** at pin 13 on `this.digitalWrite(13, this.HIGH)`

## Install the footballbot sketch

Installing the footballbot sketch allows you to talk to your board from NodeJS.

* Download the IDE at: http://arduino.cc/en/main/software
* Copy the sketch from: https://raw.githubusercontent.com/achingbrain/footballbot/master/assets/footballbot.ino
* Paste the sketch into a new document and hit upload

## Boilerplate

You may copy and paste the following into your solution file to make getting started a little easier:

```js
var FootballBot = require('footballbot')
var bot = new FootballBot('/dev/tty.linvor-DevB')

bot.on('ready', function () {
  // Your solution here!
})
```

## Building the hardware

The Arduino has a built in LED and a resistor attached to pin 13 so no hardware
is required other than the Arduino itself and a USB cable.

## Hints

* Your kit includes an Arudino-compatible board.  Attach this to your computer using a USB cable.
* You will need to install the footballbot sketch from the Arduino IDE before Johnny-Five can talk to it.

## Components

- LED - http://node-ardx.org/electronics-primer#led
