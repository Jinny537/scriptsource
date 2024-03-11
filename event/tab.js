// orange
// li 클릭 시 orange 클래스랑 움직이기

// show
// 첫번째 li 클릭 시 첫번때 div 보여주기

const firstLi = document.querySelector(".list li:first-child");
const secondLi = document.querySelector(".list li:nth-child(2");
const thirdLi = document.querySelector(".list li:last-child");
const div1 = document.querySelector(".container div:nth-child(2)");
const div2 = document.querySelector(".container div:nth-child(3)");
const div3 = document.querySelector(".container div:nth-child(4)");

firstLi.addEventListener("click", () => {
  // 다른 Li 에 orange 클래스명 제거
  secondLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  // firstLi orange 클래스명 추가
  firstLi.classList.add("orange");

  // 다른 div 에 show 클래스명 제거
  div2.classList.remove("show");
  div3.classList.remove("show");

  // 첫번재 div show 추가
  div1.classList.add("show");
});
secondLi.addEventListener("click", () => {
  // 다른 Li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  thirdLi.classList.remove("orange");
  // secondLi orange 클래스명 추가
  secondLi.classList.add("orange");

  // 다른 div 에 show 클래스명 제거
  div1.classList.remove("show");
  div3.classList.remove("show");

  // 두번쨰 div show 추가
  div2.classList.add("show");
});
thirdLi.addEventListener("click", () => {
  // 다른 Li 에 orange 클래스명 제거
  firstLi.classList.remove("orange");
  secondLi.classList.remove("orange");
  // thirdLi orange 클래스명 추가
  thirdLi.classList.add("orange");

  // 다른 div 에 show 클래스명 제거
  div1.classList.remove("show");
  div2.classList.remove("show");

  // 세번째 div show 추가
  div3.classList.add("show");
});
