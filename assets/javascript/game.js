$('.Random').each(function () {
    var x = Math.floor((Math.random() * 84) + 19);
    $(this).text(x)
  });

  $('#randomNumber').text(Random);

  var num1= Math.floor(Math.random()*19+1)
    var num2= Math.floor(Math.random()*19+1)
    var num3= Math.floor(Math.random()*19+1)
    var num4= Math.floor(Math.random()*19+1)

    var winsAndLosses= 0; 
    var wins= 0;
    var losses = 0;

    $('#winNum').text(wins);
  $('#lossNum').text(losses);

  function reset(){


    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*19+1);
    num2= Math.floor(Math.random()*19+1);
    num3= Math.floor(Math.random()*19+1);
    num4= Math.floor(Math.random()*19+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 

    function winner(){
      alert("Wow, you actually won");
        wins++; 
        $('#winNum').text(wins);
        reset();
      }
      function loser(){
        alert ("That's what I thought, loser");
          losses++;
          $('#lossNum').text(losses);
          reset()
      }

          if (winsAndLosses == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })   $('#1').on ('click', function(){
      userTotal = winsAndLosses + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#2').on ('click', function(){
      userTotal = winsAndLosses + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#3').on ('click', function(){
      userTotal = winsAndLosses + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#4').on ('click', function(){
      userTotal = winsAndLosses + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
      

        