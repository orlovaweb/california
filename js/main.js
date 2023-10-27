document.cookie = "user=John";
const slides = document.querySelectorAll('.slide');

for (const slide of slides) {

  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
// Defalt value date
const getCurrentDate = () => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
  const day = ('0' + currentDate.getDate()).slice(-2);
  const formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
}
const currentDay = getCurrentDate();
const inputDate = document.querySelector('.date')
inputDate.value = currentDay;
inputDate.min = currentDay;

// Burger menu
const burgerBtn = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-menu--active");
  headerMenu.classList.toggle("header__menu--active");
})

  // Cookies
  // function setCookie(name, value, days) {
  //   let expires = "";
  //   if (days) {
  //     let date = new Date();
  //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  //     expires = "; expires=" + date.toUTCString();
  //   }
  //   document.cookie = name + "=" + (value || "") + expires + "; path=/";
  // }

  // function getCookie(name) {
  //   let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  //   return matches ? decodeURIComponent(matches[1]) : undefined;
  // }


  // function checkCookies() {
  //   let cookieNote = document.getElementById('cookie_note');
  //   let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

  //   // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  //   if (!getCookie('cookies_policy')) {
  //     cookieNote.classList.add('show');
  //   }

  //   // При клике на кнопку устанавливаем куку cookies_policy на один год
  //   cookieBtnAccept.addEventListener('click', function () {
  //     setCookie('cookies_policy', 'true', 365);
  //     cookieNote.classList.remove('show');
  //   });
  // }

  // checkCookies();
  // document.cookie = "policy=true" + "=" + (value || "") + expires + "; path=/";
  // document.cookie = "cookiecook=no; path=/; expires=" + new Date.toUTCString();
  // document.cookie = "username=John Doe; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/";
  ; // обновляем только куки с именем 'user'
// alert(document.cookie);