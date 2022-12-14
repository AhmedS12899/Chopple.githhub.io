const db1 = [
  {
      "name": "Nico Robin",
      "affliation": "pirate",
      "occupation": "doctor",
      "devilfruit": true,
      "height": 188,
      "gender": "female",
      "bounty": 930000000
  },
  {
      "name": "Monkey D. Luffy",
      "affliation": "pirate",
      "occupation": "captain",
      "devilfruit": true,
      "height": 174,
      "gender": "male",
      "bounty": 3000000000
  },
  {
      "name": "Roronoa Zoro",
      "affliation": "pirate",
      "occupation": "swordsmen",
      "devilfruit": false,
      "height": 178,
      "gender": "male",
      "bounty":1111000000
  },
  {
      "name": "Monkey D. Garp",
      "affliation": "marine",
      "occupation": "vice admiral",
      "devilfruit": false,
      "height": 287,
      "gender": "male",
      "bounty": 0
  },
  {
      "name": "Gol D. Roger",
      "affliation": "pirate",
      "occupation": "captain",
      "devilfruit": false,
      "height": 274,
      "gender": "male",
      "bounty": 5564800000
  },
  {
      "name": "Koby",
      "affliation": "marine",
      "occupation": "marine captain",
      "devilfruit": false,
      "height": 167,
      "gender": "male",
      "bounty": 0
  }
]
const aL = ["Nico Robin", "Monkey D. Luffy", "Roronoa Zoro", "Monkey D. Garp", "Gol D. Roger", "Koby" ]

const myInput = document.querySelector('.myInput2');
const check = document.querySelector('.check');
const butt = document.querySelector('.butt');
const butt2 = document.querySelector('.butt2');
var score = 6;
var win = 0;
const win_score = "win";
var lose = 0;
const lose_score = "lose";
var avg = 0;
const average = "average";
var random = Math.floor(Math.random() * aL.length);
var answer = aL[random]; //Gives the answer if you really want to check console however after project is graded we will remove it.
var x = document.getElementById("myTable").rows[0].cells;
var x1 = document.getElementById("myTable").rows[1].cells;
var x2 = document.getElementById("myTable").rows[2].cells;
var x3 = document.getElementById("myTable").rows[3].cells;
var x4 = document.getElementById("myTable").rows[4].cells;
var x5 = document.getElementById("myTable").rows[5].cells;
var x6 = document.getElementById("myTable").rows[6].cells;
var x7 = document.getElementById("myTable").rows[7].cells;
var berry = document.getElementById('berry');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
console.log(answer);

