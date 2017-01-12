const LEFT = 'ArrowLeft';
const RIGHT = 'ArrowRight';
const SPACE = 'Space';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let direction = null;
let shoot = false;
let points = 0;
let moveHorizontal = 300;
let moveVertical = 10;
let moveCurrentHorizontal = 0;
let moveDirection = 1;
let enemySpeed = 1;

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

const canon = new Canon(ctx, 0, 510, 3);
canon.draw();

const enemies = [];

for (var i = 0; i < 11; i++) {
    enemies.push(new Enemy3(ctx, 5 + i * 45, 70, 3));
    enemies.push(new Enemy1(ctx, 5 + i * 45, 110, 3));
    enemies.push(new Enemy1(ctx, 5 + i * 45, 150, 3));
    enemies.push(new Enemy2(ctx, 5 + i * 45, 190, 3));
    enemies.push(new Enemy2(ctx, 5 + i * 45, 230, 3));
}

enemies.forEach((enemy) => {
    enemy.drawShape1();
});

let amount = 0;
let moveValue = 0;
let speed = 4;

function main() {
    ctx.clearRect(0, 0, 800, 600);
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
                points += enemy.points;
                enemies[index] = new Explosion(ctx, enemy.offsetX, enemy.offsetY, 3);
            }
            hit = enemyIsHit || hit;
        });

        if (canMove && !hit) {
            canon.shot.draw();
        } else {
            canon.shot = null;
        }
    }

/*enemy move */
    if (moveCurrentHorizontal >= moveHorizontal || moveCurrentHorizontal < 0) {
        moveDirection *= -1;
    }
    enemies.forEach((enemy) => {
        enemy.move(enemySpeed * moveDirection)
    });
    moveCurrentHorizontal += moveDirection;

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

    ctx.font = '32px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('SCORE', 80, 30);
    let formattedPoints = '';
    switch (true) {
        case points < 10:
            formattedPoints += '000' + points;
            break;
        case points < 100:
            formattedPoints += '00' + points;
            break;
        case points < 1000:
            formattedPoints += '0' + points;
            break;
    }
    ctx.fillText(formattedPoints, 100, 60);

    requestAnimationFrame(main);
}
main();