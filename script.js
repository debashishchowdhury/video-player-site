document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.querySelector('.video-container');

    playButton.addEventListener('click', function() {
        // Show video container
        videoContainer.style.display = 'block';
        // Hide the button
        playButton.style.display = 'none';
    });
});