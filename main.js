// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


let likeglyph = document.getElementsByClassName('like-glyph')

function likeExecution(e){
  let executeLike = e.target
  mimicServerCall()
  .then(function(){
  if (executeLike.innerText === EMPTY_HEART){
    executeLike.innerText = FULL_HEART
    executeLike.className = 'activated-heart';
    }
    else {
      executeLike.innerText = EMPTY_HEART
      executeLike.className = '';
    }
  })
}

for (let like of likeglyph) {
  like.addEventListener("click", likeExecution);
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
