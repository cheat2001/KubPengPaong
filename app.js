const ballons=document.querySelectorAll(".ballon");
const audio=new Audio("BalloonSound1.mp3");
const musicBackground=new Audio("music-background.mp3");
const buttonClick=new Audio("button-click.mp3");
const ball=document.querySelector(".ball");
const overlay=document.querySelector(".overlay");
const modalResult=document.querySelector(".modal-result");
const modalGift=document.querySelector(".modal-gift");
const modalPlay=document.querySelector(".modal-play");
const modalTell=document.querySelector(".modal-tell");
const modalShowAllGift=document.querySelector(".modal-all-gift");

const message=document.querySelector(".message");
const colorAttemp=document.querySelector(".color-attempt");
const btnLookGift=document.querySelector(".look-gift");
const btnPlayAgain=document.querySelectorAll(".play-again");
const btnPlayGame=document.querySelector(".play-game");
const btnNext=document.querySelector(".btn-next");
const btnHowToPlay=document.querySelector(".howtoplay");
const btnTrackGift=document.querySelector(".track-gift");
const btnClose=document.querySelector(".btn-close");
const giveYouAGift=document.querySelector(".give-you-a-gift");
const pDeveloper=document.querySelector(".developer");
const giftTitle=document.querySelector(".gift-title");
const gift=[
    {title:"ទទួលបាន Coca ១កំប៉ុង",image:"images/gift/coca.png"},
    {title:"ទទួលបាន សៀវភៅ១ក្បាល",image:"images/gift/RiceDad.png"},
    {title:"ទទួលបាន Freshy ១កំប៉ុង",image:"images/gift/freshy.png"},
    {title:"ទទួលបាន Amazon ១កែវ",image:"images/gift/amazon.png"},
    {title:"ទទួលបាន Zoomer X ១គ្រឿង",image:"images/gift/zoomer.png"},
    {title:"ទទួលបាន Tiger ១កំប៉ុង",image:"images/gift/tigerBeer.png"},
    {title:"ទទួលបាន កង់១គ្រឿង",image:"images/gift/bicycle.png"},
    {title:"ទទួលបាន លុយមួយ១មុឺនដុល្លា",image:"images/gift/dollar.png"},
    {title:"ទទួលបាន iPhone 13 Pro ",image:"images/gift/iphone.png"},
    {title:"ទទួលបាន Scoopy ១គ្រឿង",image:"images/gift/scoopy.webp"},
    {title:"ទទួលបាន MacBook Pro",image:"images/gift/mac.png"},
    {title:"ទទួលបាន ពងទា ១ឡូ",image:"images/gift/egg.png"},
    {title:"ទទួលបាន Zenvo ST1 ១គ្រឿង",image:"images/gift/zenvo.png"},
    {title:"ទទួលបាន ប៊ិច ១ដើម",image:"images/gift/pen.png"},
    {title:"ទទួលបាន Rolls Royce ១គ្រឿង",image:"images/gift/rollsroyce.png"},
    {title:"Crush ព្រមស្រឡាញ់",image:"images/gift/crush.png"},
    {title:"អ្នកនឹងទទួលបានជីវិតដែលរីករាយ",image:"images/gift/happiness.png"},
    {title:"អ្នកនឹកទទួលបានជីវិតដែលជោគជ័យ",image:"images/gift/success.png"},
    {title:" ទទួលបាន Girlfriend ១នាក់",image:"images/gift/rose.png"},
    {title:"ទទួលបាន Boyfriend ១នាក់",image:"images/gift/jungkook.png"},
    {title:"ទំពាំងបាយជូរ ១ចង្គោម",image:"images/gift/grapes.png"},
    
]
const ranGift=Math.floor(Math.random()*gift.length);
giveYouAGift.src=gift[ranGift].image;
giftTitle.innerHTML=gift[ranGift].title;

function ballThrow(top,left){
    ball.classList.add("ball-throw");
    ball.style.left=`${left}px`;
    ball.style.top=`${top}px`;
}
 const colors=["red","blue","green","orange"];
 const getColor=[];
