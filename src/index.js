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

const enemies = [
    new Enemy1(ctx, 10, 10),
    new Enemy1(ctx, 150, 10),
    new Enemy1(ctx, 290, 10),
    new Enemy2(ctx, 10, 120),
    new Enemy2(ctx, 150, 120),
    new Enemy2(ctx, 290, 120),
];

enemies.forEach((enemy) => {
    enemy.drawShape1();
});

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

        let hit = false;

        enemies.forEach((enemy, index) => {
            const enemyIsHit = enemy.isHit(canon.shot);
            if (enemyIsHit) {
                enemies[index] = new Explosion(ctx, enemy.offsetX, enemy.offsetY);
            }
            hit = enemyIsHit || hit;
        });

        if (canMove && !hit) {
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
    enemies.forEach((enemy, index) => {
        if (enemy.drawShape1) {
            enemy.drawShape1(); 
        } else {
            if (enemy.times > 0) {
                enemy.draw();
                enemy.times--;
            } else {
                enemies.splice(index, 1);
            }
        }
    });
    canon.draw();

    requestAnimationFrame(main);
}
main();