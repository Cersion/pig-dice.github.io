//back-end
var scorePlayerOne=[]
var scorrePlayerTwo=[]

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
      addResultOne();
    }
    else
    {
      alert(num2);
      scorePlayerOne.push(num2);
      var show2=document.getElementById("live2")
      show2.innerHTML += "<li>"+num2+"</li>";

    }

}


//front-end
