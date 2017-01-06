const LEFT = 'ArrowLeft';
const RIGHT = 'ArrowRight';
const SPACE = 'Space';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let direction = null;

document.onkeydown = function (e) {
    switch (e.code) {
        case LEFT:
            direction = LEFT;
            break;
        case RIGHT:
            direction = RIGHT;
            break;
        case SPACE:
            break;
    }
}

const canon = new Canon(ctx, 0, 100);
canon.draw();

let amount = 0;
let moveValue = 0;
let speed = 3;

function main() {
    if (direction) {
        amount = 10;
        if (direction === LEFT) {
            moveValue = -1;
        } else if (direction === RIGHT) {
            moveValue = 1;
        }
    }
    if (moveValue !== 0 && amount > 0) {
        direction = null;
        let canMove = canon.move(moveValue * speed);
        if (canMove) {
            ctx.clearRect(0, 0, 500, 400);
            canon.draw();
            amount--;
        } else {
            amount = 0;
        }
    }

    requestAnimationFrame(main);
}
main();