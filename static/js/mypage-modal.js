// 모달용 jQuery

//닫기 버튼 이벤트
$(".close-btn").click(function () {
  $(".modal").fadeOut();
  $(".safety-modal").fadeOut();
});

//modal click 이벤트
$(".get-modal-btn").click(function () {
  //모달 띄움
  $(".modal").fadeIn();

  // 나라, 도시 이름 받아오기
  var cityDiv = $(this).parent();
  var country = cityDiv.children("#country").text();
  var city = cityDiv.children("#city").text();

  var header = $(".modal-content").children("#header");
  var headerText = header.children("#header-text");

  headerText.children("#modal-country").text(country);
  headerText.children("#modal-city").text(city);

  //사용자 스코어 받아오기
  var cityScoreDiv = cityDiv.children("#city-score");
  var scores = new Array();

  for (var i = 0; i < cityScoreDiv.children().length; i++) {
    scores.push(cityScoreDiv.children().eq(i).text());
  }

  //스코어 모달에 그려주기
  getEachScore(scores);
  //별에 마우스 오버시 별 색 바뀜
});

function getEachScore(Array) {
  var ratingDiv = $(".modal-content").children("#rating-div");

  for (var i = 0; i < ratingDiv.children().length; i++) {
    var eachScoreDiv = ratingDiv.children().eq(i);

    var ratingText = eachScoreDiv.children(".rating-text");
    ratingText.children(".score").text(`${Array[i]}점`);

    //score에 맞게 별점 채우기
    var form = eachScoreDiv.children("#star-rating-form");
    var radioValueArray = getRadioValueArray(form);

    if (Array[i] == radioValueArray[0]) {
      form
        .find("label")
        .eq(0)
        .find("img")
        .attr("src", "{% static 'media/icFilledStar.png' %}");
    } else if (Array[i] == radioValueArray[1]) {
      form
        .find("label")
        .eq(1)
        .find("img")
        .attr("src", "{% static 'media/icFilledStar.png' %}");
      form
        .find("label")
        .eq(1)
        .prevAll()
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
    } else if (Array[i] == radioValueArray[2]) {
      form
        .find("label")
        .eq(2)
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
      form
        .find("label")
        .eq(2)
        .prevAll()
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
    } else if (Array[i] == radioValueArray[3]) {
      form
        .find("label")
        .eq(3)
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
      form
        .find("label")
        .eq(3)
        .prevAll()
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
    } else if (Array[i] == radioValueArray[4]) {
      form
        .find("label")
        .eq(4)
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
      form
        .find("label")
        .eq(4)
        .prevAll()
        .find("img")
        .attr("src", "static/media/icFilledStar.png");
    }
  }
}

function getRadioValueArray(form) {
  var fieldset = form.children("fieldset");

  var radioValueArray = new Array();
  for (var i = 0; i < fieldset.find("input").length; i++) {
    radioValueArray.push(fieldset.find("input").eq(i).attr("value"));
  }

  return radioValueArray;
}

//별에 마우스 오버시 별 색이 채워짐

// $("label").hover(
//   function () {
//     $(this).find("img").attr("src", "media/icFilledStar.png");
//     $(this).prevAll().find("img").attr("src", "media/icFilledStar.png");
//     $(this).nextAll().find("img").attr("src", "media/icEmptyStar.png");
//   },
//   function () {
//     //마우스 오버가 어디에도 되지 않았을 때
//     $(this).find("img").attr("src", "media/icEmptyStar.png");
//   }
// );

// //별 클릭시 클릭된 별의 value가 점수로 표시됨
function changeScore() {}
