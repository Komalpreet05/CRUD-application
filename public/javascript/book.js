// changing themes function
let theme1 = document.getElementById('blue');

theme1.addEventListener("click", first);
function first(){
    document.getElementById('form').style.backgroundColor = ' #005587';
    document.getElementById('form').style.color = 'white';
    document.getElementById('info').style.color = 'white';   
}

let theme2 = document.getElementById('yellow');
theme2.addEventListener("click",second);
function second(){
    document.getElementById('form').style.backgroundColor = 'yellow';
    document.getElementById('form').style.color = 'black';
    document.getElementById('info').style.color = 'black';
}

let theme3 = document.getElementById('green');
theme3.addEventListener("click", third);
function third(){
    document.getElementById('form').style.backgroundColor = 'black';
    document.getElementById('form').style.color = 'white';
    document.getElementById('info').style.color = 'white';
}

let defaultTheme = document.getElementById('default');
defaultTheme.addEventListener("click",fourth);

function fourth(){
    document.getElementById('form').style.backgroundColor = 'white';
    document.getElementById('form').style.color = 'black';
    document.getElementById('info').style.color = ' #005587';
}


/////------------CSS------------------


document.body.style.padding = '0'; // css on body
document.body.style.margin = '0'; // css on body

document.getElementById('form').style.padding = "40px"; // css on form 



//css on errors of validation
let css4 = document.getElementsByClassName("error");
for (let x = 0; x < css4.length; x++) {
	css4[x].style.color = "red";
}


// css on heading of table
let css5 = document.getElementById("Registered");
css5.style.color = "#005587";
css5.style.padding = "10px";

// css on buttons of themes
let css6 = document.getElementById("abc");
css6.style.marginTop = "20px";
css6.style.marginBottom = "20px";

//css on table
let css7 = document.getElementById("info");
css7.style.color = "#005587";
css7.style.marginBottom = "20px";
document.getElementById('table').style.padding = "40px";