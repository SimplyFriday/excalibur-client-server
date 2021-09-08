import { ImageSource, Sprite } from "excalibur"

const sword = require('./images/sword.png')
/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
const Resources = {
    Sword: new ImageSource(sword, false)
}

export { Resources }
