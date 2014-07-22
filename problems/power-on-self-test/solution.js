var FootballBot = require('footballbot')
var bot = new FootballBot('/dev/tty.linvor-DevB')

bot.on('ready', function () {
  this.digitalWrite(13, this.HIGH)
})