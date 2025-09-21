document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.querySelector('.video-container');
    const videoFrame = document.getElementById('myVideo');

    playButton.addEventListener('click', function() {
        // Set the video source when button is clicked (this ensures autoplay works)
        videoFrame.src = "https://drive.google.com/file/d/1HowSVqG6u6BVlf2tZxkrpbEl6tJb57FZ/preview?autoplay=1";
        
        // Show video container
        videoContainer.style.display = 'block';
        // Hide the button
        playButton.style.display = 'none';

        // Force focus on iframe to ensure autoplay works
        videoFrame.focus();
    });

    // Listen for messages from the iframe
    window.addEventListener('message', function(event) {
        if (event.data === 'ended') {
            // Video has ended
            videoContainer.style.display = 'none';
            playButton.style.display = 'block';
            // Clear the source to reset the video
            videoFrame.src = '';
        }
    });
});