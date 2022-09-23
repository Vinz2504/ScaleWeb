console.log('Hello World!');
let navbar = document.querySelector('.nav-bar'),
  headingFooter1 = document.querySelector('.header-footer-1'),
  headingFooter2 = document.querySelector('.heading-footer-2'),
  headingFooter3 = document.querySelector('.heading-footer-3'),
  headingFooter4 = document.querySelector('.heading-footer-4'),
  footerList1 = document.querySelector('.footer-list-1'),
  footerList2 = document.querySelector('.footer-list-2'),
  footerList3 = document.querySelector('.footer-list-3'),
  footerList4 = document.querySelector('.footer-list-4'),
  navmenu = document.querySelector('.nav-menu'),
  navIcon = document.querySelector('.nav-bar__line-mid');
navbar.onclick = function() {
  navbar.classList.toggle('on');
  navIcon.classList.toggle('on');
  navmenu.classList.toggle('active');
}
headingFooter1.onclick = function() {
  footerList1.classList.toggle('on');
};
headingFooter2.onclick = function() {
  footerList2.classList.toggle('on');
};
headingFooter3.onclick = function() {
  footerList3.classList.toggle('on');
};
headingFooter4.onclick = function() {
  footerList4.classList.toggle('on');
};
let bottTom = document.querySelector('.bottom-header');
window.onscroll = function() {myFunction(), imgFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 540) {
    bottTom.classList.add('test');
  } else {
    bottTom.classList.remove('test')
  }
}
let imgTrans = document.querySelector('.scale-fast-img__img');
function imgFunction() {
if (document.documentElement.scrollTop > 5596 && document.documentElement.scrollTop < 6443){
    imgTrans.classList.add('active');
  } else {
    imgTrans.classList.remove('active');
  }
}
/*window.addEventListener("scroll", function(event) {

  var scroll_y = this.scrollY;
  var scroll_x = this.scrollX;
  var a = scroll_y - scroll_y;
  console.log(scroll_y);
  6010
  6443
});
*/
