function scene1() {
  image(scene1_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  if (!itemCollectedOrNot[sceneNum - 1]) {
    // instruction("Try to pick up the item");
    instruction("Press [arrow keys] to move around");
  }

  openMap();
}
