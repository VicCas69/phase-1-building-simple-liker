// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡';
const FULL_HEART = '♥' ;


// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like-glyph");

function likeHeart(event){
  event.preventDefault();
  let shape = event.target;
  //console.log(shape)
  mimicServerCall()
  .then(()=>{
      //shape.className = "";
      //shape.innerText = EMPTY_HEART;      
      //shape.innerText = FULL_HEART;
      //shape.className = "activated-heart"
      //shape
    if(shape.innerText === EMPTY_HEART){
      shape.innerText = FULL_HEART
      shape.className = "activated-heart"
      //console.log(shape)     
    }else{
      shape.innerText = EMPTY_HEART;
      shape.className = "";
      //console.log(shape)
    }  
    return shape
    //updateHeart(event)
  })
  .catch(()=>{
      const error = document.getElementById("modal");
      error.className = '';
      setTimeout(()=>{
        const hidden = document.getElementById("modal");
        hidden.className = "hidden"
      },3000)    
  });}

  


for(let h of likes){
h.addEventListener('click', likeHeart)
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