check.addEventListener('click', function () {
  const an = db1.find((names) => names.name === myInput.value);//Users answer 
  const realan = db1.find((names) => names.name === answer);//Actual answer
  var h1 = realan.height - 10;
  var h2 = realan.height + 10;
  

  if(myInput.value === ""){
    if(score ===6){
      document.querySelector(".r1").style.opacity = "0";
    }
    if(score ===5){
      document.querySelector(".r2").style.opacity = "0";
    }
    if(score ===4){
      document.querySelector(".r3").style.opacity = "0";
    }
    if(score ===3){
      document.querySelector(".r4").style.opacity = "0";
    }
    if(score ===2){
      document.querySelector(".r5").style.opacity = "0";
    }
    if(score ===1){
      document.querySelector(".r6").style.opacity = "0";
    }   
  }
  else if ((myInput.value) === aL[random]) {//If user guesses correctly it will label field green and win screen will pop up.
    win++;
    localStorage.setItem(win_score, win);
    document.querySelector('.info').textContent = an.name;
    document.querySelector('.win').style.display = "inline"
    document.querySelector(".autocomplete").style.display = "none";
    document.querySelector(".check").style.display = "none";
    if(score ===6){
      document.querySelector(".r1").style.opacity = "1";
      x1[0].innerHTML = an.name;
      if(an.name === realan.name){
        x1[0].style.backgroundColor = "#538d4e"
      }
      x1[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x1[1].style.backgroundColor = "#538d4e"
        }

      x1[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x1[2].style.backgroundColor = "#538d4e";
        }
      x1[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x1[3].style.backgroundColor = "#538d4e";
        }

      x1[4].innerHTML = an.height;
        if(an.height === realan.height){
          x1[4].style.backgroundColor = "#538d4e";
        } 
      x1[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x1[5].style.backgroundColor = "#538d4e"
      }
      x1[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x1[6].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===5){
      document.querySelector(".r2").style.opacity = "1";
      x2[0].innerHTML = an.name;
        if(an.name === realan.name){
          x2[0].style.backgroundColor = "#538d4e"
        }
      x2[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x2[1].style.backgroundColor = "#538d4e"
        }

      x2[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x2[2].style.backgroundColor = "#538d4e";
        }
      x2[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x2[3].style.backgroundColor = "#538d4e";
        }

      x2[4].innerHTML = an.height;
        if(an.height === realan.height){
          x2[4].style.backgroundColor = "#538d4e";
        } 
      x2[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x2[5].style.backgroundColor = "#538d4e"
      }
      x2[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x2[6].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===4){
      document.querySelector(".r3").style.opacity = "1";
      x3[0].innerHTML = an.name;
      if(an.name === realan.name){
        x3[0].style.backgroundColor = "#538d4e"
      }
      x3[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x3[1].style.backgroundColor = "#538d4e"
        }

      x3[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x3[2].style.backgroundColor = "#538d4e";
        }
      x3[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x3[3].style.backgroundColor = "#538d4e";
        }

      x3[4].innerHTML = an.height;
        if(an.height === realan.height){
          x3[4].style.backgroundColor = "#538d4e";
        } 
      x3[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x3[5].style.backgroundColor = "#538d4e"
      }
      x3[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x3[6].style.backgroundColor = "#538d4e"
      }
    }
    
    if(score ===3){
      document.querySelector(".r4").style.opacity = "1";
      x4[0].innerHTML = an.name;
      if(an.name === realan.name){
        x4[0].style.backgroundColor = "#538d4e"
      }
      x4[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x4[1].style.backgroundColor = "#538d4e"
        }

      x4[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x4[2].style.backgroundColor = "#538d4e";
        }
      x4[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x4[3].style.backgroundColor = "#538d4e";
        }

      x4[4].innerHTML = an.height;
        if(an.height === realan.height){
          x4[4].style.backgroundColor = "#538d4e";
        } 
      x4[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x4[5].style.backgroundColor = "#538d4e"
      }
      x4[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x4[6].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===2){
      document.querySelector(".r5").style.opacity = "1";
      x5[0].innerHTML = an.name;
      if(an.name === realan.name){
        x5[0].style.backgroundColor = "#538d4e"
      }
      x5[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x5[1].style.backgroundColor = "#538d4e"
        }

      x5[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x5[2].style.backgroundColor = "#538d4e";
        }
      x5[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x5[3].style.backgroundColor = "#538d4e";
        }

      x5[4].innerHTML = an.height;
        if(an.height === realan.height){
          x5[4].style.backgroundColor = "#538d4e";
        } 
      x5[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x5[5].style.backgroundColor = "#538d4e"
      }
      x5[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x5[6].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===1){
      document.querySelector(".r6").style.opacity = "1";
      x6[0].innerHTML = an.name;
      if(an.name === realan.name){
        x6[0].style.backgroundColor = "#538d4e"
      }
      x6[1].innerHTML = an.affliation;
        if(an.affliation === realan.affliation){
          x6[1].style.backgroundColor = "#538d4e"
        }

      x6[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x6[2].style.backgroundColor = "#538d4e";
        }
      x6[3].innerHTML = an.devilfruit;
        if(an.devilfruit === realan.devilfruit){
          x6[3].style.backgroundColor = "#538d4e";
        }

      x6[4].innerHTML = an.height;
        if(an.height === realan.height){
          x6[4].style.backgroundColor = "#538d4e";
        } 
      x6[5].innerHTML = an.gender;
      if(an.gender === realan.gender){
        x6[5].style.backgroundColor = "#538d4e"
      }
      x6[6].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x6[6].style.backgroundColor = "#538d4e"
      }
    }
    
  }

  else if((myInput.value) != aL[random]){//If user has an incorrect guess it will check which fields are correct.
      if(score ===6){
        document.querySelector(".r1").style.opacity = "1";
        x1[0].innerHTML = an.name;
          
        x1[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x1[1].style.backgroundColor = "#538d4e";
          }else{
            x1[1].style.backgroundColor = "--white";
          }

        x1[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x1[2].style.backgroundColor = "#538d4e";
          }else{
            x1[2].style.backgroundColor = "--white";
          }
        x1[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x1[3].style.backgroundColor = "#538d4e";
          }else{
            x1[3].style.backgroundColor = "--white";
          }

        x1[4].innerHTML = an.height;
          if(an.height === realan.height){
            x1[4].style.backgroundColor = "#538d4e";
          } 
          if ( (h1 <= an.height) && (an.height <= h2)){
            x1[4].style.backgroundColor = "#b59f3b";
          }
          if ((an.height < h1) || (h2 < an.height)){
            x1[4].style.backgroundColor = "--white";
          }
        x1[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x1[5].style.backgroundColor = "#538d4e";
        } else{
          x1[5].style.backgroundColor = "--white";
        }
        x1[6].innerHTML = an.bounty;

        if(an.bounty === realan.bounty){
          x1[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x1[6].style.backgroundColor = "--close";
        }else {
          x1[6].style.backgroundColor = "--white";
        }
      }

      if(score ===5){
        document.querySelector(".r2").style.opacity = "1";
        x2[0].innerHTML = an.name;

        x2[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x2[1].style.backgroundColor = "#538d4e"
          } else{
            x2[1].style.backgroundColor = "--white";
          }

        x2[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x2[2].style.backgroundColor = "#538d4e";
          } else{
            x2[2].style.backgroundColor = "--white"
          }
        x2[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x2[3].style.backgroundColor = "#538d4e";
          }else{
            x2[3].style.backgroundColor = "--white"
          }

        x2[4].innerHTML = an.height;
        if(an.height === realan.height){
          x2[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x2[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x2[4].style.backgroundColor = "--white";
        }
        x2[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x2[5].style.backgroundColor = "#538d4e"
        }else{
          x2[5].style.backgroundColor = "--white"
        }

        x2[6].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x2[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x2[6].style.backgroundColor = "--close";
        }else {
          x2[6].style.backgroundColor = "--white";
        }
      }

      if(score ===4){
        document.querySelector(".r3").style.opacity = "1";
        x3[0].innerHTML = an.name;

        x3[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x3[1].style.backgroundColor = "#538d4e"
          } else{
            x3[1].style.backgroundColor = "--white"
          }

        x3[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x3[2].style.backgroundColor = "#538d4e";
          } else{
            x3[2].style.backgroundColor = "--white"
          }
        x3[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x3[3].style.backgroundColor = "#538d4e";
          } else{
            x3[3].style.backgroundColor = "--white"
          }

        x3[4].innerHTML = an.height;
        if(an.height === realan.height){
          x3[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x3[4].style.backgroundColor = "#b59f3b";// WHY DOES IT KEEP COMING UP YELLOW ??? THE IF STATEMENT ???
        }
        if ((an.height < h1) || (h2 < an.height)){
          x3[4].style.backgroundColor = "--white";
        }
        x3[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x3[5].style.backgroundColor = "#538d4e"
        } else{
          x3[5].style.backgroundColor = "--white"
        }

        x3[6].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x3[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x3[6].style.backgroundColor = "--close";
        }else {
          x3[6].style.backgroundColor = "--white";
        }
      }
      
      if(score ===3){
        document.querySelector(".r4").style.opacity = "1";
        x4[0].innerHTML = an.name;

        x4[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x4[1].style.backgroundColor = "#538d4e"
          } else{
            x4[1].style.backgroundColor = "--white"
          }

        x4[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x4[2].style.backgroundColor = "#538d4e";
          } else{
            x4[2].style.backgroundColor = "--white"
          }
        x4[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x4[3].style.backgroundColor = "#538d4e";
          } else{
            x4[3].style.backgroundColor = "--white"
          }

        x4[4].innerHTML = an.height;
        if(an.height === realan.height){
          x4[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x4[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x4[4].style.backgroundColor = "--white";
        }
        x4[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x4[5].style.backgroundColor = "#538d4e"
        } else{
          x4[5].style.backgroundColor = "--white"
        }
        x4[6].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x4[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x4[6].style.backgroundColor = "--close";
        }else {
          x4[6].style.backgroundColor = "--white";
        }
      }

      if(score ===2){
        document.querySelector(".r5").style.opacity = "1";
        x5[0].innerHTML = an.name;

        x5[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x5[1].style.backgroundColor = "#538d4e"
          } else{
            x5[1].style.backgroundColor = "--white"
          }

        x5[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x5[2].style.backgroundColor = "#538d4e";
          } else{
            x5[2].style.backgroundColor = "--white"
          }
        x5[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x5[3].style.backgroundColor = "#538d4e";
          } else{
            x5[3].style.backgroundColor = "--white"
          }

        x5[4].innerHTML = an.height;
        if(an.height === realan.height){
          x5[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x5[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x5[4].style.backgroundColor = "--white";
        }
        x5[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x5[5].style.backgroundColor = "#538d4e"
        } else{
          x5[5].style.backgroundColor = "--white"
        }
        x5[6].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x5[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x5[6].style.backgroundColor = "--close";
        }else {
          x5[6].style.backgroundColor = "--white";
        }
      }

      if(score ===1){
        document.querySelector(".r6").style.opacity = "1";
        x6[0].innerHTML = an.name;

        x6[1].innerHTML = an.affliation;
          if(an.affliation === realan.affliation){
            x6[1].style.backgroundColor = "#538d4e"
          } else{
            x6[1].style.backgroundColor = "--white"
          }

        x6[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x6[2].style.backgroundColor = "#538d4e";
          } else{
            x6[2].style.backgroundColor = "--white"
          }
        x6[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x6[3].style.backgroundColor = "#538d4e";
          } else{
            x6[3].style.backgroundColor = "--white"
          }

        x6[4].innerHTML = an.height;
        if(an.height === realan.height){
          x6[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x6[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x6[4].style.backgroundColor = "--white";
        }
        x6[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x6[5].style.backgroundColor = "#538d4e"
        } else{
          x6[5].style.backgroundColor = "--white"
        }
        x6[6].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x6[6].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x6[6].style.backgroundColor = "--close";
        }else {
          x6[6].style.backgroundColor = "--white";
        }
      }

      score--;
  }

  if(score === 0){ //When you lose the lose screen pops up.
    //document.querySelector('.info2').textContent = an.name;
    lose++;
    localStorage.setItem(lose_score, lose);
    document.querySelector('.info2').textContent = realan.name;
    document.querySelector('.lose').style.display = "inline"
    document.querySelector(".autocomplete").style.display = "none";
    document.querySelector(".check").style.display = "none";
  }
  myInput.value = "";
});

function autocomplete(inp, arr) {//Function for the autocompleting search bar.
  var cf = 0;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      
      closeLists();
      if (!val) { return false;}
      cf = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        cf++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        cf--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (cf > -1) {
          if (x) x[cf].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (cf >= x.length) cf = 0;
    if (cf < 0) cf = (x.length - 1);
    x[cf].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeLists(elmnt) {//After the choice is clicked the list will close and show the element.
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeLists(e.target);
});
}

autocomplete(document.getElementById("myInput"), aL);

//Darkmode screen, also swaps Chopple title.
var img1 = document.getElementById('myImage');
var img2 = document.getElementById('myImage2');
function dm() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if((img1.style.display="inline") && (img2.style.display="none")){
    img1.style.display = "none";
    img2.style.display ="inline";
  }
  
}

function dm2() {//This bring it back to lightmode.
  var element = document.body;
  element.classList.toggle("dark-mode");
  if((img1.style.display="none") && (img2.style.display="inline")){
    img2.style.display = "none";
    img1.style.display = "inline";
  }
}

//Modal Box for instructions & stats.
//Instruct Modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

//Instructions Modal.
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

//Close Button.
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

//Instructions window open and close.
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Stat Modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    var scoreStr1 = localStorage.getItem(win_score); //Stores win score.
    if (scoreStr1 == null) {
      win = 0;
    } else {
      win = parseInt(scoreStr1);
    }
    document.querySelector('.pc1').textContent = " " + win;

   
    
    var scoreStr2 = localStorage.getItem(lose_score);//Stores lose score.
    if (scoreStr2 == null) {
      lose = 0;
    } else {
      lose = parseInt(scoreStr2);
    }
    document.querySelector('.pc2').textContent = " " + lose;
    avg = (win / (win+lose)).toFixed(2); //Average score.
    document.querySelector('.pc3').textContent = " " + avg;
    const modal2 = document.querySelector("modal2")
    openModal(modal2)
  })
  
})

//Stats window open and close.
overlay.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal.active')
  modals2.forEach(modal2 => {
    closeModal(modal2)
  })
})

//Close Button.
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal2)
  })
})

