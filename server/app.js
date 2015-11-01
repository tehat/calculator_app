/**
 * Created by Thomas on 10/30/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var output = 0;

var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

//app.use('/', index);

app.get("/*", function(req,res,next){
    var file = req.params[0] || "/index.html";
    //console.log(__dirname);
    //console.log(file);
    res.sendFile(path.join(__dirname, "./public/", file));

});

app.post('/data', function(request, response){
        console.log(request.body.xInput, request.body.yInput,request.body.type);
        //console.log('were on server');
        //response.send("Hello");
        mathCalculations(request.body.xInput, request.body.yInput,request.body.type);
        response.send({output});
    });



app.listen(app.get("port"), function(){
    console.log("So Far So Good" + app.get('port'));
});

function mathCalculations(xInput, yInput, type) {

    switch (type) {
        case "Add":
            output = xInput + yInput;
            console.log("add");
            console.log(output);
            break;
        case "Subtract":
            //type:
            output = xInput - yInput;

            break;
        case "Multiply":
            //type:
            output = xInput * yInput;
            break;
        case "Divide":
            //type:
            output = xInput / yInput;
            break;
        default:
            text = "?"
    }
}