import { Actor, Color, Sprite, vec } from 'excalibur';
import { Resources } from '../../resources';

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150)
    });
  }

  onInitialize() {
    const sprite = new Sprite({image: Resources.Sword});
    this.graphics.add(sprite);
  }
}
