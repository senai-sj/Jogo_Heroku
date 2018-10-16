// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function preparar() {
	$("#header").hide();
	$("#subheader").hide();
	$("#form").hide();
	$("footer").hide();
}

function inicio() {
	$(".intro").hide();
	$("#header").show();
	$("#subheader").show();
	$("#form").show();
	$("footer").show();

	var music0 = document.getElementById('music0');
	var music1 = document.getElementById('music1');
	var music2 = document.getElementById('music2');
	var n = Math.floor((Math.random() * 3));
	musica = n;
	
	if (musica == 0) {
		music0.play();
	}
	if (musica == 1) {
		music1.play();
	}
	if (musica == 2) {
		music2.play();
	}
}


