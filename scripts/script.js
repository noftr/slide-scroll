

let touch_up = 0;
let touch_down = 0;
let touch_path = 0;
let coord_current = 0;
let coord_last = 0;
let touch_once = true;
let time = 1000

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

function pointer_move(e) {
    coord_current = e.touches[0].clientY;
    touch_path = coord_current - coord_last;
    coord_last = e.touches[0].clientY;
    if (touch_once == true) {
        if (touch_path<0) {
            console.log("скролю вниз")
        } else {
            console.log("скролю вверх")
        };
        touch_once = false;

        setTimeout(function() {
            touch_once = true;
        }, 1000)


    }

};




function onWheel() {
    console.log('Крутим колесико');
}
