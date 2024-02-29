(function() {
    const pianoKeys = document.querySelectorAll(".piano-keys .key");
    const volumeSlider = document.querySelector(".volume-slider input");
    const keysCheckbox = document.querySelector(".keys-checkbox input");

    const getAudioPath = (key='a') => `audio/${key}.wav`;
    let allKeys = []
    let audio = new Audio(getAudioPath());
    const playTune = (key) => {
        audio.src = getAudioPath(key);
        audio.play();
    }
    pianoKeys.forEach(key => {
        allKeys.push(key.dataset.key);
        key.addEventListener("click", () => playTune(key.dataset.key));
    });
    const handleVolume = (e) => {
        audio.volume = e.target.value;
    }
    const showHideKeys = () => pianoKeys.forEach(key => key.classList.toggle("hide"));

    const pressedKey = (e) => {
        if(allKeys.includes(e.key)) playTune(e.key);
    }
    keysCheckbox.addEventListener("click", showHideKeys);
    volumeSlider.addEventListener("input", handleVolume);
    document.addEventListener("keydown", pressedKey);
})()
