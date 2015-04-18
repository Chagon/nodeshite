require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
<<<<<<< HEAD
    if (frame.hands !== undefined) {
        var roll = frame.hands[0].roll();
        var pitch = frame.hands[0].pitch();
        var yaw = frame.hands[0].yaw();

        console.log(toDegreeArray(roll, pitch, yaw));
    }
=======
    if (frame.hands[0] !== undefined)
        console.log(frame.hands[0].roll());
>>>>>>> 158334acd5706fe5c7bea9311515b7d8c245d7b9
});

function toDegreeArray(roll, pitch, yaw) {
    return [ radToDeg(roll), radToDeg(pitch), radToDeg(yaw) ];
};

function radToDeg(rad) {
    return rad * 180  / math.pi;
}

controller.on('streamingStarted', function() {
    console.log('cats');
});

controller.connect();
