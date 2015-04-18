require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
    if (frame.hands[0] !== undefined) {
        var roll = frame.hands[0].roll();
        var pitch = frame.hands[0].pitch();
        var yaw = frame.hands[0].yaw();

        console.log(toDegreeArray(roll, pitch, yaw));
    }
});

function toDegreeArray(roll, pitch, yaw) {
    return [ radToDeg(roll), radToDeg(pitch), radToDeg(yaw) ];
};

function radToDeg(rad) {
    return rad * 180  / Math.PI;
}

controller.on('streamingStarted', function() {
    console.log('cats');
});

controller.connect();