for(let i=0;i<ballons.length;i++){
    let ran=Math.floor(Math.random()*6)
    ballons[i].style.backgroundImage=`url(images/balloon${ran}.png)`;         
    function wow(){
        let ranCl=Math.floor(Math.random()*4);
        audio.play();
        ballons[i].style.background=colors[ranCl];
        ballons[i].removeEventListener("click",wow)
        let left=0;
        let top=0;
            if(screen.width<=500){
                left= ballons[i].getBoundingClientRect().left+15;
                top=ballons[i].getBoundingClientRect().top+30;
                console.log("Hello World")
           }
           else{
                left= ballons[i].getBoundingClientRect().left+25;
                top=ballons[i].getBoundingClientRect().top+40;
           }
        ballThrow(top,left);
        getColor.push(colors[ranCl]);
      if(getColor.length===2){
        if(getColor[0]===getColor[1]){
           overlay.classList.add("overlay-show");
           modalResult.classList.add("modal-show");
            message.innerHTML="You Won The Game 🏆";
            colorAttemp.innerHTML=`អ្នកបានគប់ត្រូវពណ៌ ${getColor[0]} ចំនួន​២ក្នុងការគប់២ដង`;
        }
      }
      else if(getColor.length===3){
        if(getColor[0]===getColor[2]){
            overlay.classList.add("overlay-show");
            modalResult.classList.add("modal-show");
            message.innerHTML="You Won The Game 🏆";
            colorAttemp.innerHTML=`អ្នកបានគប់ត្រូវពណ៌ ${getColor[0]} ចំនួន​២ក្នុងការគប់៣ដង`;
        }
        else if(getColor[1]===getColor[2]){
            overlay.classList.add("overlay-show");
            modalResult.classList.add("modal-show");
            message.innerHTML="You Won The Game 🏆";
            colorAttemp.innerHTML=`អ្នកបានគប់ត្រូវពណ៌ ${getColor[0]} ចំនួន​២ក្នុងការគប់៣ដង`;
         
        }
        else{
            overlay.classList.add("overlay-show");
            modalResult.classList.add("modal-show");
            message.innerHTML="You Lose The Game 💔";
            colorAttemp.innerHTML=`អ្នកមិនអាចស្វែងរក២ពណ៌ដូចគ្នាក្នុងការគប់៣ដងនោះឡើយ`;
            btnLookGift.style.display="none";
            pDeveloper.style.marginTop="130px";
        }
      }
      else{
        
      }
    
        
    }
    ballons[i].addEventListener("click",wow)
}

// Modal Play Started
modalPlay.classList.add("modal-show");
overlay.classList.add("overlay-show");
btnPlayGame.addEventListener("click",()=>{
    modalTell.classList.add("modal-show");
    musicBackground.play();
    modalPlay.classList.remove("modal-show");
    buttonClick.play();
})
// End Modal Play

// Modal Tell Started
btnNext.addEventListener("click",()=>{
    overlay.classList.remove("overlay-show");
    modalTell.classList.remove("modal-show");
    buttonClick.play();
})

btnHowToPlay.addEventListener("click",()=>{
    overlay.classList.add("overlay-show");
    modalTell.classList.add("modal-show");
    buttonClick.play();
})
// Modal Tell End



btnLookGift.addEventListener("click",()=>{
    modalGift.classList.add("modal-show");
    buttonClick.play();
})

// Track Gift
btnTrackGift.addEventListener("click",()=>{
    modalShowAllGift.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    buttonClick.play();
})

// End Track Gift

// Gift Modal
 btnClose.addEventListener("click",()=>{
    modalShowAllGift.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    buttonClick.play();
 })

// End Gift Modal



function restart(){
    // (()=>{
    //    ball.style.left="50%";
    //    ball.style.top="80vh";
    // })()
    // modalResult.classList.remove("modal-show");
    // overlay.classList.remove("overlay-show");
    // for(let i=0;i<buttons.length;i++){
    //     let ran=Math.floor(Math.random()*6)
    //     ballons[i].style.backgroundImage=`url(images/balloon${ran}.png)`;   
    // }
    // getColor=[];
    buttonClick.play();
    setTimeout(() => {
        location.reload();
    }, 1000);
 
}
btnPlayAgain[0].addEventListener("click",restart);
btnPlayAgain[1].addEventListener("click",restart);



// document.querySelector(".red").addEventListener("click",()=>{
//     modalPlay.classList.remove("modal-show");
//     overlay.classList.remove("overlay-show");
// })


// Remove spinner

setTimeout(() => {
    document.querySelector(".spinner-overlay").style.display="none";
    document.querySelector(".lds-ripple").style.display="none";
}, 1000);