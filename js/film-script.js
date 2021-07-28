// SHOEMAKER PLAYER
// Define Variables (const or let - should be wurscht!)
let title1 = document.querySelector('#title1');
// alert(title1.innerText);
const audio1 = document.querySelector('#audio1');
const musCont1 = document.querySelector('.music-container1');
const progCont1 = document.querySelector('#progress-container1');
const progress1 = document.querySelector('#progress1');
const playBtn1 = document.querySelector('#play1');
const prevBtn1 = document.querySelector('#prev1');
const nextBtn1 = document.querySelector('#next1');
const cover1 = document.querySelector('#cover1');

// musCont1.classList.add('play');

const songs1 = ['I - The Boy', 'II - The Cobbler', 'III - Enslaved', 'IV - The Plan', 'V - Escape to Freedom'];
let songIndex1 = 0;

// alert(songs1[songIndex1]);


// Load songs to DOM
loadSong1(songs1[songIndex1]);


// Functions
function loadSong1(song1) {
    title1.innerText = song1;
    audio1.src = `../../audio/shoemaker-suite/${song1}.mp3`;
    cover1.src = `../../icons/records/shoemaker-rec/${song1}.png`;
}

function playSong1() {
    musCont1.classList.add('play');
    playBtn1.src = '../../icons/pause-icon-color-scaled.png';
    audio1.play();
}

function pauseSong1() {
    musCont1.classList.remove('play');
    playBtn1.src = '../../icons/play-icon-color-orange-scaled.png'
    audio1.pause();
}

function prevSong1() {
    songIndex1--

    if (songIndex1 < 0) {
        songIndex1 = songs1.length - 1;
    }

    loadSong1(songs1[songIndex1]);

    playSong1();

}

function nextSong1 () {
    songIndex1++

    if (songIndex1 > songs1.length - 1) {
        songIndex1 = 0;
    }

    loadSong1(songs1[songIndex1]);
    
    playSong1();

}

// e = event - this function takes an event
function updateProgress1(e) {
    // console.log(e.srcElement.currentTime);
    // console.log(e.srcElement.duration);
    const {duration, currentTime} = e.srcElement;
    const progressPercent1 = (currentTime/duration) * 100;
    progress1.style.width = `${progressPercent1}%`;
}

function setProgress1(e) {
    const width1 = this.clientWidth;
    // console.log(width1);
    const clickX = e.offsetX;
    const duration = audio1.duration;
    audio1.currentTime = (clickX / width1) * duration;
}

playBtn1.addEventListener('click', () => {
    const isPlaying1 = musCont1.classList.contains('play');

    if (isPlaying1) {
        pauseSong1();
    }else{
        playSong1();
    }
});

// Event Listeners
prevBtn1.addEventListener('click', prevSong1);
nextBtn1.addEventListener('click', nextSong1);

audio1.addEventListener('timeupdate', updateProgress1);
progCont1.addEventListener('click', setProgress1);

audio1.addEventListener('ended', nextSong1);

// ##################################################################

// MISC-FILM PLAYER

let cover2 = document.querySelector("#master-img2");
let musCont2 = document.querySelector(".music-container2");
let progCont2 = document.querySelector(".prog-cont2");
let progress2 = document.querySelector(".progress2");
let audio2 = document.querySelector("#audio2");
let record2 = document.querySelector("#record2");
let title2 = document.querySelector("#title2");
let prevBtn2 = document.querySelector("#prev2");
let playBtn2 = document.querySelector("#play2");
let nextBtn2 = document.querySelector("#next2");

const songs2 = ["Tango for the Road Not Taken", "Hula Walzer", "The Road Not Taken End Credits", "Landscape Arid"];
let songIndex2 = 0;

// Load into DOM
loadSong2(songs2[songIndex2]);


// Functions
function loadSong2(song2) {
    title2.innerText = song2;
    audio2.src = `../../audio/film-music/${song2}.mp3`
    cover2.src = `../../images/film-player-images/${song2}.jpg`;
    record2.src = `../../icons/records/film-player-records/${song2}.png`;
};

function playSong2() {
    musCont2.classList.add('play');
    playBtn2.src = '../../icons/pause-icon-green-scaled.png';
    audio2.play();
}

function pauseSong2() {
    musCont2.classList.remove('play');
    playBtn2.src ="../../icons/play-icon-color-turquoise-scaled.png";
    audio2.pause();
};

function prevSong2() {
    songIndex2--

    if (songIndex2 < 0) {
        songIndex2 = songs2.length - 1;
    }

    loadSong2(songs2[songIndex2]);

    playSong2();
};

function nextSong2() {
    songIndex2++

    if (songIndex2 > songs2.length - 1) {
        songIndex2 = 0;
    }

    loadSong2(songs2[songIndex2]);

    playSong2();

}

function updateProgress2(e) {
    // console.log(e.srcElement.currentTime);
    // console.log(e.srcElement.duration);
    const {duration, currentTime} = e.srcElement;
    const progressPercent2 = (currentTime/duration) * 100;
    progress2.style.width = `${progressPercent2}%`;
}

function setProgress2(e) {
    const width2 = this.clientWidth;
    // console.log(width1);
    const clickX = e.offsetX;
    const duration = audio2.duration;
    audio2.currentTime = (clickX / width2) * duration;
}

// Event Listeners
playBtn2.addEventListener('click', () => {
    const isPlaying2 = musCont2.classList.contains('play');

    if (isPlaying2) {
        pauseSong2();
    }else{
        playSong2();
    }
});

prevBtn2.addEventListener('click', prevSong2);
nextBtn2.addEventListener('click', nextSong2);
audio2.addEventListener('timeupdate', updateProgress2);
audio2.addEventListener('ended', nextSong2);
progCont2.addEventListener('click', setProgress2);



// VIDEO SLIDER ******************************************###################################

// let videoTitle = document.querySelector(".video-title");
// let slider = document.querySelector("#slider");
// let navSlides = document.querySelector(".navigation");
// let company = document.querySelector(".company");
// let henry = document.querySelector(".henry");
// let hula = document.querySelector(".hula");
// let journey = document.querySelector(".journey");
// let tanzspiel = document.querySelector(".tanzspiel");
// let mary = document.querySelector(".mary");

// slider.onplaying = function() {navFade()};
// slider.onpause = function() {navIn()};

// function navFade() {
//     navSlides.style.opacity = 0;
// };

// function navIn() {
//     navSlides.style.opacity = 1;
// }


// Change Video from NavSlides
// company.addEventListener('click', () => {
//     console.log(company.innerText);
//     const title = company.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });

// henry.addEventListener('click', () => {
//     console.log(henry.innerText);
//     const title = henry.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });

// hula.addEventListener('click', () => {
//     console.log(hula.innerText);
//     const title = hula.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });

// journey.addEventListener('click', () => {
//     console.log(journey.innerText);
//     const title = journey.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });

// tanzspiel.addEventListener('click', () => {
//     console.log(tanzspiel.innerText);
//     const title = tanzspiel.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });

// mary.addEventListener('click', () => {
//     console.log(mary.innerText);
//     const title = mary.innerText; 
//     slider.src = `../../video/film-score/${title}.mp4`;
//     videoTitle.innerHTML = title;
//     slider.play();
// });





// function videoUrl(clip) {
//     document.getElementById("slider").src = clip;
// }