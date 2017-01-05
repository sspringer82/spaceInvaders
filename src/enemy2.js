class Enemy2 extends Enemy {

    drawShape1() {
        this.ctx.beginPath();
        this.moveTo(0, 2);
        this.lineTo(0, 5);
        this.lineTo(2, 5);
        this.lineTo(2, 6);
        this.lineTo(1, 6);
        this.lineTo(1, 7);
        this.lineTo(2, 7);
        this.lineTo(2, 8);
        this.lineTo(4, 8);
        this.lineTo(4, 7);
        this.lineTo(3, 7);
        this.lineTo(3, 6);
        this.lineTo(5, 6);
        this.lineTo(5, 7);
        this.lineTo(7, 7);
        this.lineTo(7, 6);
        this.lineTo(9, 6);
        this.lineTo(9, 7);
        this.lineTo(8, 7);
        this.lineTo(8, 8);
        this.lineTo(10, 8);
        this.lineTo(10, 7);
        this.lineTo(11, 7);
        this.lineTo(11, 6);
        this.lineTo(10, 6);
        this.lineTo(10, 5);
        this.lineTo(12, 5);
        this.lineTo(12, 2);
        this.lineTo(11, 2);
        this.lineTo(11, 1);
        this.lineTo(8, 1);
        this.lineTo(8, 0);
        this.lineTo(4, 0);
        this.lineTo(4, 1);
        this.lineTo(1, 1);
        this.lineTo(1, 2);
        this.ctx.closePath();
        
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(this.offsetX + this.length * 3, this.offsetY + this.length * 3, this.length * 2, this.length * 1);
        this.ctx.fillRect(this.offsetX + this.length * 7, this.offsetY + this.length * 3, this.length * 2, this.length * 1);
        this.ctx.fillRect(this.offsetX + this.length * 5, this.offsetY + this.length * 5, this.length * 2, this.length * 1);
    }

    drawShape2() {
    }

}