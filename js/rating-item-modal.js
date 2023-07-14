//별에 마우스 오버시 별 색이 채워짐
$("label").hover(
  function () {
    $(this).find("img").attr("src", "media/icFilledStar.png");
    $(this).prevAll().find("img").attr("src", "media/icFilledStar.png");
    $(this).nextAll().find("img").attr("src", "media/icEmptyStar.png");

    var labelFor = $(this).attr("for");
    changeScore(labelFor);
  },

  function () {
    $(this).find("img").attr("src", "media/icEmptyStar.png");
    $("#my-score-value").text(`0점`);
  }
);

//별 클릭시 클릭된 별의 value가 점수로 표시됨
// $("input[name='star']").change(function () {
//   var score = $("input[name='star']:checked").val();

//   var span = $("#star-rating-form").next();
//   span.text(`${score}점`);
// });

function changeScore(String) {
  var fieldset = $("fieldset");
  var radioArray = new Array();

  for (var i = 0; i < fieldset.find("input").length; i++) {
    radioArray.push(fieldset.find("input").eq(i).attr("id"));

    if (String == radioArray[i]) {
      var score = fieldset.find("input").eq(i).attr("value");
      $("#my-score-value").text(`${score}점`);
    }
  }
}
