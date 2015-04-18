// If the numbers should be formatted neatly
DO_FORMATING = false;

require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
    var printHands = '';

    if (frame.hands[0] !== undefined) {
        var roll = frame.hands[0].roll();
        var pitch = frame.hands[0].pitch();
        var yaw = frame.hands[0].yaw();

        if (DO_FORMATING) {
            array = toDegreeArray(roll, pitch, yaw).map(function(element) {
                return formatThreeDigitSigned(element);
            });

            printHands += array.toString();
        }
        else
            toDegreeArray(roll, pitch, yaw).toString();
    }
    if (frame.hands[1] !== undefined) {
        var roll = frame.hands[1].roll();
        var pitch = frame.hands[1].pitch();
        var yaw = frame.hands[1].yaw();

        if (DO_FORMATING) {
            array = toDegreeArray(roll, pitch, yaw).map(function(element) {
                return formatThreeDigitSigned(element);
            });

            printHands += array;
        }
        else
            printHands += toDegreeArray(roll, pitch, yaw);
    }

    console.log(printHands);
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
