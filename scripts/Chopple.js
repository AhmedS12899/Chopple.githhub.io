
function openPopup(){
    document.getElementsByClassName("popup")[0].style.display="block";
}

function closePopup(){
    document.getElementsByClassName("popup")[0].style.display="none";
}

function darkMode(){
    document.body.classList.toggle("dark-mode");
    var nav =document.getElementById("nav");
    nav.toggleClass('nav',false);
    nav.toggleClass('nav-dark-mode');
    // for (let i = 0; i < nav.getElementsByTagName("button").length; i++) {
    //     nav.getElementsByTagName("button")[i].classList.toggle("nav-dark-mode");
    //     console.log("Reach")
    // }

    // if(light="True"){
    //     let nav =document.getElementById("nav");
    //     nav.style.backgroundColor="rgb(51, 50, 50)";
    //     for (let i = 0; i < nav.getElementsByTagName("button").length; i++) {
    //         nav.getElementsByTagName("button")[i].style.backgroundColor = "rgb(51, 50, 50)";
    //     }
    //     document.getElementsByClassName("popup")[0].style.backgroundColor="rgb(75,75,70)";
    //     document.getElementsByClassName("popup")[0].getElementsByTagName("button")[0].style.backgroundColor="rgb(75,75,70)";
    //     // document.querySelector("button:hover").style.backgroundColor="lightgrey";
    //     document.getElementsByClassName("darkModeBtn")[0].value="False";
    //     console.log(document.getElementsByClassName("darkModeBtn")[0].value);
    // }else{
    //     document.body.style.backgroundColor = "white";
    //     document.getElementById("nav").style.backgroundColor="rgb(146, 207, 228)";
    //      for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
    //         document.getElementsByTagName("button")[i].style.backgroundColor = "rgb(146, 207, 228)";
    //     }
    //      document.getElementsByClassName("popup")[0].style.backgroundColor="rgb(146, 207, 228)";
    //      document.getElementsByClassName("darkModeBtn")[0].value="True";
    //      console.log(document.getElementsByClassName("darkModeBtn")[0].value);
    
    //     // document.querySelector("button:hover").style.backgroundColor="lightgrey";
    // }
}
  