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
    changeVolume(volume);
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