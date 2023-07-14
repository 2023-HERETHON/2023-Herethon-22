// 모달용 jQuery

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
});

function getEachScore(Array) {
  var ratingDiv = $(".modal-content").children("#rating-div");

  for (var i = 0; i < ratingDiv.children().length; i++) {
    var eachScoreDiv = ratingDiv.children().eq(i);
    console.log(eachScoreDiv.attr("id"));

    var ratingText = eachScoreDiv.children(".rating-text");
    console.log(ratingText.children(".rating-text-title").text());
    ratingText.children(".score").text(`${Array[i]}점`);

    //score에 맞게 별점 채우기
    var form = eachScoreDiv.children("#star-rating-form");
    var fieldset = form.children("fieldset");
  }
}

$(".close-btn").click(function () {
  $(".modal").fadeOut();
  $(".safety-modal").fadeOut();
});

//별에 마우스 오버시 별 색이 채워짐
// $("label").hover(
//   function () {
//     $(this).find("img").attr("src", "media/icFilledStar.png");
//     $(this).prevAll().find("img").attr("src", "media/icFilledStar.png");
//     $(this).nextAll().find("img").attr("src", "media/icEmptyStar.png");
//   },
//   function () {
//     $(this).find("img").attr("src", "media/icEmptyStar.png");
//   }
// );

// //별 클릭시 클릭된 별의 value가 점수로 표시됨
// $("input[name='star']").change(function () {
//   var score = $("input[name='star']:checked").val();

//   var form = $(this).parent().parent();
//   var scoreSpan = form.prev().children().last();

//   scoreSpan.html(`${score}점`);
// });
