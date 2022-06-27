

let touch_up = 0;
let touch_down = 0;
let touch_path = 0;



function pointer_move() {
  touch_up = e.touches[0].clientY;
   if (point_click == true) {
       if (first_click == true) {
           touch_path = touch_up - touch_down;
           let touch_inertia = 0.07*Math.pow(Math.abs(touch_path), 1.05);
           if (touch_inertia > 0.5) {
               scroller_1.speed -= touch_path * scroller_1.wheelMultiplier * touch_speed * touch_inertia;
               scroller_2.speed -= touch_path * scroller_2.wheelMultiplier * touch_speed * touch_inertia;
               scroller_3.speed -= touch_path * scroller_3.wheelMultiplier * touch_speed * touch_inertia;
               scroller_4.speed -= touch_path * scroller_4.wheelMultiplier * touch_speed * touch_inertia;
           } else {
               scroller_1.speed -= touch_path * scroller_1.wheelMultiplier * touch_speed;
               scroller_2.speed -= touch_path * scroller_2.wheelMultiplier * touch_speed;
               scroller_3.speed -= touch_path * scroller_3.wheelMultiplier * touch_speed;
               scroller_4.speed -= touch_path * scroller_4.wheelMultiplier * touch_speed;
           }
       };
       first_click = true;
   };
   touch_down = e.touches[0].clientY;
  console.log('произошло касание');
}

function point_down() {
    if (Math.abs(scroller_1.speed) > 1) {
        scroller_1.speed = 0;
        scroller_2.speed = 0;
        scroller_3.speed = 0;
        scroller_4.speed = 0;
    }
    point_click = true;

console.log('Сенсорный запуск');
}

function point_cancel() {
    point_click = false;
    first_click = false;

console.log('0');
}


function onWheel(event) {
    var normalized;
    var delta = event.wheelDelta;
    if (delta) {
        delta = event.deltaY || event.detail || 0;
        normalized = delta % 120 == 0 ? delta / 120 : delta / 120;
    } else {
        normalized = delta % 120 == 0 ? delta / 120 : delta / 120;
    }
    scroller_1.speed += normalized * scroller_1.wheelMultiplier;
    scroller_2.speed += normalized * scroller_2.wheelMultiplier;
    scroller_3.speed += normalized * scroller_3.wheelMultiplier;
    scroller_4.speed += normalized * scroller_4.wheelMultiplier;


}
