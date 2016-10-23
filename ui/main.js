console.log('Loaded!');
//Changing the content
var element=document.getElementById('main-text');
element.innerHTML='Dallas';
//Changing the image Moving image
var kodi=document.getElementById('tang');
var marginLeft=0;
function moveRight(){
 marginLeft-marginLeft + 10; 
 kodi.style.marginLeft=marginLeft + 'px';
}
kodi.onclick=function(){
   var interval=setInterval(moveRight,100);
};