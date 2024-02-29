const cover = [
    'images/cover1.jpg'
    ];

const songs = [
    'music/specialz.mp3',
    'music/put.mp3',
    'music/Moye Moye.mp3'
    ];

const currentSong = 0;
const totalSong = songs.length;

function songPlay() {
    song.src = songs[currentSong];
    song.play()
}

// console.log(songs)

const song = new Audio();
song.src = "music/specialz.mp3";
//console.log(song)

const play = document.querySelector("#play");
const seek = document.getElementById("seek");
const volume = document.getElementById("volume");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

play.addEventListener('click', () => {

    if (song.paused) {
        song.play();
        play.innerHTML = "Pause";
        document.getElementById("image").classList.add("anime");
    } else if (song.ended) {
        song.currentTime = 0;
        //document.getElementById('image').classList.remove("anime")
    } else {
        song.pause();
        play.innerHTML = "Play";
        document.getElementById("image").classList.remove("anime");
    }
});

song.addEventListener("timeupdate", function() {
    seek.value = song.currentTime / song.duration;
    if (seek.value == 1) {
        play.innerHTML = "Play";
        document.getElementById("image").classList.remove("anime");
    }
    // console.log(seek)
});

volume.addEventListener("change", function(e) {
    song.volume = e.currentTarget.value / 100;
    //console.log(e)
});

next.addEventListener("click", () => {
    currentSong++;
    if (currentSong > 2) {
        currentSong = 0;
    }
    songPlay();

    //song.src = songs[currentSong];
    play.innerHTML = "Pause";
    document.getElementById("image").classList.add("anime");
});

prev.addEventListener("click", () => {
    currentSong--;
    if (currentSong < 0) {
        currentSong = 2;
    }

    songPlay();
    document.getElementById("image").classList.add("anime");
    play.innerHTML = "Pause";
});