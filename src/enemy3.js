class Enemy3 extends Item {

    drawShape1() {
        this.ctx.beginPath();
        this.moveTo(0, 4);
        this.lineTo(0, 6);
        this.lineTo(1, 6);
        // ---
        this.lineTo(1, 7);
        this.lineTo(0, 7);
        this.lineTo(0, 8);
        this.lineTo(1, 8);
        this.lineTo(1, 9);
        this.lineTo(2, 9);
        this.lineTo(2, 8);
        this.lineTo(1, 8);
        this.lineTo(1, 7);
        this.lineTo(2, 7);
        this.lineTo(2, 6);
        this.lineTo(3, 6);
        this.lineTo(3, 7);
        this.lineTo(5, 7);
        this.lineTo(5, 6);
        this.lineTo(6, 6);
        this.lineTo(6, 7);
        this.lineTo(7, 7);
        this.lineTo(7, 8);
        this.lineTo(6, 8);
        this.lineTo(6, 9);
        this.lineTo(7, 9);
        this.lineTo(7, 8);
        this.lineTo(8, 8);
        this.lineTo(8, 7);
        this.lineTo(7, 7);
        this.lineTo(7, 6);
        this.lineTo(8, 6);
        this.lineTo(8, 4);
        this.lineTo(7, 4);
        this.lineTo(7, 3);
        this.lineTo(6, 3);
        this.lineTo(6, 2);
        this.lineTo(5, 2);
        this.lineTo(5, 1);
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
        this.fillRect(2, 4, 1, 1);
        this.fillRect(5, 4, 1, 1);
    }

    drawShape2() {
        this.ctx.beginPath();
        this.moveTo(0, 4);
        this.lineTo(0, 6);
        this.lineTo(1, 6);

        this.lineTo(2, 6);
        this.lineTo(2, 7);
        this.lineTo(1, 7);
        this.lineTo(1, 8);
        this.lineTo(0, 8);
        this.lineTo(0, 9);
        this.lineTo(8, 9);
        this.lineTo(8, 8);
        this.lineTo(7, 8);
        this.lineTo(7, 7);
        this.lineTo(6, 7);
        this.lineTo(6, 6);

        this.lineTo(7, 6);
        this.lineTo(8, 6);
        this.lineTo(8, 4);
        this.lineTo(7, 4);
        this.lineTo(7, 3);
        this.lineTo(6, 3);
        this.lineTo(6, 2);
        this.lineTo(5, 2);
        this.lineTo(5, 1);
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
        this.fillRect(2, 4, 1, 1);
        this.fillRect(5, 4, 1, 1);

        this.fillRect(3, 6, 2, 1);
        this.fillRect(2, 7, 1, 1);
        this.fillRect(1, 8, 1, 1);
        this.fillRect(3, 8, 2, 1);
        this.fillRect(5, 7, 1, 1);
        this.fillRect(6, 8, 1, 1);
    }

}