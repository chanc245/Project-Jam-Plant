function scene0() {
  background(245);

  //title_ani
  image(title_ani, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  push();

  textLeading(10);
  textFont(titleFont);

  textSize(35);
  fill(80);
  // text("Project Jam Plant", width / 2, 125);

  // instruction("- Press ↑ ↓ → ← to move around -");
  instruction("Press [space] to start");



  pop();

  openMap();
}
