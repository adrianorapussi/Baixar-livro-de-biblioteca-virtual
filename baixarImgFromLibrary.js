var baixarImgPorIntervalo = window.setInterval(function(){
	var botaoDireita = jQuery(".btn_nav.btn_nav_right");
	// Se espera que sejam 2 imagens
	var listaImgLivro = jQuery("#sunflower_main_content").find("img.backgroundImg");
	//TODO - pegar o src de cada img e baixar
	botaoDireita.click();
}, 5000);

