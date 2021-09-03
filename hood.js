console.log('hello world')

const food = ["Mosaic Grill", "Narunyas", "The Gin"]
const shuffleBtn = document.querySelector('#shuffleBtn')

function shuffleRes(){
    const random = Math.floor(Math.random() * food.length);
    alert(`You have chosen ${random, food[random]}`)
}


shuffleBtn.addEventListener('click', shuffleRes)