function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay.classList.add('active')
  
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay.classList.remove('active')
}

//Reset Button
butt.addEventListener('click', function () {
  
  document.querySelector('.win').style.display = "none"
  score =6;
  random = Math.floor(Math.random() * aL.length);
  answer = aL[random];
  console.log(answer);
  document.querySelector(".r1").style.opacity = "0";
  x1[0].style= "--white";
  x1[0].innerHTML = "";
  x1[1].style= "--white";
  x1[1].innerHTML = "";
  x1[2].style = "--white";
  x1[2].innerHTML = "";
  x1[3].style = "--white";
  x1[3].innerHTML = "";
  x1[4].style = "--white";
  x1[4].innerHTML = "";
  x1[5].style= "--white";
  x1[5].innerHTML = "";

  document.querySelector(".r2").style.opacity = "0";
  x2[0].style= "--white";
  x2[0].innerHTML = "";
  x2[1].style= "--white";
  x2[1].innerHTML = "";
  x2[2].style = "--white";
  x2[2].innerHTML = "";
  x2[3].style = "--white";
  x2[3].innerHTML = "";
  x2[4].style = "--white";
  x2[4].innerHTML = "";
  x2[5].style= "--white";
  x2[5].innerHTML = "";

  document.querySelector(".r3").style.opacity = "0";
  x3[0].style= "--white";
  x3[0].innerHTML = "";
  x3[1].style= "--white";
  x3[1].innerHTML = "";
  x3[2].style = "--white";
  x3[2].innerHTML = "";
  x3[3].style = "--white";
  x3[3].innerHTML = "";
  x3[4].style = "--white";
  x3[4].innerHTML = "";
  x3[5].style= "--white";
  x3[5].innerHTML = "";

  document.querySelector(".r4").style.opacity = "0";
  x4[0].style= "--white";
  x4[0].innerHTML = "";
  x4[1].style= "--white";
  x4[1].innerHTML = "";
  x4[2].style = "--white";
  x4[2].innerHTML = "";
  x4[3].style = "--white";
  x4[3].innerHTML = "";
  x4[4].style = "--white";
  x4[4].innerHTML = "";
  x4[5].style= "--white";
  x4[5].innerHTML = "";

  document.querySelector(".r5").style.opacity = "0";
  x5[0].style= "--white";
  x5[0].innerHTML = "";
  x5[1].style= "--white";
  x5[1].innerHTML = "";
  x5[2].style = "--white";
  x5[2].innerHTML = "";
  x5[3].style = "--white";
  x5[3].innerHTML = "";
  x5[4].style = "--white";
  x5[4].innerHTML = "";
  x5[5].style= "--white";
  x5[5].innerHTML = "";

  document.querySelector(".r6").style.opacity = "0";
  x6[0].style= "--white";
  x6[0].innerHTML = "";
  x6[1].style= "--white";
  x6[1].innerHTML = "";
  x6[2].style = "--white";
  x6[2].innerHTML = "";
  x6[3].style = "--white";
  x6[3].innerHTML = "";
  x6[4].style = "--white";
  x6[4].innerHTML = "";
  x6[5].style= "--white";
  x6[5].innerHTML = "";

  document.querySelector(".autocomplete").style.display = "inline-block";
  document.querySelector(".check").style.display = "inline-block";
});

