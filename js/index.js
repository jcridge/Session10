var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});

    $('#clear').on('click', function() {
        clearNotification();
    });


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'Mike Linford', duration: 5000});
    //new Toast({content: 'Blackberry Phone', duration: 3000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Feeling Hungry?', // message
        dialogDismissed,         // callback
        'Are you hungry?',            // title
        ['No', 'Yes']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	if(buttonIndex==1) new Toast({content: "Take a Break", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'Get on with your work', duration: 3000});
}
function clearNotifications(){
    notification_count = 0;
}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}