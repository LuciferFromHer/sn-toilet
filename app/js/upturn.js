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

