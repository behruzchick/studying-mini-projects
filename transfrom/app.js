let img = document.querySelector('.img');
let text = document.querySelector('.text');
// let imgDiv = document.querySelector('.img-div');



img.addEventListener('mouseover',(e) => {
	img.classList.toggle('hovered');
	text.classList.toggle('hovered_text');
	text.style = 'margin-bottom:100px'

})
img.addEventListener('mouseout',(e) => {

	img.classList.remove('hovered');
	text.classList.remove('hovered-text');

})
	

	
