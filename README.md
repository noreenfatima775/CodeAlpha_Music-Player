# Music Player

This project is a modern, user-friendly music player with an elegant and responsive design. It focuses on providing a seamless UI/UX experience while incorporating essential functionality for audio playback.

## Features

### Core Features:

- **Play/Pause Button**: Start or stop the currently loaded song.
- **Next/Previous Buttons**: Navigate between songs in the playlist.
- **Repeat Button**: Toggle looping for the current song (visual feedback for active state).
- **Progress Bar with Tooltip**: Displays the current playback progress and allows users to seek to any part of the song. A tooltip provides precise time details when hovering over the progress bar.

### UI/UX Enhancements:

- **Clean and Modern Design**: The layout is centered and styled with a dark theme for an immersive experience.
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Interactive Controls**: Buttons have hover effects, and the active state of the repeat button is visually distinct.
- **Tooltip Integration**: Real-time updates of playback time when hovering over the progress bar.

## Technologies Used

### Frontend:

- **HTML5**: Structure of the player.
- **CSS3**: Styling and animations for a polished look.
- **JavaScript (ES6)**: Logic for audio playback, button interactions, and dynamic UI updates.

### Libraries:

- **Font Awesome**: Icons for playback controls.




## Folder Structure

project-folder/
├── index.html       # Main HTML file
├── style.css        # Stylesheet for the music player
├── script.js        # JavaScript file for functionality
├── Assets/          # Folder for audio files
    ├── music1.mp3
    ├── music2.mp3
    ├── music3.mp3
    ├── music4.mp3


## How to Use

### Load Songs:
Songs are preloaded in the `songs` array in `script.js`. Each song has a title, artist, and source file path.

### Playback Controls:
- Click the **Play/Pause** button to start or stop the audio.
- Use the **Next** and **Previous** buttons to navigate through the playlist.
- Toggle the **Repeat** button to loop the current song. The button background changes when repeat mode is active.

### Seek Playback:
- Click on the progress bar to jump to a specific part of the song. Hovering over the bar displays a tooltip with the exact time.

## Customization

### Add New Songs:
Update the `songs` array in `script.js` with new entries. Example:

```javascript
const songs = [
  { title: "New Song", artist: "New Artist", src: "path/to/new-song.mp3" },
];
```

## Styling:
Modify `style.css` to adjust colors, fonts, or layout to your preference.

## Contributing

Feel free to fork the repository and submit pull requests. Suggestions and improvements are always welcome!

## Acknowledgments

- **Font Awesome** for the beautiful icons.
- Inspiration from modern music player designs.

Enjoy using this Music Player! Feel free to reach out with feedback or questions.


