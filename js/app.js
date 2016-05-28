$(document).ready(function(){
		  $('.bxslider').bxSlider();});

function func(tabno){
	tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    thistab = tabcontent = document.getElementById(tabno);
    thistab.style.display = "block";
}