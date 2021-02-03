// main.js

// TODO

/*
    Get all element objects to be used for better readability.
*/
var soundImage = document.getElementById('sound-image');

var partyHornForm = document.getElementById('party-horn-form');
var volumeImage = document.getElementById('volume-image');
var volumeNumber = document.getElementById('volume-number');
var volumeSlider = document.getElementById('volume-slider');

var audioSelection = document.getElementById('audio-selection');

var hornSound = document.getElementById('horn-sound');

var honkBtn = document.getElementById('honk-btn');

/*
    Get the volume with either changing number or using slider.
    Change number with slider and vice versa.
    Call functions to check volume, change volume, and icon images.
*/
volumeNumber.addEventListener('input', getVolume);
volumeSlider.addEventListener('input', getVolume);
function getVolume(event) {
    let volume = event.target.value;
    volumeSlider.value = volume;
    volumeNumber.value = volume;
    checkVolume(volume);
    changeVolume(volume);
    changeVolumeIcon(volume);
}

/*
    Increase/decrease volume based on volume number.
    Can use volumeNumber or volumeSlider
*/
function changeVolume(volume) {
    hornSound.volume = volume / volumeNumber.max;
}

/* 
    Based on radio selection, change the sound. 
*/
audioSelection.addEventListener('change', changeHornSound);
function changeHornSound(event) {
    let sound = event.target.id;

    if (sound == "radio-air-horn") {
        hornSound.src = "./assets/media/audio/air-horn.mp3";
    } 
    else if (sound == "radio-car-horn") {
        hornSound.src = "./assets/media/audio/car-horn.mp3";
    } 
    else if (sound == "radio-party-horn"){
        hornSound.src = "./assets/media/audio/party-horn.mp3";
    }
}

/* 
    Based on radio selection, change the image. 
*/
audioSelection.addEventListener('change', changeSoundImage);
function changeSoundImage(event) {
    let sound = event.target.id;

    if (sound == "radio-air-horn") {
        soundImage.src = "./assets/media/images/air-horn.svg";
    } 
    else if (sound == "radio-car-horn") {
        soundImage.src = "./assets/media/images/car.svg";
    } 
    else if (sound == "radio-party-horn"){
        soundImage.src = "./assets/media/images/party-horn.svg";
    }
}

/*
    Change the volume icon depending on volume-level.
*/
function changeVolumeIcon(volume) {
    if (volume >= 67 && volume <= 100) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    } 
    else if (volume >= 34 && volume <= 66) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    } 
    else if (volume >= 1 && volume <= 33) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    } 
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
}

/* 
    Check volume.
    If volume is 0, disable button.
    If volume is >1, button is available.
*/
function checkVolume(volume) {
    honkBtn.disabled = false;

    if (volume == 0) {
        honkBtn.disabled = true;
    }
    else {
        honkBtn.disabled = false;
    }
}

/* To prevent reload */
partyHornForm.addEventListener('submit', preventReload);
function preventReload(event) {
    event.preventDefault();
    hornSound.play();
}