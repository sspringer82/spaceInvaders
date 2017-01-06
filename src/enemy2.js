class Enemy2 extends Item {

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
        this.fillRect(3, 3, 2, 1);
        this.fillRect(7, 3, 2, 1);
        this.fillRect(5, 5, 2, 1);
    }

    drawShape2() {
        this.ctx.beginPath();
        this.moveTo(0, 2);
        this.lineTo(0, 5);
        this.lineTo(3, 5);
        this.lineTo(3, 6);
        this.lineTo(2, 6);
        this.lineTo(2, 7);
        this.lineTo(0, 7);
        this.lineTo(0, 8);
        this.lineTo(2, 8);
        this.lineTo(2, 7);
        this.lineTo(4, 7);
        this.lineTo(4, 6);
        this.lineTo(5, 6);
        this.lineTo(5, 7);
        this.lineTo(7, 7);
        this.lineTo(7, 6);
        this.lineTo(8, 6);
        this.lineTo(8, 7);
        this.lineTo(10, 7);
        this.lineTo(10, 8);
        this.lineTo(12, 8);
        this.lineTo(12, 7);
        this.lineTo(10, 7);
        this.lineTo(10, 6);
        this.lineTo(9, 6);
        this.lineTo(9, 5);
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
        this.fillRect(3, 3, 2, 1);
        this.fillRect(7, 3, 2, 1);
        this.fillRect(5, 5, 2, 1);
    }

}