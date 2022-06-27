

let touch_up = 0;
let touch_down = 0;
let touch_path = 0;

window.addEventListener('touchstart', point_down);
window.addEventListener('touchend', point_cancel);
window.addEventListener('touchmove', pointer_move);
window.addEventListener('wheel', onWheel);

function point_down() {
    console.log('Коснулись экрана');
}

function point_cancel() {
    console.log('Убрали палец');
}

function pointer_move() {
    console.log('перемещене точки');
}

function onWheel() {
    console.log('Крутим колесико');
}
