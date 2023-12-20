const quoteText = document.querySelector(".quote");
const quoteauthor = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
instagram = document.querySelector(".instagram");
imagea = document.querySelector(".img");

//rendom 
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = "Loading Quote....";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        quoteauthor.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading');
    });
}

soundBtn.addEventListener("click", ()=>{
    voices = window.speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance(quoteText.innerText + 'by' +quoteauthor.innerText);
    msg.voice = voices[4];
    window.speechSynthesis.speak(msg);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})

instagram.addEventListener('click', ()=>{
    let url = "https://instagram.com/harshilchovatiyaa";
    window.open(url, "_blank");
})

quoteBtn.addEventListener("click", randomQuote);

