const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual')

function colorAlert(){
    alert("Red is Bruno's Favorite color")
}

function placeAlert(){
    alert("Colorado is Bruno's favorite place")
}

function ritualAlert(){
    alert("Ritual? Sorry, no witchcraft here!...")
}

colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)