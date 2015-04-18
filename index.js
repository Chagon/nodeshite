require('leapjs/template/entry.js');

var controller = new Leap.Controller();

controller.on('frame', function(frame) {
	console.log(frame);
});

controller.on('streamingStarted', function() {
	console.log('cats');
});

controller.connect(); 