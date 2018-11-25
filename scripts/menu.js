// JavaScript Document


(function(d){
	
	// d = document
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.btn-menu');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('show');
		
	});
	
	
})(document);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function popFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var menu = document.getElementById("hamburger");
    nav.classList.toggle("show");
    
}