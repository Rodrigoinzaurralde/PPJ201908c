var usuariosCtrl = function (user) {
	console.log("run usuarios ::", appCont);

	try {
		var user = JSON.parse(window.localStorage.getItem('_jsonUser'));
	} catch (e){
		console.log("catch: ", e);

		window.localStorage.clear();
		window.location.reload();
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