const urlParams = new URLSearchParams(window.location.search);

if (document.getElementById("blazer") && document.getElementById('blazer').innerHTML === 'Official <span>Blazer</span> Service') {
if (urlParams.get("episode")) {
document.getElementById('content').style.display = 'none'
  
  var video = document.getElementById('player');
   video.style.display = 'block';

const episodeId = urlParams.get("episode");
const mediaId = urlParams.get("show");

if (Hls.isSupported() && episodeId && mediaId) {
  var hls = new Hls();
  fetch(`https://api.consumet.org/movies/flixhq/watch?episodeId=${episodeId}&mediaId=${mediaId}`)
    .then(response => response.json())
    .then(data => {
      hls.loadSource(data.sources[0].url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    });
}

plyr.setup(video);
}

document.querySelector('#location').innerHTML = window.location.href + '?movie=watch-puss-in-boots-the-last-wish-91342';
document.querySelector('#location').onclick = function() {
    window.open("/?movie=watch-puss-in-boots-the-last-wish-91342", "_blank");
}
} else {
  alert('Not an Official service')
  document.body.innerHTML = ''
}
