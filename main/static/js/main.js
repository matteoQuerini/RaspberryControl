/* Creazione dinamica degli switch */
const SWITCH_TOTALI = 20;
const switchesGroup = document.getElementById('switchesGroup');
const logConsole = document.getElementById('console');

for (let i = 1; i <= SWITCH_TOTALI; i++) {
  const switchHTML = `
          <div class="switch-container">
            <label class="switch">
                <input type="checkbox" id="relay${i}Switch" class="relay-switch">
                <span class="slider"></span>
            </label>
            <span id="relay${i}Label">Relay ${i}</span>
          </div>
        `;
  switchesGroup.innerHTML += switchHTML;
}

// Elemento audio per la riproduzione musicale
const audioPlayer = document.createElement('audio');
audioPlayer.id = 'audioPlayer';
audioPlayer.controls = true;
audioPlayer.style.display = 'none';
document.body.appendChild(audioPlayer);

// Variabili globali per la gestione musicale
let currentPlaylist = [];
let currentTrackIndex = -1;

// Listener per gli switch
document.querySelectorAll('.relay-switch').forEach(switchElement => {
  switchElement.addEventListener('change', function () {
    const relayId = this.id.replace('Switch', '');
    const currentState = this.checked;
    const switchState = currentState ? 'ON' : 'OFF';

    logConsole.innerHTML += `${new Date().toLocaleTimeString()}: ${relayId} ${switchState}<br>`;
    logConsole.scrollTop = logConsole.scrollHeight;
  });
});

/*--------------------------------------*/

/* Creazione dinamica dei bottoni della musica */
const commands = ['play', 'stop', 'next', 'previous'];
const container = document.querySelector('.musicCommand-group');

commands.forEach(cmd => {
  const newButton = document.createElement('button');
  newButton.className = 'music-button';
  newButton.textContent = cmd;
  newButton.id = `button-${cmd}`;

  newButton.addEventListener('click', () => {
    logConsole.innerHTML += `${new Date().toLocaleTimeString()}: ${cmd}<br>`;
    logConsole.scrollTop = logConsole.scrollHeight;

    switch (cmd) {
      case 'play':
        audioPlayer.play();
        break;
      case 'stop':
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        break;
      case 'next':
        playNextTrack();
        break;
      case 'previous':
        playPreviousTrack();
        break;
    }
  });

  container.appendChild(newButton);
});

/*--------------------------------------*/

const fileInput = document.getElementById('fileInput');
const menuFile = document.getElementById('songSelector');
const uploadButton = document.getElementById('uploadButton');

const storedFiles = {};
fileInput.style.display = 'none';

function addFileToSelector(file) {
  const fileName = file.name;
  const fileExtension = fileName.split('.').pop().toLowerCase();

  const audioExtensions = ['mp3', 'wav', 'ogg'];
  if (!audioExtensions.includes(fileExtension)) {
    logConsole.innerHTML += `${new Date().toLocaleTimeString()}: Formato non supportato: ${fileName}<br>`;
    logConsole.scrollTop = logConsole.scrollHeight;
    return;
  }

  const fileURL = URL.createObjectURL(file);
  storedFiles[fileName] = fileURL;

  const option = document.createElement('option');
  option.value = fileName;
  option.textContent = fileName;

  menuFile.appendChild(option);
  logConsole.innerHTML += `${new Date().toLocaleTimeString()}: File aggiunto: ${fileName}<br>`;
  logConsole.scrollTop = logConsole.scrollHeight;

  currentPlaylist.push(fileName);

  if (currentPlaylist.length === 1) {
    currentTrackIndex = 0;
    menuFile.value = fileName;
    audioPlayer.src = fileURL;
  }
}

// Listener per il caricamento file
fileInput.addEventListener('change', function (e) {
  const files = e.target.files;

  if (files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      addFileToSelector(files[i]);
    }
    fileInput.value = '';
  }
});

// Listener per il pulsante Upload
uploadButton.addEventListener('click', function () {
  fileInput.click();
});

// Listener per la selezione nel menu
menuFile.addEventListener('change', function () {
  const selectedFileName = this.value;
  const selectedFileURL = storedFiles[selectedFileName];

  if (selectedFileURL) {
    logConsole.innerHTML += `${new Date().toLocaleTimeString()}: File selezionato: ${selectedFileName}<br>`;
    logConsole.scrollTop = logConsole.scrollHeight;

    currentTrackIndex = currentPlaylist.indexOf(selectedFileName);
    audioPlayer.src = selectedFileURL;
  }
});

/* Funzioni per la gestione della playlist */
function playNextTrack() {
  if (currentPlaylist.length === 0) {
    return
  };

  currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
  const nextTrack = currentPlaylist[currentTrackIndex];
  audioPlayer.src = storedFiles[nextTrack];
  menuFile.value = nextTrack;
  audioPlayer.play();
}

function playPreviousTrack() {
  if (currentPlaylist.length === 0) {
    return
  };

  currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  const prevTrack = currentPlaylist[currentTrackIndex];
  audioPlayer.src = storedFiles[prevTrack];
  menuFile.value = prevTrack;
  audioPlayer.play();
}

/*--------------------------------------*/


const volumSlider = document.getElementById("volumSlider");
const currentVolumSliderValue = parseInt(volumSlider.value);


volumSlider.addEventListener('input', () => {
  const volumeValue = parseFloat(volumSlider.value) / 10;
  audioPlayer.volume = volumeValue;
  
  logConsole.innerHTML += `${new Date().toLocaleTimeString()}: Volume impostato a ${Math.round(volumeValue * 100)}%<br>`;
});

// Imposta il volume iniziale al caricamento
audioPlayer.volume = parseFloat(volumSlider.value) / 100;


/*--------------------------------------*/


const lightSlider = document.getElementById("lightSlider");
const currentLightSliderValue = parseInt(lightSlider.value);


lightSlider.addEventListener('input', () => {
  const lightValue = parseFloat(lightSlider.value) / 10;

  
  logConsole.innerHTML += `${new Date().toLocaleTimeString()}: Luce impostata a ${Math.round(lightValue * 100)}%<br>`;
});