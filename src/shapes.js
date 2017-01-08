const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const e1s1 = new Enemy1(ctx, 10, 10);
e1s1.drawShape1();
const e1s2 = new Enemy1(ctx, 150, 10);
e1s2.drawShape2();

const e2s1 = new Enemy2(ctx, 10, 130);
e2s1.drawShape1();
const e2s2 = new Enemy2(ctx, 150, 130);
e2s2.drawShape2();

const e3s1 = new Enemy3(ctx, 10, 260);
e3s1.drawShape1();
const e3s2 = new Enemy3(ctx, 150, 260);
e3s2.drawShape2();

const saucer = new Saucer(ctx, 300, 10);
saucer.draw();

const canon = new Canon(ctx, 300, 130);
canon.draw();

const explosion = new Explosion(ctx, 300, 260);
explosion.draw();