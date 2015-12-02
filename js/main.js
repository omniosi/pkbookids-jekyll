(function(){

var cart = document.getElementById('cart');
var moreless = document.getElementsByClassName('moreless')[0],
				cont = document.getElementsByClassName('cont')[0];

cont.style.display = 'none';
moreless.addEventListener('click',openclose);

window.addEventListener('resize',function(event){
	cond();
});
function cond(){
	var docwidth = window.innerWidth;

	if(window.innerWidth>749){
		cart.style.top = '0px';

		cont.style.display = 'block';
		moreless.style.display = 'none';

	}	else {
		cart.style.top = '25px';

		cont.style.display = 'none';
		moreless.style.display = 'block';

	}
	// console.log("addEventListener called");
	// console.log("docwidth = "+docwidth);
}

function openclose(){
	if(moreless.innerHTML === 'more'){
		cont.style.display = 'block';
		moreless.innerHTML = 'less';
	}else{
		cont.style.display = 'none';
		moreless.innerHTML = 'more';
	}
}
cond();

})();