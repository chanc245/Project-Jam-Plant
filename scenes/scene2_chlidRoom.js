function scene2() {
  image(scene2_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  openMap();

  //AUDIO
  if (!BackgroundSong.isPlaying() && sceneNum === 2) {
    BackgroundSong.play(); // background music starting again
    practiceVideo.stop(); //video stoping
  }
}
