
const videos = [
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3')
];

let current = 0;

videos.forEach(video => {
    video.addEventListener('timeupdate', updateProgress);
});

function switchAngle(index) {
    const currentTime = videos[current].currentTime;
    const wasPlaying = !videos[current].paused;
    videos[current].pause();
    videos[current].style.display = 'none';

    current = index - 1;
    videos[current].currentTime = currentTime;
    videos[current].style.display = 'block';
    if (wasPlaying) {
        videos[current].play();
    }
}

function togglePlay() {
    const video = videos[current];
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateProgress() {
    const video = videos[current];
    const progress = document.getElementById('progress-bar');
    progress.value = (video.currentTime / video.duration) * 100;
}

document.getElementById('progress-bar').addEventListener('input', function() {
    const video = videos[current];
    video.currentTime = (this.value / 100) * video.duration;
});

function changeSpeed(rate) {
    videos.forEach(video => {
        video.playbackRate = parseFloat(rate);
    });
}

function changeZoom(scale) {
    document.getElementById('video-container').style.transform = `scale(${scale})`;
}
