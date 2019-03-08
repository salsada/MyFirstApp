$(document).ready(function (){
    console.log("You are reading this from the console");

    $("h1").css("color", "red");
    
    paper.install(window);
    paper.setup($("#mainCanvas")[0]);
    
    var tool = new Tool();

    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);

        c.fillColor = "green";
    }


    /*
    var c = Shape.Circle(200,200, 50);

    c.fillColor = "green";
    */


    paper.view.draw();
});
