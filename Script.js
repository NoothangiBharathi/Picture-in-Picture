const video = document.getElementById('mainVideo');
const pipButton = document.getElementById('pipButton');

pipButton.addEventListener('click', async () => {
    // Check if the video is already in Picture-in-Picture
    if (document.pictureInPictureElement) {
        // Exit Picture-in-Picture
        await document.exitPictureInPicture();
    } else {
        try {
            // Request to enter Picture-in-Picture
            await video.requestPictureInPicture();
        } catch (error) {
            console.error('Error with Picture-in-Picture:', error);
        }
    }
});
