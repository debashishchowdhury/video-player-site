document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('myVideo');

    // Add error handling for video
    video.addEventListener('error', function() {
        console.error('Error loading video:', video.error);
        alert('Error loading video. Please check if the video file exists and is in the correct format.');
    });

    playButton.addEventListener('click', function() {
        // Show video container
        videoContainer.style.display = 'block';
        // Play the video
        video.play().catch(function(error) {
            console.error('Error playing video:', error);
            alert('Error playing video. Please try again.');
        });
        // Hide the button
        playButton.style.display = 'none';
    });

    // When video ends, show the button again and hide video
    video.addEventListener('ended', function() {
        videoContainer.style.display = 'none';
        playButton.style.display = 'block';
    });
});