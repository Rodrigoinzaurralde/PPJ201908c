var appCont = $('#app');

var cerrarSesion = function (){
	appCont.on( 'click', '#cerrarSesion', function () {
		window.localStorage.clear();
		window.location.reload();

		return false;
	})
}
cerrarSesion();

try {
	var authUser = window.localStorage.getItem('_user');
	if(authUser == "alex"){
		usuariosCtrl();
	} else {
		// RUN LOGIN
		window.localStorage.clear();
		loginCtrl();
	}
} catch(e){
	window.localStorage.clear();
	console.log("e: ", e);
	loginCtrl();
}

