if (player) {
  player.playVideo();
  player.seekTo(player.getDuration() - 5);
} else alert("player isn't defined");
