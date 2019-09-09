var loginCtrl = function () {
	console.log("run login ::", appCont);


	var VIWES ="components/session/views";

	var req = $.get(VIWES + "/indexView.html");

	req.then(function(res){
		console.log("res: ", res);

		appCont.html(res);

	var form 		= $('#login');
	var btn 		= form.find('button');

	var user 		= form.find('[name=user]');
	var password 	= form.find('[name=password]');

	var loginObj 	= {
		"user":"",
		"password":""
	};

	// SETEAR INFO
	loginObj.user 		= user.val();
	loginObj.password   = password.val();

	btn.click(function(){
			// SETEAR INFO

	loginObj.user 		= user.val();
	loginObj.password   = password.val();
	if(loginObj.user==""){
		alert('usuario vacio');
	}
	if(loginObj.password==""){
		alert('password vacia');
	}
	console.log("loginObj: submit", loginObj);
		return false;
	});
	
	console.log("elements: ", user, password);
	console.log("loginObj: ", loginObj);

	})
}