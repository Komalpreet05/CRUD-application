
//CSS OF CONTACT US PAGE IN JAVASCRIPT
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
 


let h2=document.getElementById("h2");

    h2.style.color="green";
    h2.style.textAlign="center";
    h2.style.marginTop="50px";
    h2.style.fontWeight="lighter";
    h2.style.fontSize="40px";
    h2.style.fontStyle="normal";
    h2.style.fontFamily="Open Sans Light";

let accord=document.getElementsByClassName("accordion");
for(let acc=0; acc<accord.length; acc++)
{
accord[acc].style.margin="50px";
}

let erp=document.getElementById("errorp");

    erp.style.color="red";
    erp.style.textAlign="center";



let ancor=document.getElementsByClassName("a1");
for(let a=0; a<ancor.length; a++){
    ancor[a].style.color = "green";
    ancor[a].style.display="block";
    ancor[a].style.fontWeight="bold";
    ancor[a].style.fontSize="25px";
    ancor[a].style.fontStyle="normal";
    ancor[a].style.fontFamily="Open Sans Light";
}

let DT=document.getElementsByClassName("dt");
for(let d=0; d<DT.length; d++)
{
    DT[d].style.padding="25px";
    DT[d].style.border="1px solid  rgb(102, 102, 102)";
    DT[d].style.borderBottom="0";
    DT[d].style.borderBottom="1px solid  rgb(102, 102, 102)";
    DT[d].style.marginTop="25px";

    
}



let DD=document.getElementsByClassName("dd");
for(let dd=0; dd<DT.length; dd++)
{
    DD[dd].style.padding="25px";
    DD[dd].style.border="1px solid  rgb(102, 102, 102)";
    DD[dd].style.borderBottom="0";
    DD[dd].style.borderBottom="1px solid  rgb(102, 102, 102)";
    
    DD[dd].style.borderTop="0";
    DD[dd].style.fontSize="18px";
    DD[dd].style.borderTop="1px solid white";
    DD[dd].style.top="-1px";

    
}

let cs=document.getElementsByClassName("card");
for(let cols=0; cols<DT.cs; cols++)
{
    cs[cols].style.marginTop="10px";
}

let ct=document.getElementsByClassName("cardTitle");
for(let tl=0; tl<ct.length; tl++)
{
    ct[tl].style.color="green";
}



let wrapr=document.getElementsByClassName("wrapper");
for(let w=0; w<wrapr.length; w++)
{

    
    wrapr[w].style.padding="25px";
    wrapr[w].style.border="solid";
    wrapr[w].style.borderColor="white";
    wrapr[w].style.borderRadius="5px";
    wrapr[w].style.backgroundColor="green";
}




let textA=document.getElementById("bt1")
{
bt1.style.border="0";
bt1.style.marginTop="15px";
bt1.style.marginLeft="25%";
bt1.style.marginRight="50%";
bt1.style.padding="8px";
bt1.style.width="50%";
bt1.style.backgroundColor="blue";
bt1.style.color="white";
bt1.style.letterSpacing="3px";
bt1.style.fontWeight="bold";
bt1.style.borderRadius=".25rem";

}



let errMsg=document.getElementById("error_message")
{


   errMsg.style.marginBottom="20px";
   errMsg.style.padding="0px";
   errMsg.style.background="white";
   errMsg.style.textAlign="center";
   errMsg.style.fontSize="14px";
   errMsg.style.transition="all 0.5s ease";
}



  let txtArea=document.getElementById("message");
  {
    txtArea.style.height="60px";
    txtArea.style.resize="none";

  }


/*
let ifld=document.getElementsByClassName("input_field");
for(let f=0; f<ifld.length; f++)
{

    ifld[f].style.marginBottom="10px";
    ifld[f].style.marginLeft="50px";
    ifld[f].style.txtA[t].style.width="60px";
    ifld[f].style.border="1px solid rgb(102, 102, 102)";
    ifld[f].style.padding="10px";
    ifld[f].style.marginLeft="50px";

}

/*
let txtA=document.getElementsByClassName(".wrapper textarea");
for(let t=0; t<txtA.length; t++)
{
    txtA[t].style.txtA[t].style.width="60px";
    txtA[t].style.border="1px solid rgb(102, 102, 102)";
    txtA[t].style.padding="10px";
    txtA[t].style.marginLeft="50px";
    txtA[t].style.height="60px";
    txtA[t].style.resize="none";
}

*/

//Javascript for form validation
function validation()
{




var name=document.getElementById("name").value;
var subject=document.getElementById("subject").value;
var phone=document.getElementById("phone").value;
var email1=document.getElementById("email").value;
var message =document.getElementById("message").value;
var error_message=document.getElementById("error_message");
var text;

error_message.style.padding="10px";

if(name.length<3)
{

    text="Please Enter Valid Name";
    error_message.innerHTML=text;
    return false;
}


if(subject.length<3)
{

    text="Please Enter Correct Subject";
    error_message.innerHTML=text;
    return false;
}



if(email1.indexOf("@") == -1 || email1.length < 6)
{

    text="Please Enter Correct Email";
    error_message.innerHTML=text;
    return false;
}

if(isNaN(phone)||phone.length !=10)
{

    text="Please Enter Valid Phone Number";
    error_message.innerHTML=text;
    return false;
}

if(message.length>399 || message.length<5)
{
text="MESSAGE ENTRY SHOULD BE BETWEEN 5-400 WORDS"
error_message.innerHTML=text;
return false;
}

alert("Request Submitted! Our Agent Will contact you shortly");
return true;

}
//JavaScript Coding for chat box

var input=document.getElementById('input');

var output=document.getElementById('output')

var out=function(outtext){

    var newPara=document.createElement('p');
    var paraText=document.createTextNode(outtext);

    newPara.appendChild(paraText);

    output.appendChild(newPara);


}

var form=document.getElementById('chatForm');
function processForm(e)
{

    if(e.preventDefault) e.preventDefault();

    start(input.value, out)



    return false;

}

if(form.attachEvent)
{
    form.attachEvent("submit",processForm);
}
else
{
    form.addEventListener("submit",processForm);

}


start("",out);