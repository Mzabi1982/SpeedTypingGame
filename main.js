


const levels={
    easy:5,
    medium:3,
    hard:2
}


//window.addEventListener('load',init);

const currentlevel=levels.medium
let time=currentlevel+1;
let score=0;
let isplaying;


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  const init=()=>{


    wordInput.addEventListener('input',()=>{
 //console.log(e.target.value)

 

 if (match()){

    score++;
    wordInput.value='';
    time=currentlevel+1;
    show(words);
    
 }

 if(score<0){
     score=0;
 }

scoreDisplay.innerHTML=score;



    });


    function match(){
        if (wordInput.value== currentWord.innerHTML) 
            {
                message.innerHTML='Correct';
                return true;
            }else {
                message.innerHTML='Not Correct';
                return false;
            }
    }

    show(words);
    setInterval(()=>{
     if(time>0){
         time--;
     }else{
         isplaying=false;
     }

     timeDisplay.innerHTML=time;

    },1000)


    setInterval(()=>{

  if(time===0){
      message.innerHTML='Game Over baby !!!';
      score=-1;
  }

    },500)



}

const show=(words)=>{
 
    const random=Math.floor(Math.random()*words.length);
   // console.log(rand);

   currentWord.innerHTML=words[random]
 
}