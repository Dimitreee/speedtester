const imageAddr = "https://wallpaperswide.com/download/shadow_of_the_tomb_raider_2018_puzzle_video_game-wallpaper-7680x4800.jpg" + "?n=" + Math.random();
let startTime, endTime;
const downloadSize = 5616998; //5.36Mb
const roundedDecimals = 2;
const bytesInAKilobyte = 1024;

function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = ( bitsLoaded / duration ).toFixed(roundedDecimals);
    var displaySpeed = speed(speedBps);
    var results = displaySpeed.value + " " + displaySpeed.units;

    $('.icon').hide()
    $('.loader').fadeOut('fast')
    $('.button-text').css("margin", 0)

    $('.button-text').text(results);
}

function speed( bitsPerSecond ){
    var KBps = (bitsPerSecond / bytesInAKilobyte).toFixed(roundedDecimals);
    if ( KBps <= 1 ) return { value: bitsPerSecond, units: "Bps" };
    var MBps = (KBps / bytesInAKilobyte).toFixed(roundedDecimals);
    if ( MBps <= 1 ) return { value: KBps, units: "KBps" };
    else return { value: MBps, units: "MBps" };
}

$('#starttest').on('click', function(){
    $('#starttest').addClass('active')
    $('.button-text').text('Downloading...');
    $('#starttest').prop('disabled', true);

    $('.icon').hide()
    $('.loader').fadeIn('fast')

    const download = new Image();
    startTime = undefined, endTime = undefined


    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    startTime = (new Date()).getTime();
    download.src = imageAddr;
})
