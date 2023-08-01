// ------------------scroll nav -----------------//
let nav=document.querySelectorAll(".nav-menu a");
let interval;
for(let i=0;i<nav.length;i++)
{
    
    nav[i].addEventListener('click',function(e)
    {   
        e.preventDefault();
        var targetsection =this.textContent.trim().toLowerCase();
        var target=document.getElementById(targetsection);
        // console.log(target);
        interval=setInterval(function()
        {
            scrollvertical(target);
        },40);
    });

}

function scrollvertical(target){
    let targetcordinate=target.getBoundingClientRect();
    if(targetcordinate.top<=0)
    {
    clearInterval(interval);
    return;
    }
    window.scrollBy(0,30);
}


// -------------------skill element filled ------------//

let progressBar=document.getElementById("skills");
let skilldisplay=document.querySelectorAll(".skill-display div");
window.addEventListener('scroll',checkscroll);
var animation=false;

function initilizebar(){
    for(var  bar of skilldisplay )
    {
        bar.style.width=0 + '%';
    }
}

function checkscroll(){
    var cordinate=progressBar.getBoundingClientRect();
    if(animation==false && cordinate.top < window.innerHeight)
    {
        animation=true;
        console.log("skill section view");
    }
}




