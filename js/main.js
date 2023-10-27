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
