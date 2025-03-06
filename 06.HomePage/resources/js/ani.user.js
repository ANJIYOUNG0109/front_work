$(() => {
  // // nav 각각 내려오게 하기
  // $('.nav>li').mouseover(function() {
  //   $(this).children('.submenu').stop().slideDown();
  // })
  // $('.nav<li').mouseout(function() {
  //   $(this).children('.submenu').stop().slideUp();
  // });

  // nav 전체 내려오게 하기
  $('.nav').mouseover(function() {
    $('.submenu').stop().slideDown();
  })
  $('.nav').mouseover(function() {
    $('.submenu').stop().slideUp();
  });
})