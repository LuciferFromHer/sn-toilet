var getObj = function(name) { 

name = name.replace(/^\s*(.*)\s*$/, '$1'); 
var obj, char = name[0]; 
name = name.substr(1); 

if(char == '#'){ 
return document.getElementById(name); 
}else if(char == '.'){ 
return document.getElementsByClassName(name); 
}else { 
return document.getElementsByTagName(name); 
} 
};
function getDisplay(name, display){ 
return getObj(name).style.display = display; 
}

function animateWidth(elem,f,t,d){
	var element = document.getElementsByClassName(elem)[0];

	var from = f; // Начальная координата X

	var to = t; // Конечная координата X

	var duration = d; // Длительность - 1000 = 1 секунда

	var start = new Date().getTime(); // Время старта

	setTimeout(function() {

		var now = (new Date().getTime()) - start; // Текущее время

		var progress = now / duration; // Прогресс анимации

		var result = (to - from) * delta(progress) + from;
		
		element.style.width = result + "px";
		
		if (progress < 1) // Если анимация не закончилась, продолжаем
			setTimeout(arguments.callee, 10);
	}, 10);
	function delta(progress) {
			return progress;
		}
}

function animateMargin(elem,f,t,d,side){
	var element = document.getElementsByClassName(elem)[0];

	var from = f; // Начальная координата X

	var to = t; // Конечная координата X

	var duration = d; // Длительность - 1000 = 1 секунда

	var start = new Date().getTime(); // Время старта
	
	setTimeout(function() {

		var now = (new Date().getTime()) - start; // Текущее время

		var progress = now / duration; // Прогресс анимации

		var result = (to - from) * delta(progress) + from;
		if(side == "right"){
			element.style.marginRight = result + "px";	
		}else if(side == "left"){
			element.style.marginLeft = result + "px";
		}else if(side == "top"){
			element.style.marginTop = result + "px";
		}else if(side == "bottom"){
			element.style.marginBottom = result + "px";
		}
		if (progress < 1) // Если анимация не закончилась, продолжаем
			setTimeout(arguments.callee, 10);
	}, 10);
	function delta(progress) {
			return progress;
		}
}