butt2.addEventListener('click', function () {
  document.querySelector('.lose').style.display = "none"
  score =6;
  random = Math.floor(Math.random() * aL.length);
  answer = aL[random];
  console.log(answer);
  document.querySelector(".r1").style.opacity = "0";
  x1[0].style= "--white";
  x1[0].innerHTML = "";
  x1[1].style= "--white";
  x1[1].innerHTML = "";
  x1[2].style = "--white";
  x1[2].innerHTML = "";
  x1[3].style = "--white";
  x1[3].innerHTML = "";
  x1[4].style = "--white";
  x1[4].innerHTML = "";
  x1[5].style= "--white";
  x1[5].innerHTML = "";

  document.querySelector(".r2").style.opacity = "0";
  x2[0].style= "--white";
  x2[0].innerHTML = "";
  x2[1].style= "--white";
  x2[1].innerHTML = "";
  x2[2].style = "--white";
  x2[2].innerHTML = "";
  x2[3].style = "--white";
  x2[3].innerHTML = "";
  x2[4].style = "--white";
  x2[4].innerHTML = "";
  x2[5].style= "--white";
  x2[5].innerHTML = "";

  document.querySelector(".r3").style.opacity = "0";
  x3[0].style= "--white";
  x3[0].innerHTML = "";
  x3[1].style= "--white";
  x3[1].innerHTML = "";
  x3[2].style = "--white";
  x3[2].innerHTML = "";
  x3[3].style = "--white";
  x3[3].innerHTML = "";
  x3[4].style = "--white";
  x3[4].innerHTML = "";
  x3[5].style= "--white";
  x3[5].innerHTML = "";

  document.querySelector(".r4").style.opacity = "0";
  x4[0].style= "--white";
  x4[0].innerHTML = "";
  x4[1].style= "--white";
  x4[1].innerHTML = "";
  x4[2].style = "--white";
  x4[2].innerHTML = "";
  x4[3].style = "--white";
  x4[3].innerHTML = "";
  x4[4].style = "--white";
  x4[4].innerHTML = "";
  x4[5].style= "--white";
  x4[5].innerHTML = "";

  document.querySelector(".r5").style.opacity = "0";
  x5[0].style= "--white";
  x5[0].innerHTML = "";
  x5[1].style= "--white";
  x5[1].innerHTML = "";
  x5[2].style = "--white";
  x5[2].innerHTML = "";
  x5[3].style = "--white";
  x5[3].innerHTML = "";
  x5[4].style = "--white";
  x5[4].innerHTML = "";
  x5[5].style= "--white";
  x5[5].innerHTML = "";

  document.querySelector(".r6").style.opacity = "0";
  x6[0].style= "--white";
  x6[0].innerHTML = "";
  x6[1].style= "--white";
  x6[1].innerHTML = "";
  x6[2].style = "--white";
  x6[2].innerHTML = "";
  x6[3].style = "--white";
  x6[3].innerHTML = "";
  x6[4].style = "--white";
  x6[4].innerHTML = "";
  x6[5].style= "--white";
  x6[5].innerHTML = "";

  document.querySelector(".autocomplete").style.display = "inline-block";
  document.querySelector(".check").style.display = "inline-block";
});
