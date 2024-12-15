const songs = [
    { title: "Heya Jannatun", artist: "Humood Alkhudher", src: "/Assets/music1.mp3" },
    { title: "Jamalul Wujudin", artist: "The Beauty of Existence", src: "/Assets/music2.mp3" },
    { title: "Kuntu Maitn", artist: "Arabic Nasheed", src: "/Assets/music3.mp3" },
    { title: "Raqqat Aina Ya Shoqan", artist: "Maher Zain", src: "/Assets/music4.mp3" },
  ];
  
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("play-pause");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const repeatBtn = document.getElementById("repeat");
  const songTitle = document.getElementById("song-title");
  const songArtist = document.getElementById("song-artist");
  const progressBar = document.getElementById("progress-bar");
  const progressWrapper = document.querySelector(".progress-wrapper");
  const currentTimeEl = document.getElementById("current-time");
  const totalTimeEl = document.getElementById("total-time");
  
  let songIndex = 0;
  let isRepeating = false; // Repeat state
  
  // Load song
  function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audio.src = song.src;
  }
  
  // Play or Pause song
  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      audio.pause();
      playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
  }
  
  // Previous song
  function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
  }
  
  // Next song
  function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
  }
  
  // Toggle repeat functionality
  function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle("active", isRepeating);
    audio.loop = isRepeating; // Set the loop property of the audio element
  }
  
  // Update progress bar and time
  function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration);
  }
  
  // Format time
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  }
  
  // Seek
  function setProgress(e) {
    const width = progressWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }
  
  // Event listeners
  playPauseBtn.addEventListener("click", togglePlayPause);
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  repeatBtn.addEventListener("click", toggleRepeat);
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("ended", () => {
    if (!isRepeating) nextSong();
  });
  progressWrapper.addEventListener("click", setProgress);
  
  // Initialize
  loadSong(songs[songIndex]);
  
const tooltip = document.getElementById("tooltip");

// Function to calculate the time at the cursor position
function showTooltip(e) {
  const width = progressWrapper.clientWidth;
  const offsetX = e.offsetX; // Get the horizontal position of the cursor
  const duration = audio.duration;
  const hoverTime = (offsetX / width) * duration;

  // Format the hover time
  const formattedTime = formatTime(hoverTime);
  tooltip.textContent = formattedTime;

  // Position the tooltip
  tooltip.style.left = `${offsetX}px`;
  tooltip.style.display = "block";
}

// Function to hide the tooltip
function hideTooltip() {
  tooltip.style.display = "none";
}

// Add event listeners to the progress bar
progressWrapper.addEventListener("mousemove", showTooltip);
progressWrapper.addEventListener("mouseleave", hideTooltip);