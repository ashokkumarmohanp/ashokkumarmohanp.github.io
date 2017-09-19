document.addEventListener("click", function(){
var x = event.target.id;

if (x=='p'){
 
document.getElementsByClassName("menu")[0].style.top=0;
}
else if(x=='c'){
	document.getElementsByClassName("about")[0].style.display="none";
	document.getElementsByClassName("menu")[0].style.top="-100%";
	document.getElementsByClassName("container")[0].style.display="block";
	document.getElementsByClassName("event")[0].style.display="none";

}
else if(x=='f'){
	document.getElementsByClassName("about")[0].style.display="block";
}
else if(x=='about'){
	document.getElementsByClassName("about")[0].style.display="block";
}

else if(x=='con'){
	document.getElementsByClassName("menu")[0].style.top="-100%";
	document.getElementsByClassName("container")[0].style.display="none";
	document.getElementsByClassName("event")[0].style.display="block";
} 
});