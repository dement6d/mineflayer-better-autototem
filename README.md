# Mineflayer AutoTotem
A customizable AutoTotem plugin with useful options for anti-cheat avoidance

# Installing
`npm i mineflayer-better-autototem`

# Example usage
```js
const autoTotem = require('mineflayer-better-autototem');

const bot = mineflayer.createBot({
    host: server,
    port: port,
    username: username,
    password: password
})

bot.loadPlugin(autoTotem)

bot.once('spawn', () => {
    // set up autototem
    bot.autoTotem.delay = 5;
    bot.autoTotem.equipAt = 20;
    bot.autoTotem.stopMovement = true;
    bot.autoTotem.whileMoving = false;
});
```