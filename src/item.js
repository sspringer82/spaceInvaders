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
        if (offsetX >= 0 && offsetY >= 0 && offsetX + this.width <= 802) {
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

    isHit(shot) {
        let lowerEdge = this.offsetY + this.height;
        let upperEdge = this.offsetY
        let leftEdge = this.offsetX;
        let rightEdge = this.offsetX + this.width;

        if (
            shot.offsetY > upperEdge && shot.offsetY < lowerEdge &&
            shot.offsetX < rightEdge && shot.offsetX > leftEdge
            ) {
                return true;
            }
            return false;
    }
}