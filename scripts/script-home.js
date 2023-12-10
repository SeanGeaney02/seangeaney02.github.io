
// function to change the elemnts being displayed on the page
function elecPic() {
    // this is if the eltric car pic is not displayed which is default
    if (document.getElementById("elecCar").style.display = 'none') {
        // make this not visable
        document.getElementById("carBad").style.display = 'none';
        // make this not visable
        document.getElementById("carP").style.display = 'none';
        // make this not visable
        document.getElementById("GBtn").style.display = 'none';
        // make this visable
        document.getElementById("elecP").style.display = 'block';
        // make this visable
        document.getElementById("elecCar").style.display = 'block';
        // make this visable
        document.getElementById("BBtn").style.display = 'block';
        // change the background colour
        document.getElementById("carbonEmmissions").style.backgroundColor = 'lightgreen';
    }
}

function carBack() {
    // this is if the eletric car pic is being displayed
    if (document.getElementById("elecCar").style.display = 'block') {
        // do the reverse off above
        document.getElementById("carBad").style.display = 'block';
        document.getElementById("carP").style.display = 'block';
        document.getElementById("elecP").style.display = 'none';
        document.getElementById("elecCar").style.display = 'none';
        document.getElementById("BBtn").style.display = 'none';
        document.getElementById("GBtn").style.display = 'block';
        document.getElementById("carbonEmmissions").style.backgroundColor = 'rgb(236, 79, 79)';
    }
}

function solPic() {
    if (document.getElementById("solFac").style.display = 'none') {

        document.getElementById("colFac").style.display = 'none';
        document.getElementById("colP").style.display = 'none';
        document.getElementById("GBtn1").style.display = 'none';
        document.getElementById("solP").style.display = 'block';
        document.getElementById("solFac").style.display = 'block';
        document.getElementById("BBtn1").style.display = 'block';
        document.getElementById("coalBurn").style.backgroundColor = 'lightgreen';
    }
}

function colBack() {
    if (document.getElementById("solFac").style.display = 'block') {

        document.getElementById("colFac").style.display = 'block';
        document.getElementById("colP").style.display = 'block';
        document.getElementById("GBtn1").style.display = 'block';
        document.getElementById("solP").style.display = 'none';
        document.getElementById("solFac").style.display = 'none';
        document.getElementById("BBtn1").style.display = 'none';
        document.getElementById("coalBurn").style.backgroundColor = 'rgb(236, 79, 79)';
    }
}

function windPic() {
    if (document.getElementById("wind").style.display = 'none') {

        document.getElementById("oil").style.display = 'none';
        document.getElementById("oilP").style.display = 'none';
        document.getElementById("GBtn2").style.display = 'none';
        document.getElementById("windP").style.display = 'block';
        document.getElementById("wind").style.display = 'block';
        document.getElementById("BBtn2").style.display = 'block';
        document.getElementById("oilEnergy").style.backgroundColor = 'lightgreen';
    }
}

function oilBack() {
    if (document.getElementById("wind").style.display = 'block') {

        document.getElementById("oil").style.display = 'block';
        document.getElementById("oilP").style.display = 'block';
        document.getElementById("GBtn2").style.display = 'block';
        document.getElementById("windP").style.display = 'none';
        document.getElementById("wind").style.display = 'none';
        document.getElementById("BBtn2").style.display = 'none';
        document.getElementById("oilEnergy").style.backgroundColor = 'rgb(236, 79, 79)';
    }
}

function hydroPic() {
    if (document.getElementById("hydroPlant").style.display = 'none') {

        document.getElementById("nucPlant").style.display = 'none';
        document.getElementById("nucP").style.display = 'none';
        document.getElementById("GBtn3").style.display = 'none';
        document.getElementById("hydroP").style.display = 'block';
        document.getElementById("hydroPlant").style.display = 'block';
        document.getElementById("BBtn3").style.display = 'block';
        document.getElementById("nucEnergy").style.backgroundColor = 'lightgreen';
    }
}

function nucBack() {
    if (document.getElementById("hydroPlant").style.display = 'block') {

        document.getElementById("nucPlant").style.display = 'block';
        document.getElementById("nucP").style.display = 'block';
        document.getElementById("GBtn3").style.display = 'block';
        document.getElementById("hydroP").style.display = 'none';
        document.getElementById("hydroPlant").style.display = 'none';
        document.getElementById("BBtn3").style.display = 'none';
        document.getElementById("nucEnergy").style.backgroundColor = 'rgb(236, 79, 79)';
    }
}

