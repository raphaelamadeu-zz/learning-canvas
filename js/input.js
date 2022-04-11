export class InputHandler {
  constructor() {
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      if (!this.keys.includes(e.key)) this.keys.push(e.key);
    });

    window.addEventListener("keyup", (e) =>
      this.keys.splice(this.keys.indexOf(e.key), 1)
    );
  }
}
