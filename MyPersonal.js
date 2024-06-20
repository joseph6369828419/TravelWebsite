let currentIndex = 0;
const slider = document.getElementById('slider');
const videos = slider.children.length;

// Function to play the current video
function playCurrentVideo() {
    const videos = document.querySelectorAll('video');
    videos.forEach((video, index) => {
        if (index === currentIndex) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
}

// Function to move slider and play current video
function moveSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= videos) {
        currentIndex = videos - 1;
    }
    slider.style.transform = `translateY(${-currentIndex * 500}px)`;
    playCurrentVideo();
}

// Event listener for video click to toggle play/pause
slider.addEventListener('click', function(event) {
    const clickedVideo = event.target;
    if (clickedVideo.tagName === 'VIDEO') {
        if (clickedVideo.paused) {
            clickedVideo.play();
        } else {
            clickedVideo.pause();
        }
    }
});

// Initial play of the first video
playCurrentVideo();


let isLiked = false;

function changeLikeImage() {
    const likeIcon = document.getElementById('like-icon');

    if (isLiked) {
        likeIcon.src = 'image/heart.png'; // Change back to heart.png
    } else {
        likeIcon.src = 'image/like.png'; // Change to like.png
    }

    isLiked = !isLiked; // Toggle the state
}