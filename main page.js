var click = document.getElementsByClassName('click')[0];
var click1 = document.getElementsByClassName('click1')[0];
var click2 = document.getElementsByClassName('click2')[0];
var week = document.getElementsByClassName('week')[0];
var week1 = document.getElementsByClassName('week1')[0];
var week2 = document.getElementsByClassName('week2')[0];
var logo1 = document.getElementsByClassName('logo1')[0];
var mean = document.getElementsByClassName('mean')[0];
var part1 = document.getElementsByClassName('part1')[0];
var ishidden = true;
var isvisible = false;
click.onclick = function () {
    if (ishidden) {
        week.style.visibility = "visible";
        week.style.overflow = "visible";
        week.style.opacity = 1;
        week.style.left = "50%";
    }
    else {
        week.style.visibility = "hidden";
        week.style.overflow = "hidden";
        week.style.opacity = 0;
        week.style.right = "50%";
    }
    ishidden = !ishidden
};
click1.onclick = function () {
    if (ishidden) {
        week1.style.visibility = "visible";
        week1.style.overflow = "visible";
        week1.style.opacity = 1;
        week1.style.left = "50%";
    }
    else {
        week1.style.visibility = "hidden";
        week1.style.overflow = "hidden";
        week1.style.opacity = 0;
        week1.style.right = "50%";
    }
    ishidden = !ishidden
};
click2.onclick = function () {
    if (ishidden) {
        week2.style.visibility = "visible";
        week2.style.overflow = "visible";
        week2.style.opacity = 1;
        week2.style.left = "50%";
    }
    else {
        week2.style.visibility = "hidden";
        week2.style.overflow = "hidden";
        week2.style.opacity = 0;
        week2.style.right = "50%";
    }
    ishidden = !ishidden
};
logo1.onclick = function () {
    if (ishidden) {
        mean.style.visibility = "visible";
        mean.style.opacity = 1;
        mean.style.left = "50%";
    }
ishidden = !ishidden
};
part1.onclick = function(){
    if(!ishidden){
    mean.style.visibility = "hidden";
    mean.style.opacity = 0;
    mean.style.left = "50%";
}
};