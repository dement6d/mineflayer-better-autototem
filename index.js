function inject(bot) {

    bot.autoTotem = {}
    bot.enabled = true
    bot.whileMoving = true
    bot.stopMovement = false
    bot.stopFighting = false
    bot.equipAt = 14
    bot.delay = 0

    /**
     * Disables AutoTotem
     */
    autoTotem.disable = function () {
        autoTotem.enabled = false
    }

    /**
     * Enables AutoTotem
     */
    autoTotem.enable = function () {
        autoTotem.enabled = true
    }

    /**
     * Toggles AutoTotem
     */
    autoTotem.toggle = function () {
        autoTotem.enabled = !autoTotem.enabled
    }

    /** 
    * @param {Entity=} entity - "Entity that triggered an event"
    */
    function trigger(entity) {
        // Equip if enabled, health is low enough and trigger is the bot
        if (!autoTotem.enabled || (entity !== bot.entity)) return
        if (bot.health <= autoTotem.equipAt)
            autoTotem.equip(autoTotem.delay || 10)
    }

    /**
     * Equips a Totem after a set delay; if the bots
     * inventory contains one & if one isn't already equipped
     * 
     * @param {number=} delay 
     * @returns
     */
    autoTotem.equip = function (delay) {
        const totem = bot.inventory.findInventoryItem("totem_of_undying")
        const offhandItem = bot.inventory.slots[45]
        if (!totem || (offhandItem && offhandItem.name.includes('totem')))
            return

        // If stopMovement = true, Stop moving
        if (autoTotem.stopMovement) {
            if (bot.pathfinder?.goal) bot.pathfinder?.setGoal(null)
            bot.setControlState('forward', false)
            bot.setControlState('left', false)
            bot.setControlState('back', false)
            bot.setControlState('right', false)
            bot.setControlState('sneak', false)
            bot.setControlState('jump', false)
        }

        // Stop fighting
        if (autoTotem.stopFighting && bot.pvp?.target)
            bot.pvp.target = undefined

        // If whileMoving = false, Don't equip totem if bot is moving
        if (!autoTotem.whileMoving) {
            if (bot.pathfinder?.isMoving())
                return
            if (bot.getControlState('forward') || bot.getControlState('back') ||
                bot.getControlState('left') || bot.getControlState('right') ||
                bot.getControlState('jump'))
                return
        }

        setTimeout(() => {
            bot.equip(totem, 'off-hand')
            autoTotem.disable()
            setTimeout(() => autoTotem.enable(), delay ? delay / 2 : 10)
        }, delay || 0)
    }

    bot.on('playerCollect', (entity) => {
        trigger(entity)
    })
    bot.on('entityHurt', (entity) => {
        trigger(entity)
    })
    bot.on('physicTick', () => {
        trigger(bot.entity)
    })
}

module.exports = {
    autoTotem: inject,
}