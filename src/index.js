const LEFT = 'ArrowLeft';
const RIGHT = 'ArrowRight';
const SPACE = 'Space';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let direction = null;
let shoot = false;

document.onkeydown = function (e) {
    switch (e.code) {
        case LEFT:
            direction = LEFT;
            break;
        case RIGHT:
            direction = RIGHT;
            break;
        case SPACE:
            shoot = true;
            break;
    }
}

const canon = new Canon(ctx, 0, 300);
canon.draw();

const enemy = new Enemy1(ctx, 10, 10);
enemy.drawShape1();

let amount = 0;
let moveValue = 0;
let speed = 4;

function main() {
    ctx.clearRect(0, 0, 500, 400);
    if (shoot === true) {
        canon.shoot();
        shoot = false;
    }

    if (canon.shot !== null) {
        const canMove = canon.shot.move(0, -1 * speed);
        if (canMove) {
            canon.shot.draw();
        } else {
            canon.shot = null;
        }
    }

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
            amount--;
        } else {
            amount = 0;
        }
    }
    enemy.drawShape1(); 
    canon.draw();

    requestAnimationFrame(main);
}
main();