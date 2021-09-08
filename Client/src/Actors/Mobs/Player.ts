import { Actor, Color, Engine, Sprite, vec, Vector } from 'excalibur';
import { Resources } from '../../Resources';

export class Player extends Actor {
  private _targetPos:Vector;

  constructor() {
    super({
      pos: vec(150, 150)
    });
  }

  onInitialize() {
    const sprite = new Sprite({image: Resources.Sword});
    this.graphics.add(sprite);
  }

  public onPreUpdate (engine: Engine) {
    engine.input.pointers.primary.on( 'down', function (evt) {
      if (!evt._canceled) {
        this._targetPos = evt.pos.clone();
        console.log("CLICKED: " + evt.pos)
      }
    })

    if (this._targetPos != this.pos) {
      this.actions.moveTo(this._targetPos, 50);
    }
  }
}
