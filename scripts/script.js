// test
alert('aaaaaaa');

let touch_up = 0;
let touch_down = 0;
let touch_path = 0;



function point_down() {
  console.log('Произошло нажатие');
}


window.addEventListener('touchstart', point_down);
