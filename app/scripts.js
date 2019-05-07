// delete after checking it works
// $("#submitBtn").on("click", function (event) {
//     event.preventDefault();
//     // Form validation
//     var valid = true;
//     if ($("#name").val() === "" || $("#photo").val() === "") {
//         valid = false;
//     }
//      else if (
//          $("#question1").val() === "blank" || 
//          $("#question2").val() === "blank" || 
//          $("#question3").val() === "blank" || 
//          $("#question4").val() === "blank" || 
//          $("#question5").val() === "blank" || 
//          $("#question6").val() === "blank" || 
//          $("#question7").val() === "blank" || 
//          $("#question8").val() === "blank" || 
//          $("#question9").val() === "blank" || 
//          $("#question10").val() === "blank") {
//         valid = false;
//     }
//     if (valid === true) {
//         var newUser = {
//             name: $("#name").val().trim(),
//             photo: $("#photo").val().trim(),
//             scores: [
//                 $("#question1").val(),
//                 $("#question2").val(),
//                 $("#question3").val(),
//                 $("#question4").val(),
//                 $("#question5").val(),
//                 $("#question6").val(),
//                 $("#question7").val(),
//                 $("#question8").val(),
//                 $("#question9").val(),
//                 $("#question10").val()
//             ]
//         };
//         var currentURL = window.location.origin;
//         // Ajax call for receiving response after POST req
//         $.post(currentURL + "/api/friends", newUser, function (data) {
//             $("#friend").text(data.name);
//             $("#friendPhoto").attr("src", data.photo);
//             $("#friendModal").modal("toggle");
//         });
//     } else {
//         // If a required field is missing, show alert
//         alert("Survey is incomplete!");
//     }
// });