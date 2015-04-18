require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
    if (frame.hands === undefined)
        console.log(frame.hands[0].roll());
});

controller.on('streamingStarted', function() {
    console.log('cats');
});

controller.connect();
