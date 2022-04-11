export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;

    this.x = 200;
    this.y = this.game.height - this.height;
    this.speed = 0;
    this.maxSpeed = 10;

    this.vy = 0;
    this.jumpForce = 15;
    this.weight = 1;
  }
  update({ input }) {
    this.x += this.speed;

    if (input.includes("ArrowRight")) this.speed = this.maxSpeed;
    else if (input.includes("ArrowLeft")) this.speed = -this.maxSpeed;
    else this.speed = 0;

    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;

    if (input.includes("ArrowUp") && this.onGround()) this.vy += this.jumpForce;
    this.y -= this.vy;
    if (!this.onGround()) this.vy -= this.weight;
    else this.vy = 0;
  }
  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
