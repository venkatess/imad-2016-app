var button=document.getElementById('counter');
button.onclick=function(){
  //Create request object
  var request=new XMLHttpRequest();
  //Capture the response and stored it in avariable
  request.onreadystatechange=function(){
   if(request.readystate==XMLHttpRequest.DONE){
       //Take action
       if (request.status==200){
           var counter=request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
       }
   }   
  };
  
  //Render the variable to display
  //Make request
  request.open('GET','http://venkatess.imad.hasura-app.io',true);
  request.send(null);
  
  
  
};