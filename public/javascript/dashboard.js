

var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("current");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


  
  /*-----------------------------CSS*------------------------------------------*/
let css1 = document.getElementById("welcomeHead");
css1.style.height = "88vh";
css1.style.minHeight = "500px";
css1.style.backgroundImage = 'url("https://www.prestocard.ca/~/media/afms/images/presto-carousel1.ashx?h=784&w=1650&la=en&hash=63CD4EA67C636EACF86EF24915F0C0BBD436B0BF")';
css1.style.backgroundSize = "cover";
css1.style.backgroundPosition = "center";
css1.style.backgroundRepeat = "no-repeat";

let css3 = document.getElementById("heading1");
css3.style.color = "whitesmoke";
css3.style.fontWeight = "300";
css3.style.fontSize = "70px";

let css4 = document.getElementById("heading2");
css4.style.color = "greenyellow";
css4.style.fontSize = "45px";
 
 document.getElementById("para1").style.padding = "25px"; 

let css5 = document.getElementById("para2");
css5.style.lineHeight = "26pt";
css5.style.fontSize = "18px";



let css6 = document.getElementById('new');
css6.style.backgroundColor="#3a811e";
css6.style.borderColor="#3a811e";
css6.style.padding="20px";
css6.style.color="white";
css6.style.marginRight="10px";
css6.style.marginTop="140px";
css6.style.width="470px";

let cssa = document.getElementById('new1');
cssa.style.backgroundColor="#3a811e";
cssa.style.borderColor="#3a811e";
cssa.style.padding="20px";
cssa.style.color="white";
cssa.style.marginRight="10px";
cssa.style.marginTop="30px";
cssa.style.width="250px";


///event listener---------------------------
let css9 = document.getElementById('link1');
css9.addEventListener('mouseover',(event)=>{
  var css8 = document.getElementById('link1');
  css8.style.textDecoration = "none";

}) 

let cssa1 = document.getElementById('linka');
cssa1.style.color="white";
cssa1.addEventListener('mouseover',(event)=>{
  var cssa2 = document.getElementById('linka');
  cssa2.style.textDecoration = "none";

}) 
css9.style.color="white";

document.body.style.backgroundColor = "#f1f1ed";



/* let css10 = document.getElementsByClassName('accordion');
for(let i=0;i<css10.length;i++){
  css10[i].style.backgroundColor= "#eee";
  css10[i].style.color= "#444";
  css10[i].style.cursor= "pointer";
  css10[i].style.padding="18px";
  css10[i].style.width = "100%";
  css10[i].style.border = "none";
  //css10[i].style
  css10[i].style.fontSize = "15px";
  css10[i].style.transition = "0.4s";

} 
 */