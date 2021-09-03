console.log("hello world");

const duckImg = document.querySelector('#duck')

function duckMouse(){
	alert('You know what is cuter than this duck? You!')
}

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form Submitted!')
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

duckImg.addEventListener('mouseover', duckMouse)
form.addEventListener('submit', handleSubmit);