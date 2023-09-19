function sceneConstrain() {
  if (sceneNum == 1) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 200, 405);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 200 - plant_mvUp, 405 - plant_mvUp);
  } else if (sceneNum == 2) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 200, 405);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 200 - plant_mvUp, 405 - plant_mvUp);
  } else if (sceneNum == 3) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 220, 293);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 220 - plant_mvUp, 293 - plant_mvUp);
  } else if (sceneNum == 4) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 225, 360);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 225 - plant_mvUp, 360 - plant_mvUp);
  } else if (sceneNum == 5) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 270, 360);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 270 - plant_mvUp, 360 - plant_mvUp);
  } else if (sceneNum == 6) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 220, 405);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 220 - plant_mvUp, 405 - plant_mvUp);
  } else if (sceneNum == 7) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 220, 405);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, 220 - plant_mvUp, 405 - plant_mvUp);
  } else if (sceneNum == 9) {
    charX = constrain(charX, -5 + charW / 2, 605 - charW / 2);
    charY = constrain(charY, -5 + charH / 2, 405 - charH / 2);

    charX_p = constrain(charX_p, -5 + charW / 2, 605 - charW / 2);
    charY_p = constrain(
      charY_p,
      -5 + charH / 2 - plant_mvUp,
      405 - charH / 2 - plant_mvUp
    );
  } else if (sceneNum == 10) {
    charX = constrain(charX, -5 + charW / 2, 605 - charW / 2);
    charY = constrain(charY, 250 + charH / 2, 405 - charH / 2);

    charX_p = constrain(charX_p, -5 + charW / 2, 605 - charW / 2);
    charY_p = constrain(
      charY_p,
      250 + charH / 2 - plant_mvUp,
      405 - charH / 2 - plant_mvUp
    );
  } else {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, -5, 405);

    charX_p = constrain(charX_p, -5, 605);
    charY_p = constrain(charY_p, -5 - plant_mvUp, 405 - plant_mvUp);
  }
}

function changeSceneSwitch() {
  charX = door.charInX();
  charY = door.charInY();

  charX_p = charX;
  charY_p = charY - plant_mvUp;

  showThisIcon = true;
  showItemIcon = true;
  showItemText = false;

  aniPlayed = false;

  if (sceneNum == 9) {
    //again, dont know why the value at this scene is weird
    charX = width / 2;
    charY = height / 2;
  }
}

function changeScene() {
  switch (sceneNum) {
    case 0:
      scene0();
      break;

    case 1:
      scene1();
      break;

    case 2:
      scene2();
      break;

    case 3:
      scene3();
      break;

    case 4:
      scene4();
      break;

    case 5:
      scene5();
      break;

    case 6:
      scene6();
      break;

    case 7:
      scene7();
      break;

    case 8:
      scene8();
      break;

    case 9:
      scene9();
      break;

    case 10:
      ending();
      break;
  }

  sceneConstrain();

  if (sceneNum == 0) {
    if (keyIsDown(32)) {
      sceneNum++;
      changeSceneSwitch();
    }
  }

  if (aniPlayed && sceneNum == 1) {
    if (keyIsDown(32)) {
      sceneNum++;
      changeSceneSwitch();

      //video
      practiceVideo.hide();
    }
  }

  if (aniPlayed && sceneNum == 7) {
    if (keyIsDown(32)) {
      sceneNum++;
      changeSceneSwitch();
    }
  }

  if (door.checkCollide()) {
    if (keyIsDown(32)) {
      sceneNum++;
      changeSceneSwitch();
    }
  }

  if (sceneNum == 9) {
    if (charX > width - charW / 2 ||
      charX < 0 + charW / 2 ||
      charY > height - charH / 2 ||
      charY < 0 + charH / 2
    ) {
      hint("press [/] to go to ending page");

      if (key == "/") {
        sceneNum++;
        changeSceneSwitch();
      }
    }
  }
}
