const db1 = [
    {
        "name": "Nico Robin",
        "affliation": "pirate",
        "haircolor": "black",
        "devilfruit": true,
        "height": 188,
        "gender": "female"
    },
    {
        "name": "Monkey D. Luffy",
        "affliation": "pirate",
        "haircolor": "black",
        "devilfruit": true,
        "height": 174,
        "gender": "male"
    },
    {
        "name": "Roronoa Zoro",
        "affliation": "pirate",
        "haircolor": "black",
        "devilfruit": false,
        "height": 178,
        "gender": "male"
    },
    {
        "name": "Monkey D. Garp",
        "affliation": "marine",
        "haircolor": "grey",
        "devilfruit": false,
        "height": 287,
        "gender": "male"
    },
    {
        "name": "Gol D. Roger",
        "affliation": "pirate",
        "haircolor": "black",
        "devilfruit": false,
        "height": 274,
        "gender": "male"
    },
    {
        "name": "Koby",
        "affliation": "marine",
        "haircolor": "pink",
        "devilfruit": false,
        "height": 167,
        "gender": "male"
    }
]
const aL = ["Nico Robin", "Monkey D. Luffy", "Roronoa Zoro", "Monkey D. Garp", "Gol D. Roger", "Koby" ]


const myInput = document.querySelector('.myInput2');
const check = document.querySelector('.check');
var score = 6;
var score2 = 0;
var random = Math.floor(Math.random() * aL.length);
var answer = aL[random];
var x = document.getElementById("myTable").rows[0].cells;
var x1 = document.getElementById("myTable").rows[1].cells;
var x2 = document.getElementById("myTable").rows[2].cells;
var x3 = document.getElementById("myTable").rows[3].cells;
var x4 = document.getElementById("myTable").rows[4].cells;
var x5 = document.getElementById("myTable").rows[5].cells;
var x6 = document.getElementById("myTable").rows[6].cells;
console.log(answer);

  check.addEventListener('click', function () {
    const an = db1.find((names) => names.name === myInput.value);
    const realan = db1.find((names) => names.name === answer);
    var h1 = realan.height - 10;
    var h2 = realan.height + 10;


    let regex = /[A-Z]/;
    if(!regex.test(myInput.value)) {
      console.log("First name should not have digits in it");
    }

    
    //colorscheme(an, realan);
    if ((myInput.value) === aL[random]) {//Need to make a win window. With a win streak.
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

        x1[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
            x1[2].style.backgroundColor = "#538d4e";
          }
        x1[3].innerHTML = an.devilfruit;
          if(an.devilfruit === realan.devilfruit){
            x1[3].style.backgroundColor = "#538d4e";
          }

        x1[4].innerHTML = an.height;
        console.log(an.height);
        console.log(realan.height);
          if(an.height === realan.height){
            x1[4].style.backgroundColor = "#538d4e";
          } 
        x1[5].innerHTML = an.gender;
        if(an.gender === realan.gender){
          x1[5].style.backgroundColor = "#538d4e"
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

        x2[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
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

        x3[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
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

        x4[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
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

        x5[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
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

        x6[2].innerHTML = an.haircolor;
          if(an.haircolor === realan.haircolor){
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
      }
    }
  
    
    if((myInput.value) != aL[random]){
        if(score ===6){
          document.querySelector(".r1").style.opacity = "1";
          x1[0].innerHTML = an.name;
          x1[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x1[1].style.backgroundColor = "#538d4e"
            }else{
              x1[1].style.backgroundColor = "#FFFFFF"
            }

          x1[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x1[2].style.backgroundColor = "#538d4e";
            }else{
              x1[2].style.backgroundColor = "#FFFFFF"
            }
          x1[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x1[3].style.backgroundColor = "#538d4e";
            }else{
              x1[3].style.backgroundColor = "#FFFFFF"
            }

          x1[4].innerHTML = an.height;
          console.log(an.height);
          console.log(realan.height);
            if(an.height === realan.height){
              x1[4].style.backgroundColor = "#538d4e";
            } 
            if ((h1) < an.height < (h2)){
              x1[4].style.backgroundColor = "#b59f3b";// WHY DOES IT KEEP COMING UP YELLOW ??? THE IF STATEMENT ???
            }else if ((h1) > an.height || an.height > (h2)){
              x1[4].style.backgroundColor = "#FFFFFF";
            }
          x1[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x1[5].style.backgroundColor = "#538d4e"
          } else{
            x1[5].style.backgroundColor = "#FFFFFF"
          }
        }

        if(score ===5){
          document.querySelector(".r2").style.opacity = "1";
          x2[0].innerHTML = an.name;
          x2[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x2[1].style.backgroundColor = "#538d4e"
            } else{
              x2[1].style.backgroundColor = "#FFFFFF"
            }

          x2[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x2[2].style.backgroundColor = "#538d4e";
            } else{
              x2[2].style.backgroundColor = "#FFFFFF"
            }
          x2[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x2[3].style.backgroundColor = "#538d4e";
            }else{
              x2[3].style.backgroundColor = "#FFFFFF"
            }

          x2[4].innerHTML = an.height;
            if(an.height === realan.height){
              x2[4].style.backgroundColor = "#538d4e";
            } 
            if ((an.height - 10) <= realan.height <= (10 + an.height)){
              x2[4].style.backgroundColor = "#b59f3b";
            }
          x2[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x2[5].style.backgroundColor = "#538d4e"
          }else{
            x2[5].style.backgroundColor = "#FFFFFF"
          }
        }

        if(score ===4){
          document.querySelector(".r3").style.opacity = "1";
          x3[0].innerHTML = an.name;
          x3[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x3[1].style.backgroundColor = "#538d4e"
            } else{
              x3[1].style.backgroundColor = "#FFFFFF"
            }

          x3[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x3[2].style.backgroundColor = "#538d4e";
            } else{
              x3[2].style.backgroundColor = "#FFFFFF"
            }
          x3[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x3[3].style.backgroundColor = "#538d4e";
            } else{
              x3[3].style.backgroundColor = "#FFFFFF"
            }

          x3[4].innerHTML = an.height;
            if(an.height === realan.height){
              x3[4].style.backgroundColor = "#538d4e";
            } 
            if ((an.height - 10) <= realan.height <= (10 + an.height)){
              x3[4].style.backgroundColor = "#b59f3b";
            } else{
              x3[4].style.backgroundColor = "#FFFFFF"
            }
          x3[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x3[5].style.backgroundColor = "#538d4e"
          } else{
            x3[5].style.backgroundColor = "#FFFFFF"
          }
        }
        
        if(score ===3){
          document.querySelector(".r4").style.opacity = "1";
          x4[0].innerHTML = an.name;
          x4[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x4[1].style.backgroundColor = "#538d4e"
            } else{
              x4[1].style.backgroundColor = "#FFFFFF"
            }

          x4[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x4[2].style.backgroundColor = "#538d4e";
            } else{
              x4[2].style.backgroundColor = "#FFFFFF"
            }
          x4[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x4[3].style.backgroundColor = "#538d4e";
            } else{
              x4[3].style.backgroundColor = "#FFFFFF"
            }

          x4[4].innerHTML = an.height;
            if(an.height === realan.height){
              x4[4].style.backgroundColor = "#538d4e";
            } 
            if ((an.height - 10) <= realan.height <= (10 + an.height)){
              x4[4].style.backgroundColor = "#b59f3b";
            } else{
              x4[4].style.backgroundColor = "#FFFFFF"
            }
          x4[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x4[5].style.backgroundColor = "#538d4e"
          } else{
            x4[5].style.backgroundColor = "#FFFFFF"
          }
        }

        if(score ===2){
          document.querySelector(".r5").style.opacity = "1";
          x5[0].innerHTML = an.name;
          x5[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x5[1].style.backgroundColor = "#538d4e"
            } else{
              x5[1].style.backgroundColor = "#FFFFFF"
            }

          x5[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x5[2].style.backgroundColor = "#538d4e";
            } else{
              x5[2].style.backgroundColor = "#FFFFFF"
            }
          x5[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x5[3].style.backgroundColor = "#538d4e";
            } else{
              x5[3].style.backgroundColor = "#FFFFFF"
            }

          x5[4].innerHTML = an.height;
            if(an.height === realan.height){
              x5[4].style.backgroundColor = "#538d4e";
            } 
            if ((an.height - 10) <= realan.height <= (10 + an.height)){
              x5[4].style.backgroundColor = "#b59f3b";
            } else{
              x5[4].style.backgroundColor = "#FFFFFF"
            }
          x5[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x5[5].style.backgroundColor = "#538d4e"
          } else{
            x5[5].style.backgroundColor = "#FFFFFF"
          }
        }

        if(score ===1){
          document.querySelector(".r6").style.opacity = "1";
          x6[0].innerHTML = an.name;
          x6[1].innerHTML = an.affliation;
            if(an.affliation === realan.affliation){
              x6[1].style.backgroundColor = "#538d4e"
            } else{
              x6[1].style.backgroundColor = "#FFFFFF"
            }

          x6[2].innerHTML = an.haircolor;
            if(an.haircolor === realan.haircolor){
              x6[2].style.backgroundColor = "#538d4e";
            } else{
              x6[2].style.backgroundColor = "#FFFFFF"
            }
          x6[3].innerHTML = an.devilfruit;
            if(an.devilfruit === realan.devilfruit){
              x6[3].style.backgroundColor = "#538d4e";
            } else{
              x6[3].style.backgroundColor = "#FFFFFF"
            }

          x6[4].innerHTML = an.height;
            if(an.height === realan.height){
              x6[4].style.backgroundColor = "#538d4e";
            } 
            if ((an.height - 10) <= realan.height <= (10 + an.height)){
              x6[4].style.backgroundColor = "#b59f3b";
            } else{
              x6[4].style.backgroundColor = "#FFFFFF"
            }
          x6[5].innerHTML = an.gender;
          if(an.gender === realan.gender){
            x6[5].style.backgroundColor = "#538d4e"
          } else{
            x6[5].style.backgroundColor = "#FFFFFF"
          }
        }

        score--;
    }


    if(score === 0){ //Need to make a Lose window. With a Lose Streak.
    }
   
    myInput.value = "";
  });

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete(document.getElementById("myInput"), aL);

/*function colors(an, realan){
  
}*/

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function playAgain(x,x1,x2,x3,x4,x5,x6,random,answer,an,realan){ //Use this to clear everything and change the word.
  x[0]
}

function openPopup(){
    document.getElementsByClassName("popup")[0].style.display="block";
}

function closePopup(){
    document.getElementsByClassName("popup")[0].style.display="none";
}

function darkMode(){
    document.body.classList.toggle("dark-mode");
    var nav = document.getElementById("nav");
    nav.toggleClass('nav',false);
    nav.toggleClass('nav-dark-mode');
}



function cropImage(imagePath) {
  //create an image object from the path
  const canvas = document.getElementById('canvas'); 
  const ctx = canvas.getContext('2d');

  const originalImage = new Image();
  originalImage.src = imagePath;

  var array=[0,originalImage.width/2];
  var array2=[0,originalImage.height/2];
    console.log(array2);

    newWidth=originalImage.width/2;
    newHeight=originalImage.height/2;

    canvas.width = originalImage.width/2;
    canvas.height = originalImage.height/2;
  
    newX=array[Math.floor(Math.random() * array.length)];
    newY=array2[Math.floor(Math.random() * array2.length)];
         
    //draw the image
    console.log(originalImage.width);
    ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);  
}

 