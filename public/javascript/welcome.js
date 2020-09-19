/*-----------------------------CSS*------------------------------------------*/
let css1 = document.getElementById("welcomeHead");
css1.style.height = "91vh";
css1.style.minHeight = "500px";
css1.style.backgroundImage = 'url("https://www.prestocard.ca/~/media/afms/images/presto-carousel1.ashx?h=784&w=1650&la=en&hash=63CD4EA67C636EACF86EF24915F0C0BBD436B0BF")';
css1.style.backgroundSize = "cover";
css1.style.backgroundPosition = "center";
css1.style.backgroundRepeat = "no-repeat";

let css3 = document.getElementById("heading1");
css3.style.color = "whitesmoke";
css3.style.fontWeight = "300";
css3.style.fontSize = "70px";


let css2 = document.getElementById("link1");
css2.style.color = "white";

let css4 = document.getElementById("link2");
css4.style.color = "black"

css2.addEventListener('mouseover',(event)=>{
    css2.style.textDecoration = "none";
   
})

css4.addEventListener('mouseover',(event)=>{
    css4.style.textDecoration = "none";
})

let css5 = document.getElementById('new');
css5.style.backgroundColor = "#3a811e";
css5.style.borderColor = "#3a811e";
css5.style.padding = "20px";
css5.style.color = "white";
css5.style.marginRight = "10px";
css5.style.marginTop = "15px";
css5.style.borderRadius = "0";

css5.addEventListener('mouseover',(event)=>{
    css5.style.opacity = "0.7";
})

css5.addEventListener('mouseout',(event)=>{
    css5.style.opacity = "1";
})

let css6 = document.getElementById("old");
css6.style.padding = "20px"
css6.style.borderRadius = "0";
css6.style.marginTop="15px";
css6.style.color="black";

css6.addEventListener('mouseover',(event)=>{
    css6.style.opacity = "0.7";
})

css6.addEventListener('mouseout',(event)=>{
    css6.style.opacity = "1";
})




