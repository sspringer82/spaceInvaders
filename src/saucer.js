class Saucer extends Item {

    draw() {
        this.ctx.beginPath();

        this.moveTo(0, 5);
        this.lineTo(0, 6);
        this.lineTo(2, 6);
        this.lineTo(2, 7);
        this.lineTo(3, 7);
        this.lineTo(3, 8);
        this.lineTo(4, 8);
        this.lineTo(4, 7);
        this.lineTo(5, 7);
        this.lineTo(5, 6);
        this.lineTo(7, 6);
        this.lineTo(7, 7);
        this.lineTo(9, 7);
        this.lineTo(9, 6);
        this.lineTo(11, 6);
        this.lineTo(11, 7);
        this.lineTo(12, 7);
        this.lineTo(12, 8);
        this.lineTo(13, 8);
        this.lineTo(13, 7);
        this.lineTo(14, 7);
        this.lineTo(14, 6);
        this.lineTo(16, 6);
        this.lineTo(16, 5);
        this.lineTo(15, 5);
        this.lineTo(15, 4);
        this.lineTo(14, 4);
        this.lineTo(14, 3);
        this.lineTo(13, 3);
        this.lineTo(13, 2);
        this.lineTo(11, 2);
        this.lineTo(11, 1);
        this.lineTo(5, 1);
        this.lineTo(5, 2);
        this.lineTo(3, 2);
        this.lineTo(3, 3);
        this.lineTo(2, 3);
        this.lineTo(2, 4);
        this.lineTo(1, 4);
        this.lineTo(1, 5);
        this.ctx.closePath();
        
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        this.ctx.fillStyle = 'black';
        this.fillRect(3, 4, 1, 1);
        this.fillRect(6, 4, 1, 1);
        this.fillRect(9, 4, 1, 1);
        this.fillRect(12, 4, 1, 1);
    }

}