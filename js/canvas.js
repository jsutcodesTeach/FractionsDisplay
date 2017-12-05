var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// centre or center for US :) the drawing
var x = canvas.width / 2;
var y = canvas.height / 2;

// number of days
var days = 1;

// number of hours
var denom = 2;

// one segment represents an hour so divide degrees by denom
var segmentWidth = 360 / denom;

// begin at 0 and end at one segment width
var startAngle = 0;
var endAngle = segmentWidth;

// how thick you want a segment
var segmentDepth = 150;

function init(){
    for(var i=1; i <= days; i++) {
        drawSegments(i*segmentDepth);
    } 
}

function drawSegments(radius) {
    var pieAngle = 2 * Math.PI / denom;
    
    for (var i = 0; i < denom; i++) {
        context.beginPath();
        
        context.moveTo(x, y);
        context.arc(x, y, radius, i*pieAngle, (i+1)*pieAngle, false);
        context.lineWidth = segmentDepth;
        //0 is red, 120 is green, 240 is blue
        var emptyVal = 'hsl(0,100%, 100%)';
        var hueValue = i * 15;
        context.fillStyle = 'hsl(' + hueValue + ',70%, 60%)';
       // context.fillStyle = emptyVal;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#444';
        context.stroke();
    }
}

// start drawing our chart
init();