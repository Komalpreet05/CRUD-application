console.log("Hi");
let headLine=document.getElementById("h1line");
headLine.style.textAlign="center";
headLine.style.color="rgb(102, 102, 102)";

let h1M=document.getElementById("h1main");

    h1M.style.color="green";
    h1M.style.textAlign="center";
    h1M.style.marginTop="50px";
    h1M.style.fontWeight="lighter";
    h1M.style.fontSize="48px";
    h1M.style.fontStyle="normal";
    h1M.style.fontFamily="Open Sans Light";

let css1 = document.getElementsByClassName("row-set");
console.log(css1);
for (let x = 0; x < css1.length; x++) {
    css1[x].style.margin = "0";
    css1[x].style.padding = "30px";
    console.log("hello");
}