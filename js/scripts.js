//back-end
var scorePlayerOne=[]
var scorePlayerTwo=[]

var rollDiceOne=()=>{
  var num = Math.floor((Math.random() * 6) + 1);
    if(num===1)
    {
      alert(num);
      addResultOne();
    }
    else
    {
      alert(num);
      scorePlayerOne.push(num);
      var show=document.getElementById("live1")
      show.innerHTML += "<li>"+num+"</li>";

    }

}
var rollDiceTwo=()=>{
  var num2 = Math.floor((Math.random() * 6) + 1);
    if(num2===1)
    {
      alert(num2);
      addResultTwo();
    }
    else
    {
      alert(num2);
      scorePlayerTwo.push(num2);
      var show2=document.getElementById("live2");
      show2.innerHTML += "<li>"+num2+"</li>";

    }

}
var addResultOne=()=>{
  var result= eval(scorePlayerOne.join('+'));
  if(result >100 || result===100)
  {
    alert("player1 won");
    document.getElementById("actualcount1").textContent="100";
    $(".buttonbox").hide();
    location.reload();
  }
  else if (result===undefined)
  {
    alert("you rolled a one");
  }
  else {
    document.getElementById("actualcount1").textContent=result
  }
}

var addResultTwo=()=>{
  var result2= eval(scorePlayerTwo.join('+'));
  if(result2 >100 || result2===100)
  {
    alert("player2 won");
    document.getElementById("actualcount2").textContent="100";
    $(".buttonbox").hide();
    location.reload();
  }
  else if (result2===undefined)
  {
    alert("you rolled a one");
  }
  else {
    document.getElementById("actualcount2").textContent=result2
  }
}


//front-end
