let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

console.log("welcome to Spoko");

//initialize the variables
console.log("welcome to Spoko");

//initialize the variables
let index=0;
let audioElement = new Audio('song/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let song=[
    {songName: "Agar tum sath ho - jalraj", filePath: "song/0.mp3", coverpath: "bructopictures/cover1.jpg"},
    {songName: "Dewaane hum nehi hote (slowe + revarb)", filePath: "song/1.mp3", coverpath: "bructopictures/cover2.jpg"},
    {songName: "(Saajna x Aadat x Sajni)- jalraj", filePath: "song/2.mp3", coverpath: "bructopictures/cover3.jpg"},
    {songName: "Kesariya(slow + revarb)", filePath: "song/3.mp3", coverpath: "bructopictures/cover4.jpg"},
    {songName: "To phir Aao(lofi)", filePath: "song/4.mp3", coverpath: "bructopictures/cover5.jpg"},
    {songName: "Saibo x Jashne-bahare x Iktara", filePath: "song/5.mp3", coverpath: "bructopictures/cover6.jpg"},
    {songName: "Awara sham hain(lofi)", filePath: "song/6.mp3", coverpath: "bructopictures/cover7.jpg"},
    {songName: "Jab koi baat(atif aslam)", filePath: "song/7.mp3", coverpath: "bructopictures/cover8.jpg"},
    {songName: "Tuhi Haqeeqat(Reprise)-Jalraj", filePath: "song/8.mp3", coverpath: "bructopictures/cover9.jpg"},
    {songName: "Ek villain x Ek villain returns", filePath: "song/9.mp3", coverpath: "bructopictures/cover10.jpg"},
]

songItems.forEach((Element,i) =>{
    Element.getElementsByTagName("img")[0].src = song[i].coverpath;
    Element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
// audio element play

// handle play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);    //doing multiply this 100 it will show me how long it's going on.
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;   //formula of current time.
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays(); 
        index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${index}.mp3`;
        masterSongName.innerText = song[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=9){
        index = 0
    }
    else{
        index += 1;
    }
    audioElement.src = `song/${index}.mp3`;
    masterSongName.innerText = song[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioElement.src = `song/${index}.mp3`;
    masterSongName.innerText = song[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
