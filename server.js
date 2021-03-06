var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    title: 'Weather Report by Venkatess Sundaramurthy',
    heading: 'Trouble for Aussies',
    date:  'Oct 5,2016',
    content:`
                        <p>
                        "Based on the most recent forecast I received from the National Hurricane Center, the eye of Hurricane Matthew
                            going to be much closer to Florida," Scott said Wednesday night in a statement. "There are hurricane watches and warnings along Florida’s entire east coast and we now have Tropical Storm warnings on Florida’s Gulf Coast. This storm is serious and protecting life remains our number one priority."
                        </p>
                            
    
    `
},
'article-two':{
    title: 'Weather Report by Venkatess Sundaramurthy',
    heading: 'Trouble for Aussies',
    date:  'Oct 6,2016',
    content:`
                        <p>
                        "Based on the most recent forecast I received from the National Hurricane Center, the eye of Hurricane Matthew
                            going to be much closer to Florida," Scott said Wednesday night in a statement. "There are hurricane watches and warnings along Florida’s entire east coast and we now have Tropical Storm warnings on Florida’s Gulf Coast. This storm is serious and protecting life remains our number one priority."
                        </p>
                            
    
    `
    
},
'article-three':{
    title: 'Weather Report by Venkatess Sundaramurthy',
    heading: 'Trouble for Aussies',
    date:  'Oct 7,2016',
    content:`
                        <p>
                        "Based on the most recent forecast I received from the National Hurricane Center, the eye of Hurricane Matthew
                            going to be much closer to Florida," Scott said Wednesday night in a statement. "There are hurricane watches and warnings along Florida’s entire east coast and we now have Tropical Storm warnings on Florida’s Gulf Coast. This storm is serious and protecting life remains our number one priority."
                        </p>
                            
    
    `
    
}
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
        var htmlTemplate=`
        <html>
       <head> 
            <title>${title} </title>
            <link href="/ui/style.css" rel="stylesheet" />
                </head>
        <body>
            <div class="Adjust">
                <div>
                    <c href='/'>News </c>
                    </div>
                    <hr/>
                    <h2>
                        ${heading}
                    </h2>
                    <div>
                        ${date}
                    </div>
                    <div>
                       ${content}            
                       </div>
        </div>
        </body>
        
    
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});
app.get('/:articleName', function (req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
