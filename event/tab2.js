// tab.js 수정

// 세개의 li, div 찾기 : querySelectorAll
const allLi = document.querySelectorAll("tab-button");
const alldiv = document.querySelectorAll("tab-content");

allLi.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 모든 Li 에 orange 클래스명 제거
    allLi.forEach((item) => {
      item.classList.remove("orange");
    });

    // 현재 이벤트가 일어난 Li orange 클래스명 추가
    e.target.classList.add("orange");

    // 다른 div 의 show 제거
    alldiv.forEach((item) => {
      item.classList.remove("show");
    });
    // 현재 이벤트가 일어난 li 와 순서가  일치하는  div show 추가
    alldiv[idx].classList.add("show");
  });
});

// firstLi.addEventListener("click", () => {
//   secondLi.classList.remove("orange");
//   thirdLi.classList.remove("orange");

//   firstLi.classList.add("orange");

//   // 다른 div 에 show 클래스명 제거
//   div2.classList.remove("show");
//   div3.classList.remove("show");

//   // 첫번재 div show 추가
//   div1.classList.add("show");
// });
// secondLi.addEventListener("click", () => {
//   // 다른 Li 에 orange 클래스명 제거
//   firstLi.classList.remove("orange");
//   thirdLi.classList.remove("orange");
//   // secondLi orange 클래스명 추가
//   secondLi.classList.add("orange");

//   // 다른 div 에 show 클래스명 제거
//   div1.classList.remove("show");
//   div3.classList.remove("show");

//   // 두번쨰 div show 추가
//   div2.classList.add("show");
// });
// thirdLi.addEventListener("click", () => {
//   // 다른 Li 에 orange 클래스명 제거
//   firstLi.classList.remove("orange");
//   secondLi.classList.remove("orange");
//   // thirdLi orange 클래스명 추가
//   thirdLi.classList.add("orange");

//   // 다른 div 에 show 클래스명 제거
//   div1.classList.remove("show");
//   div2.classList.remove("show");

//   // 세번째 div show 추가
//   div3.classList.add("show");
// });
