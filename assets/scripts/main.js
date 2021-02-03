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
}

