class Item {
    constructor(context, offsetX = 0, offsetY = 0, length = 10) {
        this.ctx = context;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.length = length;
        this.width = 0;
        this.height = 0;
    }

    move(x = 0, y = 0) {
        const offsetX = this.offsetX + x;
        const offsetY = this.offsetY + y;
        if (offsetX >= 0 && offsetY >= 0 && offsetX + this.width <= 502) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            return true;
        }
        return false;
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