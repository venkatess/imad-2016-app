var button=document.getElementById('counter');
button.onclick=function(){
  //Make request to counter end point
  
  //Capture the response and stored it in avariable
  
  
  //Render the variable to display
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};