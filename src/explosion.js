class Explosion extends Item {

    constructor(ctx, offsetX = 0, offsetY = 0, length = 10) {
        super(ctx, offsetX, offsetY, length);
        this.height = 7 * length;
        this.width = 12 * length;
        this.times = 20;
    }

    draw() {
        this.ctx.fillStyle = 'white';
        this.fillRect(1, 1, 1, 1);
        this.fillRect(2, 2, 1, 1);
        this.fillRect(3, 3, 1, 1);

        this.fillRect(0, 4, 1, 1);
        this.fillRect(1, 4, 1, 1);

        this.fillRect(1, 7, 1, 1);
        this.fillRect(2, 6, 1, 1);
        this.fillRect(3, 5, 1, 1);

        this.fillRect(4, 7, 1, 1);
        this.fillRect(5, 6, 1, 1);

        this.fillRect(8, 7, 1, 1);
        this.fillRect(7, 6, 1, 1);

        this.fillRect(11, 7, 1, 1);
        this.fillRect(10, 6, 1, 1);
        this.fillRect(9, 5, 1, 1);

        this.fillRect(12, 4, 1, 1);
        this.fillRect(11, 4, 1, 1);

        this.fillRect(11, 1, 1, 1);
        this.fillRect(10, 2, 1, 1);
        this.fillRect(9, 3, 1, 1);

        this.fillRect(8, 0, 1, 1);
        this.fillRect(7, 1, 1, 1);

        this.fillRect(4, 0, 1, 1);
        this.fillRect(5, 1, 1, 1);
    }
}