var flag = 0;
function setFlag(){
    flag = 1;
}
function moveMenu(){
    if (flag == 1){
        openMenu();
        flag = 2;
        d = document.getElementById("open-button").style.display = "none";
    }else if (flag == 2){
        closeMenu();
        flag = 1;
        d = document.getElementById("open-button").style.display = "block";
    }
}
function closeMenu(){
    items = document.getElementsByClassName("box-wrapper");
    for(var i = 0; i < items.length; i++){
        items[i].classList.add('loading');
    }
}
function openMenu(){
    items = document.getElementsByClassName("box-wrapper");
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove('loading');
    }
}
window.onload = setFlag();
/*function showSubOne(){

}
function showSubTwo(){

}*/