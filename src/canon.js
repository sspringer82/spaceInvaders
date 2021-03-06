class Canon extends Item {

    constructor(ctx, offsetX = 0, offsetY = 0, length = 10) {
        super(ctx, offsetX, offsetY, length);
        this.shot = null;
        this.height = 7 * length;
        this.width = 13 * length;
    }

    draw() {
        this.ctx.beginPath();

        this.moveTo(0, 4);
        this.lineTo(0, 7);
        this.lineTo(13, 7);
        this.lineTo(13, 4);
        this.lineTo(12, 4);
        this.lineTo(12, 3);
        this.lineTo(8, 3);
        this.lineTo(8, 1);
        this.lineTo(7, 1);
        this.lineTo(7, 0);
        this.lineTo(6, 0);
        this.lineTo(6, 1);
        this.lineTo(5, 1);
        this.lineTo(5, 3);
        this.lineTo(1, 3);
        this.lineTo(1, 4);
        this.ctx.closePath();

        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }

    shoot() {
        if (this.shot === null) {
            const offsetX = this.offsetX + (this.width - this.length) / 2;
            const offsetY = this.offsetY - 30;
            this.shot = new Shot(this.ctx, offsetX, offsetY, 3);
        }
    }
}