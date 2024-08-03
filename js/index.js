// $(function() {
//   $('.hmb_button').click(function() {
//       $(this).toggleClass('active');

//       if ($(this).hasClass('active')) {
//           $('.hmb_menu').addClass('active');
//       } else {
//           $('.hmb_menu').removeClass('active');
//       }
//   });
// });

"use strict";

//ハンバーガーメニュー
document.querySelector('.hmb_button').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.hmb_menu').classList.toggle('active');
})

//モーダルウィンドウ
document.querySelectorAll('.modal_open img').forEach((img) =>{
  img.onclick = () =>{
    document.querySelector('.modal_bg').style.display = 'block';
    document.querySelector('.modal img').src = img.getAttribute('src');
  };
});

document.querySelector('.modal span').onclick = () =>{
    document.querySelector('.modal_bg').style.display = 'none';
  };

