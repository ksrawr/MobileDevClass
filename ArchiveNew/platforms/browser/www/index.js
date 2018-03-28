window.onload = function() { 
	
	// make sure DOM is loaded

    document.addEventListener("deviceready", onDeviceReady, false); // (fired when cordova/phonegap is loaded)

}

function onDeviceReady() {

    var parentElement = document.getElementById("deviceready");
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    // DEVICE ****************************************************************
//    
	$("#info").html('Cordova Version: '+device.cordova+'<br>');
   $("#info").append(device.model+'<br>');
   $("#info").append(device.platform+' '+device.version+'<br>');


    // CAMERA ****************************************************************
//    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//	destinationType: Camera.DestinationType.DATA_URL
//    });
//
//    function onSuccess(imageData) {
//	var image = document.getElementById('myImage');
//	image.src = "data:image/jpeg;base64," + imageData;
//	console.log("image updated");
//    }
//
//    function onFail(message) {
//	console.log('Failed because: ' + message);
//    }


     // BATTERY ****************************************************************
//    window.addEventListener("batterystatus", onBatteryStatus, false);
//
//    function onBatteryStatus(info) {
//	// Handle the online event
//	$("#battery").html("Level: " + info.level + "<br> isPlugged: " + info.isPlugged);
//    }

    // ACCELEROMETER ****************************************************************
//    function onSuccessAccel(acceleration) {
//    $("#accel").html('Acceleration:<br> X: ' + Math.round(acceleration.x, 2) + '<br>' +
//          ' Y: ' + Math.round(acceleration.y, 2) + '<br>' +
//          ' Z: ' + Math.round(acceleration.z, 2) + '<br>' +
//          'Timestamp: '      + acceleration.timestamp + '<br>');
//    };
//
//    function onErrorAccel() {
//	alert('onError!');
//    };
//
//    var options = { frequency: 50 };
//
//    var watchID = navigator.accelerometer.watchAcceleration(onSuccessAccel, onErrorAccel, options);
//
//   // COMPASS ****************************************************************
//    function onSuccessCompass(heading) {
//	$('#compass').html('Heading: ' + Math.round(heading.magneticHeading)+' Degrees');
//    };
//
//    function onErrorCompass(compassError) {
//	alert('Compass error: ' + compassError.code);
//    };
//
//    var options = {
//	frequency: 50
//    };
//
//    var watchID2 = navigator.compass.watchHeading(onSuccessCompass, onErrorCompass, options);


    // CONTACTS ****************************************************************
//    navigator.contacts.pickContact(function(contact){
//        console.log('The following contact has been selected:' + JSON.stringify(contact));
//    },function(err){
//        console.log('Error: ' + err);
//    });


} // DEVICE READY
