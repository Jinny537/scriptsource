const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 어제 날짜 구하기
const init = () => {
  // 오늘 날짜 구하기
  let today = new Date();
  console.log(today); //Wed Mar 13 2024 12:41:42 GMT+0900 (한국 표준시)
  // 년,월,일 변수에 담기
  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  // 일-1
  let day = today.getDate() - 1;

  // 화면에 보여주기
  // 요소 찾은 후 value 변경
  txtYear.value = year;
  selMon.value = month;
  //   1~9월 : "0"+month => 01,02..
  //   1~9일 : "0"+day => 01,02..

  //   if (month < 10) {
  //     month = "0" + month;
  //   }
  //   if (day < 10) {
  //     day = "0" + day;
  //   }

  //   selMon.value = month;
  //   selDay.value = day;

  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

function show(movieCd) {
  console.log(movieCd);

  url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;

  // 영화한글 제목 : movieNm
  // 영화000000000영어 제목 : movieNmEn
  // 상영시간 : showTm
  // 감독 : directors
  // 배우 : actors

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then((data) => {
      let result = "";

      let movieInfo = data.movieInfoResult.movieInfo;
      let movieNm = movieInfo.movieNm;
      let movieNmEn = movieInfo.movieNmEn;
      let movieTm = movieInfo.movieTm;
      let directors = "";
      movieInfo.directors.forEach((director) => {
        directors += `${director.peoplNm}`;
      });
      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peoplNm}`;
      });

      result += `<ul>`;
      result += `<li> 영화제목 : ${movieNm}</li>`;
      result += `<li> 영어제목 : ${movieNmEn}</li>`;
      result += `<li> 상영시간 : ${movieTm}</li>`;
      result += `<li> 감독 : ${directors}</li>`;
      result += `<li> 출연배우 : ${actors}</li>`;
      result += `</ul>`;
    })
    .catch();
}

document.querySelector("button").addEventListener("click", () => {
  // 영화진흥위원회 사용자가 선택한 날짜의 박스 오피스 가져오기

  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  url += txtYear.value + selMon.value + selDay.value;
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error();

      return response.json();
    })
    .then((data) => {
      console.log(data);

      let boxofficeList = data.boxofficeResult.dailyBoxOfficeList;
      console.log(boxofficeList);

      boxofficeList.forEach((movie) => {
        // 순위
        // 1(즘감) : 파묘
        console.log(movie.rank);
        console.log(movie.rankInten);
        console.log(movie.movieNm);

        // 증감
        let rankInten = movie.rankInten;

        result += `${movie.rank} 위(`;
        if (rankInten > 0) {
          result += "^";
        } else if (rankInten < 0) {
          result += "";
        }
        result += `${movie.rankInten} ) : `;
        result += `<a href="#" oneclick='javascript:show(${movie.movieNm})'</a><br>`;
      });

      document.querySelector("#msg").innerHTML = result;
    })
    .catch(() => console.log("주소 확인"));
});
