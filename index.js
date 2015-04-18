// If the numbers should be formatted neatly
DO_FORMATING = false;

require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
    if (frame.hands[0] !== undefined) {
        var roll = frame.hands[0].roll();
        var pitch = frame.hands[0].pitch();
        var yaw = frame.hands[0].yaw();

        if (DO_FORMATING) {
            array = toDegreeArray(roll, pitch, yaw).map(function(element) {
                return formatThreeDigitSigned(element);
            });

            firstHand = array;
        }
        else
            firstHand = toDegreeArray(roll, pitch, yaw);
        console.log(frame.hands[0].palmPosition[1]);
    }
});

function toDegreeArray(roll, pitch, yaw) {
    return [ radToDeg(roll), radToDeg(pitch), radToDeg(yaw) ];
}

function radToDeg(rad) {
    return Math.floor(rad * 180  / Math.PI);
}

function formatThreeDigitSigned(number) {
    var returnString = '' + number;
    var length = number.toString().length;

    if (number >= 0 )
        returnString = ' ' + returnString;
    else
        length--;

    while (length < 3) {
        returnString = ' ' + returnString;
        length++;
    }

    return returnString;
}

controller.on('streamingStarted', function() {
    console.log('cats');
});

controller.connect();
