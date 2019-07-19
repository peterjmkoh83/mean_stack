$(document).ready(function(){
   
   $.get("https://opentdb.com/api.php?amount=3&category=31&difficulty=easy&type=multiple", function(data) {
      
      manga = data.results
      
      var title = data.results[0].category
      $('#title').html(title);

      $('#card1').click(function() {
         $('#q1').html("<div><p>" + manga[0].question + "</p><p onclick='alert(str(WRONG))'> A:" + manga[0].incorrect_answers[0] + "</p><p class='wrong'> B:" + manga[0].incorrect_answers[1] + "</p><p class='right'> C:" + manga[0].correct_answer[0] + "</p><p class='wrong'> D:" + manga[0].incorrect_answers[2] + 
         "</p></div>" )
      });
      $('#card2').click(function() {
         $('#q2').html("<div><p>" + manga[1].question + "</p><p> A:" + manga[1].correct_answer + "</p><p> B:" + manga[1].incorrect_answers[2] + "</p><p> C:" + manga[1].incorrect_answers[1] + "</p><p> D:" + manga[1].incorrect_answers[0] + "</div></p>" )
      
      });

      $('#card3').click(function(){
         $('#q3').html("<div><p>" + manga[2].question + "</p><p> A:" + manga[2].correct_answer + "</p><p> B:" + manga[2].incorrect_answers[2] + "</p><p> C:" + manga[2].incorrect_answers[1] + "</p><p> D:" + manga[2].incorrect_answers[0] + "</div></p>")
      });

     
      

      
   });

  


});


