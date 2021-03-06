import { Player } from "./player.js";
import { InputHandler } from "./input.js";

addEventListener("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 500;
  canvas.height = 500;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 50;
      this.player = new Player(this);
      this.input = new InputHandler();
    }
    update(deltaTime) {
      this.player.update({
        input: this.input.keys,
        deltaTime,
      });
    }
    draw(ctx) {
      this.player.draw(ctx);
    }
  }

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate(0);
});
