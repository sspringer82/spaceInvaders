class Enemy {
    constructor(context, offsetX = 0, offsetY = 0, length = 10) {
        this.ctx = context;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.length = length;
    }

    moveTo(x, y) {
        this.ctx.moveTo(this.offsetX + this.length * x, this.offsetY + this.length * y);
    }

    lineTo(x, y) {
        this.ctx.lineTo(this.offsetX + this.length * x, this.offsetY + this.length * y);
    }

    fillRect(x, y, width, height) {
        this.ctx.fillRect(this.offsetX + this.length * x, this.offsetY + this.length * y, this.length * width, this.length * height);
    }
}