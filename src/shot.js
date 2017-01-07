class Shot extends Item {

    constructor(context, offsetX = 0, offsetY = 0, length = 10) {
        super(context, offsetX, offsetY, length);
        this.height = 3 * length;
        this.width = 1 * length;
    }

    draw() {
        this.fillStyle = 'white';
        this.fillRect(0, 0, 1, 3)
    }

}