console.log('Loaded!');
//Changing the content
var element=document.getElementById('main-text');
element.innerHTML='Dallas';
//Changing the image Moving image
var kodi=document.getElementById('tang');
var marginleft=0;
function moveRight(){
 marginleft-marginleft+10; 
 kodi.style.marginleft=marginleft + 'px';
}
kodi.onclick=function(){
   var interval=setInterval(moveRight,100);
};