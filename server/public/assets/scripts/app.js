/**
 * Created by Thomas on 10/30/15.
 */
$(document).ready(function(){

    //$("#add").on('click', selectFunction);
    //$("#subtract").on('click', selectFunction);
    //$("#multiply").on('click', selectFunction);
    //$("#divide").on('click', selectFunction);

    //Neither of these jquery attempts worked.

    //$("#add").on('click', function(){mathProblem["type"] = "Add"});
    //$("#subtract").on('click', function(){mathProblem["type"] = "Subtract"});
    //$("#multiply").on('click', function(){mathProblem["type"] = "Multiply"});
    //$("#divide").on('click', function(){mathProblem["type"] = "Divide"});

    $("#getData").on('click', clickGetData);
    $("#postData").on('click', clickPostData);

});

function clickGetData(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            console.log(data);
        }
    });
}


function clickPostData() {

    var mathFunctions = ["Add", "Subtract", "Multiply", "Divide"]
    var mathProblem = {};  //mathProblem is the object containing data(x,y) and type"Add,Subtract,Multiply,Divide"
    //var output = 0;
    $.each($("#inputForm").serializeArray(), function (i, field) {
        mathProblem[field.name] = field.value;
        //$("#functionButtons").on('click', function(){
        //
        //
        //})

        mathProblem["type"] = "Add";// !!!!!this works and I can create and object that has all the values that I need
        //I do not know how to connect the buttons to each individual function.

        //$("#add").on('click', function(){mathProblem["type"] = "Add"});
        //$("#subtract").on('click', function(){mathProblem["type"] = "Subtract"});
        //$("#multiply").on('click', function(){mathProblem["type"] = "Multiply"});
        //$("#divide").on('click', function(){mathProblem["type"] = "Divide"});



    });

    //function selectFunction(type) {
    //    switch (type) {
    //        case mathFunctions[0]:
    //            type = "Add";
    //            break;
    //        case mathFunctions[1]:
    //            type = "Subtract";
    //            break;
    //        case mathFunctions[2]:
    //            mathProblem["type"] = "Multiply";
    //            break;
    //        case mathFunctions[3]:
    //            mathProblem["type"] = "Divide";
    //            break;
    //        default:
    //            text: "?";
    //    }
    //    return type;
    //}




    $.ajax({
        type: "POST",
        url: "/data",
        data: mathProblem,
        beforeSend: function () {
            console.log("HERE IS THE DATA:", mathProblem);
        },
        success: function (data) {
            console.log(data);

        }
    });
}

    //function selectFunction() {
    //    for (var i = 0; i < mathFunctions.length; i++) {
    //        mathProblem["type"] = mathFunctions[0];
    //        mathProblem["type"] = mathFunctions[1];
    //        mathProblem["type"] = mathFunctions[2];
    //        mathProblem["type"] = mathFunctions[3];
    //
    //        console.log("here it is", mathProblem);
    //    }
    //}

