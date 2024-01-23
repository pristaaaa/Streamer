function playVideo() {
  // Your permanent MPD link, key ID, and key
  var permanentManifest = "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd";
  var permanentKeyId = "6a9e4204f3f8577ebf6e79b3b18573f8";
  var permanentKey = "49d1acc1dc6426331da6d0a0ff4e67a7";

  var playerConfig = {
    file: permanentManifest,
    autostart: true,
    stretching: "",
    width: "100%",
    type: "dash",
  };

  if (permanentKeyId && permanentKey) {
    // DRM settings only if both keyId and key are provided
    playerConfig.drm = {
      clearkey: {
        keyId: permanentKeyId,
        key: permanentKey,
      },
    };
  }

  jwplayer("jwplayerDiv").setup(playerConfig);

  // Hide the form after starting the video
  var videoForm = document.getElementById("videoForm");
  videoForm.style.display = "none";

  // Make the JWPlayer fullscreen
  var jwplayerDiv = document.getElementById("jwplayerDiv");
  jwplayerDiv.classList.add("jwplayer-fullscreen");
}
