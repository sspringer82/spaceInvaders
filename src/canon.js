class Canon extends Enemy {

    draw() {
        this.ctx.beginPath();

        this.moveTo(0, 6);
        this.lineTo(0, 10);
        this.lineTo(13, 10);
        this.lineTo(13, 6);
        this.lineTo(12, 6);
        this.lineTo(12, 5);
        this.lineTo(8, 5);
        this.lineTo(8, 2);
        this.lineTo(7, 2);
        this.lineTo(7, 0);
        this.lineTo(6, 0);
        this.lineTo(6, 2);
        this.lineTo(5, 2);
        this.lineTo(5, 5);
        this.lineTo(1, 5);
        this.lineTo(1, 6);
        this.ctx.closePath();

        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }
}