var cp=0
var up=0
var rock="rock",paper="paper",sizzer="sizzer";

function userSelection(selection) {

  document.querySelector(".rock").classList.remove("hc");
  document.querySelector(".rock").classList.remove("chc");
  document.querySelector(".paper").classList.remove("hc");
  document.querySelector(".paper").classList.remove("chc");
  document.querySelector(".sizzer").classList.remove("hc");
  document.querySelector(".sizzer").classList.remove("chc");

  document.querySelector("."+selection).classList.add("hc");
  var rNumber= Math.floor((Math.random() * 3));
  var option=[
    "rock",
    "paper",
    "sizzer"
  ];
  document.querySelector("."+option[rNumber]).classList.add("chc");
  findWinner(option[rNumber],selection)
}

function findWinner(cs,us) {
  console.log(cs);
  console.log(us);
  if (cs==us) {
    console.log("no one wines");
    document.getElementById("uhappy").style.display = 'none';
    document.getElementById("chappy").style.display = 'none';
  } else if ((cs==rock && us==sizzer) || (cs==paper && us==rock) || (cs==sizzer && us==paper)) {
    console.log("computer wines");
    cp++;
    document.getElementById("cpScore").innerHTML=("computer points: " + cp);
    document.getElementById("uhappy").style.display = 'none';
    document.getElementById("chappy").style.display = 'block';
  } else {
    console.log("you win");
    up++;
    document.getElementById("upScore").innerHTML=("your points: " + up);
    document.getElementById("uhappy").style.display = 'block';
    document.getElementById("chappy").style.display = 'none';
  };
}
