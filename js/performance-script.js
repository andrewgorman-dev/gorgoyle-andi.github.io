// AUDIO PLAYER
let playButton = document.querySelector("#play");
let prevButton = document.querySelector("#prev");
let nextButton = document.querySelector("#next");
let range = document.querySelector("#range");
let cover = document.querySelector("#song-img");
let title = document.querySelector("#title");
let audio = document.querySelector("#audio");
let isPlaying = false; // use flag
let duration = 0;
let currentTime = 0;

// Set up Playlist - Load Songs
let songs = ["The Box You're Not In", "Moanin' (Bobby Timmons)", "Mimosa (H Winterstein)", "Blues en Mineur", "Googlin' (Horace Silver arr Andrew Gorman)"];
let songIndex = 3;
window.onload = loadSong(songs[songIndex]);

// EVENT LISTENERS
playButton.addEventListener('click', playSong);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

// FUNCTIONS
function loadSong(song) {
        title.innerText = song;
        audio.src = `../../audio/me-audio/${song}.mp3`;
        cover.src = `../../images/audio-player-images/${song}.jpg`;
}

function playSong() {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            duration = audio.duration;
            range.max = duration;
            playButton.src = "../../icons/pause-icon-color-scaled.png";
        }else{
            audio.pause();
            isPlaying = false;
            playButton.src = "../../icons/play-icon-color-orange-scaled.png";

        }
        range.addEventListener('change', function(){
            audio.currentTime = range.value;
        })

        audio.addEventListener('timeupdate', function(){
            range.value = audio.currentTime
        })
        audio.addEventListener('ended', function(){   // CHANGE TO AUTOPLAY NEXT SONG. CHECK FOR RANGE UPDATE WORKING PROPERLY
            audio.currentTime = 0;
            audio.pause();
            isPlaying = false;
            range.value = 0;
            playButton.src = "../../icons/play-icon-color-orange-scaled.png";
        })
}


function nextSong() {
        songIndex++;
        if (isPlaying) {
            isPlaying = false;
        }else if (!isPlaying) {
            isPlaying = true;
        }

        if (songIndex > songs.length - 1) {
            songIndex = 0
        }

        loadSong(songs[songIndex]);
        

        playSong();
}

function prevSong() {
        songIndex--;
        if (isPlaying) {
            isPlaying = false;
        }else if (!isPlaying) {
            isPlaying = true;
        }

        if (songIndex < 0) {
            songIndex = songs.length - 1;
        }

        loadSong(songs[songIndex]);

        playSong();
}


// Video Gallery
var video = document.querySelectorAll('video');

video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');

    if(play.paused){
        play.play();
    }else{
        play.pause();
        play.currentTime = 0;
    }
}));
