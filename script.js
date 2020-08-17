let audioTrack = document.querySelector("audio");
let article = document.querySelector("#article");
let listen = document.querySelector('.listen');
let listenAgain = document.querySelector('.listenagain');


listen.addEventListener('click', () => {
    if(audioTrack.paused)       {
    audioTrack.play();
    }
    else {
        audioTrack.pause();    
    }   
});

listenAgain.addEventListener('click', () => {
    audioTrack.currentTime = 0;
    audioTrack.play();
});

audioTrack.currentTime = 0;
syncData = [
    { "start": 18.726, "end": 26.930, "text": "Call it magic, call it true" },
    { "start": 29.330, "end": 38.640, "text": "I call it magic when I'm with you" },
    { "start": 39.806, "end": 48.324, "text": "And I just got broken, broken into two" },
    { "start": 49.252, "end": 58.806, "text": "Still I call it magic, when I'm next to you" },
    { "start": 60.762, "end": 64.641, "text": "And I don't, and I don't, and I don't, and I don't" },
    { "start": 65.617, "end": 66.570, "text": "No I don't, it's true" },
    { "start": 66.736, "end": 69.175, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 70.363, "end": 71.636, "text": "Want anybody else but you" },
    { "start": 72.242, "end": 74.601, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 75.617, "end": 76.570, "text": "No I don't, it's true" },
    { "start": 77.336, "end": 79.175, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 80.363, "end": 81.636, "text": "Want anybody else but you" },
    { "start": 85.636, "end": 88, "text": "Ooh ooh ooh" },
    { "start": 91.656, "end": 98.124, "text": "Call it magic, cut me into two" },
    { "start": 101.246, "end": 110, "text": "And with all your magic, I disappear from view" },
    { "start": 112, "end": 120, "text": "And I can't get over, can't get over you" },
    { "start": 122, "end": 129, "text": "Still, I call it magic, such a precious jewel" },
    { "start": 133, "end": 137.081, "text": "And I don't, and I don't, and I don't, and I don't" },
    { "start": 137.083, "end": 138.562, "text": "No I don't, it's true" },
    { "start": 138.572, "end": 142.211, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 142.212, "end": 143.5, "text": "Want anybody else but you" },
    { "start": 143.6, "end": 146, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 146.8, "end": 148.4, "text": "No I don't, it's true" },
    { "start": 148.5, "end": 152.28, "text": "I don't, no, I don't, no, I don't, no, I don't" },
    { "start": 152.29, "end": 153.5, "text": "Want anybody else but you" },
    { "start": 154.2, "end": 161.4, "text": "Wanna fall, I fall so far" },
    { "start": 163.9, "end": 171.4, "text": "I wanna fall, fall so hard" },
    { "start": 173, "end": 175, "text": "And I call it magic" },
    { "start": 178, "end": 180, "text": "And I call it true" },
    { "start": 184, "end": 191, "text": "Call it magic" },
    { "start": 203.8, "end": 213, "text": "Ooh ooh ooh" },
    { "start": 214.1, "end": 216.8, "text": "And if you were to ask me" },
    { "start": 219, "end": 221.5, "text": "After all that we've been through" },
    { "start": 224.3, "end": 227.7, "text": "Still believe in magic?" },
    { "start": 229.8, "end": 231.4, "text": "Well yes, I do" },
    { "start": 234.3, "end": 248.6, "text": "Oh yes, I do" },
    { "start": 250.3, "end": 253, "text": "Of course I do" }
];

syncData.forEach((el, index) => {
    let element = document.createElement('div');
    element.setAttribute("id", "c_" + index);
    element.innerText = el.text;
    article.appendChild(element);
    element.addEventListener('click', (event) => {
        audioTrack.currentTime = el.start;
    })
});

audioTrack.addEventListener("timeupdate", function (e) {

    syncData.forEach((el, index) => {
        let element = document.querySelector(`#c_${index}`);
        if (audioTrack.currentTime >= el.start && audioTrack.currentTime <= el.end) {
            element.classList.add('active');
        }
        else{
            element.classList.remove('active');
        }
        console.log('Still Love You');
    });
}
);


