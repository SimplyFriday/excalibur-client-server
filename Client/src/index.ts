import { Engine, Loader, DisplayMode } from 'excalibur';
import { LevelOne } from './Scenes/LevelOne/LevelOne';
import { Player } from './Actors/Mobs/Player';
import { Resources } from './Resources';

/**
 * Managed game class
 */
class Game extends Engine {
  private player: Player;
  private levelOne: LevelOne;

  constructor() {
    super({ displayMode: DisplayMode.FillScreen });
  }

  public start() {

    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.player = new Player();
    this.levelOne.add(this.player);

    game.add('levelOne', this.levelOne);

    // Automatically load all default resources
    const loader = new Loader(Object.values(Resources));

    return super.start(loader);
  }
}

const game = new Game();
game.start().then(() => {
  game.goToScene('levelOne');
});
