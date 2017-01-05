class Enemy1 extends Enemy {

    drawShape1() {
        this.ctx.beginPath();

        this.moveTo(0, 4);
        this.lineTo(0, 7);
        this.lineTo(1, 7);
        this.lineTo(1, 5);
        this.lineTo(2, 5);
        this.lineTo(2, 7);
        this.lineTo(3, 7);
        this.lineTo(3, 8);
        this.lineTo(5, 8);
        this.lineTo(5, 7);
        this.lineTo(3, 7);
        this.lineTo(3, 6);
        this.lineTo(8, 6);
        this.lineTo(8, 7);
        this.lineTo(6, 7);
        this.lineTo(6, 8);
        this.lineTo(8, 8);
        this.lineTo(8, 7);
        this.lineTo(9, 7);
        this.lineTo(9, 5);
        this.lineTo(10, 5);
        this.lineTo(10, 7);
        this.lineTo(11, 7);
        this.lineTo(11, 4);
        this.lineTo(10, 4);
        this.lineTo(10, 3);
        this.lineTo(9, 3);
        this.lineTo(9, 2);
        this.lineTo(8, 2);
        this.lineTo(8, 1);
        this.lineTo(9, 1);
        this.lineTo(9, 0);
        this.lineTo(8, 0);
        this.lineTo(8, 1);
        this.lineTo(7, 1);
        this.lineTo(7, 2);
        this.lineTo(4, 2);
        this.lineTo(4, 1);
        this.lineTo(3, 1);
        this.lineTo(3, 0);
        this.lineTo(2, 0);
        this.lineTo(2, 1);
        this.lineTo(3, 1);
        this.lineTo(3, 2);
        this.lineTo(2, 2);
        this.lineTo(2, 3);
        this.lineTo(1, 3);
        this.lineTo(1, 4);
        this.ctx.closePath();
        
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        this.ctx.fillStyle = 'black';
        this.fillRect(3, 3, 1, 1);
        this.fillRect(7, 3, 1, 1);
    }

    drawShape2() {
        this.ctx.beginPath();

        this.moveTo(0, 1);
        this.lineTo(0, 5);
        this.lineTo(1, 5);
        this.lineTo(1, 6);
        this.lineTo(2, 6);
        this.lineTo(2, 7);
        this.lineTo(1, 7);
        this.lineTo(1, 8);
        this.lineTo(2, 8);
        this.lineTo(2, 7);
        this.lineTo(3, 7);
        this.lineTo(3, 6);
        this.lineTo(8, 6);
        this.lineTo(8, 7);
        this.lineTo(9, 7);
        this.lineTo(9, 8);
        this.lineTo(10, 8);
        this.lineTo(10, 7);
        this.lineTo(9, 7);
        this.lineTo(9, 6);
        this.lineTo(10, 6);
        this.lineTo(10, 5);
        this.lineTo(11, 5);
        this.lineTo(11, 1);
        this.lineTo(10, 1);
        this.lineTo(10, 3);
        this.lineTo(9, 3);
        this.lineTo(9, 2);
        this.lineTo(8, 2);
        this.lineTo(8, 1);
        this.lineTo(9, 1);
        this.lineTo(9, 0);
        this.lineTo(8, 0);
        this.lineTo(8, 1);
        this.lineTo(7, 1);
        this.lineTo(7, 2);
        this.lineTo(4, 2);
        this.lineTo(4, 1);
        this.lineTo(3, 1);
        this.lineTo(3, 0);
        this.lineTo(2, 0);
        this.lineTo(2, 1);
        this.lineTo(3, 1);
        this.lineTo(3, 2);
        this.lineTo(2, 2);
        this.lineTo(2, 3);
        this.lineTo(1, 3);
        this.lineTo(1, 1);
        
        this.ctx.closePath();
        this.ctx.fillStyle = 'white';
        this.ctx.fill();

        this.ctx.fillStyle = 'black';
        this.fillRect(3, 3, 1, 1);
        this.fillRect(7, 3, 1, 1);
    }

}