

let check_five = 0;


let touch_path = 0;
let coord_current = 0;
let coord_last = 0;
let touch_once = true;

//et section3 = document.getElementById('section3');
let anchor1;
let anchor_num = 0;

window.addEventListener('touchmove', pointer_move);
window.addEventListener('wheel', onWheel);

function pointer_move(e) {
    coord_current = e.touches[0].clientY;
    touch_path = coord_current - coord_last;
    coord_last = e.touches[0].clientY;
    check_five += 1;
    console.log(check_five);
    if (check_five > 9) {
        if (touch_once == true) {
            if (touch_path > 0) {
                if (anchor_num >= 1) {
                    anchor_num -= 1;
                    anchor1 = document.querySelectorAll(".anchor")[anchor_num];
                    anchor1.scrollIntoView();
                }
            } else {
                if (anchor_num < 3) {
                    anchor_num +=1;
                    anchor1 = document.querySelectorAll(".anchor")[anchor_num];
                    anchor1.scrollIntoView();
                }
            };
            touch_once = false;

            setTimeout(function() {
                touch_once = true;
            }, 400)
        }
        check_five = 0;
    }

};

//section3.scrollIntoView();
//elem.scrollTo('section3');
//function scrollBy() {
//    elem.scrollBy('section3');
//}

function onWheel() {
    console.log('Крутим колесико');
}
