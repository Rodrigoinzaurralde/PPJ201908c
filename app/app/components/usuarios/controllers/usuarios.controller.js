var usuariosCtrl = function (user) {
	console.log("run usuarios ::", appCont);

	try {
		console.log("loginObj: ", loginObj);
	} catch (e){
		// console.log("catch: ", e);
	}
	

	var VIWES   	= "components/usuarios/views";
	var req	 		= $.get(VIWES + "/indexView.html");
	var WLCM_MSG 	= "Bienvenido";

	req.then( function (res){
		appCont.html(res);

		if(user){
			appCont.find('b').text(user.user);
		} else {
			appCont.find('p').text(WLCM_MSG);
		}
	});
};