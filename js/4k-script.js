// 4K-AUDIO PLAYER
// Define Variables
let songName = document.querySelector('#title');
let prevButton = document.querySelector('#prev-button');
let playButton = document.querySelector('#play-button');
let nextButton = document.querySelector('#next-button');
let tune = document.querySelector('#audio');
let isPlaying = false;
let range = document.querySelector('#range');
let duration = 0;
let currentTime = 0;

// Playlist
let songs = ["The Hay Burner (Count Basie arr Milan Wisiak)", "Sepps Siebte Septime (Daniel Bierdümpfl)", "Googlin' (Horace Silver arr Andrew Gorman)"];
let songIndex = 0;

// On Page Load = Load Songs 
 loadSong(songs[songIndex]);  // window.onload =

// Add Event Listeners
playButton.addEventListener('click', playSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);


// Define Functions
function loadSong(song) {
        songName.innerText = song;
        tune.src = `../../audio/4k-audio/${song}.mp3`;
}

function playSong() {
        if (!isPlaying) {
            tune.play();
            isPlaying = true;
            playButton.src = "../../icons/pause-icon-color-4k.png";
            duration = tune.duration;
            range.max = duration; 
            songName.style.opacity = 0.82;
            range.style.opacity = 0.82;
        }else{
            tune.pause();
            isPlaying = false;
            playButton.src = "../../icons/play-icon-color-4k.png";
            songName.style.opacity = 0;
            range.style.opacity = 0;
        }
        range.addEventListener('change', function() {
            tune.currentTime = range.value;
        })
        tune.addEventListener('timeupdate', function() {
            range.value = tune.currentTime;
        })
        tune.addEventListener('ended', function() {
            tune.pause();
            isPlaying = false;
            tune.currentTime = 0;
            range.value = 0;
            playButton.src = "../../icons/play-icon-color-4k.png";
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