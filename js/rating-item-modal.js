//별에 마우스 오버시 별 색이 채워짐

$(document).ready(function () {
  // radio input click event
  $("input[name='star']").click(function () {
    var myScore = $("input[type='radio']:checked").attr("value");
    $("#my-score-value").text(`${myScore}점`);
    $("#my-score-data").text(myScore);

    var clickedLabel = $("input[type='radio']:checked").next();
    clickedLabel.find("img").attr("src", "media/icFilledStar.png");
    clickedLabel
      .prevAll("label")
      .find("img")
      .attr("src", "media/icFilledStar.png");
    clickedLabel
      .nextAll("label")
      .find("img")
      .attr("src", "media/icEmptyStar.png");
  });
});

// function saveMyScore() {}

// function hoverEvent() {
//   $("label").hover(
//     function () {
//       $(this).find("img").attr("src", "media/icFilledStar.png");
//       $(this).prevAll().find("img").attr("src", "media/icFilledStar.png");
//       $(this).nextAll().find("img").attr("src", "media/icEmptyStar.png");

//       var labelFor = $(this).attr("for");
//       changeScore(labelFor);
//     },

//     function () {
//       //아무데도 hover가 안됐을 떄
//       $(this).find("img").attr("src", "media/icEmptyStar.png");
//       $("#my-score-value").text(`0점`);
//       $("#my-score-data").text("0");
//     }
//   );
// }

// function changeScore(String) {
//   var fieldset = $("fieldset");
//   var radioArray = new Array();

//   for (var i = 0; i < fieldset.find("input").length; i++) {
//     radioArray.push(fieldset.find("input").eq(i).attr("id"));

//     if (String == radioArray[i]) {
//       var score = fieldset.find("input").eq(i).attr("value");
//       $("#my-score-value").text(`${score}점`);
//       $("my-score-data").text(score);
//     }
//   }
// }

// //별 클릭시 클릭된 별의 value가 점수로 표시됨
// // $("input[name='star']").change(function () {
// //   var score = $("input[name='star']:checked").val();

// //   var span = $("#star-rating-form").next();
// //   span.text(`${score}점`);
// // });

// // 클릭시 내평가 점수 저장
// function saveMyScore() {
//   $("input[name='star']").click(function () {
//     var myScore = $(this).attr("value");
//     $("#score-data").text(myScore);
//     console.log(myScore);
//   });
// }
