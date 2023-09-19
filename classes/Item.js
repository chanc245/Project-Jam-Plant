class Item {
  constructor() {
    this.x = -100;
    this.y = -100;
    this.length = 25;
    this.width = 25;

    this.typeNum = 0;

    this.type = "";
    this.line = "";
    this.line1 = "line1";
    this.line2 = "line2";
    this.line3 = "line3";

    this.showIcon = true;
    this.showPic = false;
    this.showText = false;

    this.showGallaryText = true;

    this.key = interactKey;
  }

  all() {
    this.collideUpdate();

    this.checkScene();
    this.drawIcon();

    this.checkCollide();
    this.hint();
    this.text();
  }

  drawIcon() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.showIcon && showItemIcon) {
        push();
        angleMode(DEGREES);
        rectMode(CENTER);

        stroke(200);
        fill(255, 255, 255, 230);
        translate(this.x, this.y);
        rotate(45);
        // rect(0, 0, this.length, this.width, 5);
        image(itemStar, 0, 0, this.length, this.width);
        pop();
      }
    }
  }

  checkScene() {
    if (sceneNum == 0) {
      this.showIcon = false;
      this.type = "-";
    } else if (sceneNum == 1 || this.typeNum == 1) {
      this.x = 375;
      this.y = 190;

      this.type = itemName[0];
      this.line = "";

      //1 memory
    } else if (sceneNum == 2 || this.typeNum == 2) {
      this.x = 120;
      this.y = 240;

      this.type = itemName[1];
      this.line =
        "This is my favorite blanket!\nI can’t sleep without this.\nI feel warm every time I cuddle \nwith this blanket.";

      //2 blanket
    } else if (sceneNum == 3 || this.typeNum == 3) {
      this.x = 405;
      this.y = 195;

      this.type = itemName[2];
      this.line =
        "This is a drawing of my pet plant.\nI love to put my drawings all over the wall.\nDrawing expresses my feeling towards plants.\nI love drawing about plants!!!!";

      //3 drawing
    } else if (sceneNum == 4 || this.typeNum == 4) {
      this.x = 255;
      this.y = 200;

      this.type = itemName[3];
      this.line =
        "Yeah! Today my parents cooked my favorite\nmeal, which is curry. I can feel the warmth of \nmy family every time I get a taste of it. \nMmm~ Smells good!";

      //4 curry
    } else if (sceneNum == 5 || this.typeNum == 5) {
      this.x = 430;
      this.y = 285;

      this.type = itemName[4];
      this.line =
        "My friendly ducky! With ducky, \nI don’t have to bath alone. \nWith you, I can travel through the seas, \nto find the treasure beneath the bath tub!";

      //5 duck
    } else if (sceneNum == 6 || this.typeNum == 6) {
      this.x = 278;
      this.y = 360;

      this.type = itemName[5];
      this.line =
        "My dog Mango! Her fluffiness makes me calm. \nHer fur is like a cotton candy that \nI almost took a bite.\nI love my dog a lot!!";

      //6 dog
    } else if (sceneNum == 7 || this.typeNum == 7) {
      this.x = 380;
      this.y = 215;

      this.type = itemName[6];
      this.line = "-";

      //7 complete
    } else if (sceneNum == 8) {
      this.showIcon = false;

      this.type = "-";

      //
    } else if (sceneNum == 9) {
      this.showIcon = false;
      this.type = "-";

      //
    }
  }

  name() {
    this.checkScene();

    let itemName = this.type;

    return itemName;
  }

  checkCollide() {
    this.checkScene();

    if (dist(charX, charY, this.x, this.y) < 40) {
      return true;
    } else {
      return false;
    }
  }

  hint() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.checkCollide() && !showItemText && sceneNum != 1) {
        if (sceneNum != 7) {
          hint(`Press [${this.key}] to interact with item`);
        } else {
          hint(`Press [${this.key}] to sit down`);
        }
      } else if (this.checkCollide() && !showItemText && sceneNum == 1) {
        hint(`Press [${this.key}] to look at this place`);
      }
    }
  }

  hintNotCollected() {
    if (itemCollectedOrNot[this.typeNum - 1] == false) {
      this.showGallaryText = false;
      hintLong(
        `Item not collected, go to [${locationName[this.typeNum]
        }] to collect item`
      );
    } else {
      this.showGallaryText = true;
    }
  }

  collideUpdate() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.checkCollide()) {
        if (key == this.key && key != prevKey) {
          showItemIcon = false;
          showItemText = true;
          itemCollectCount += 1;
        }
        prevKey = key;
      }
    }
  }

  collectUpdate() {
    itemCollectedOrNot[sceneNum - 1] = true;
  }

  playAni() {
    //S1_Ani
    if (sceneNum == 1) {
      image(S1_Ani, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);
      aniPlayed = true;
      this.collectUpdate();
    }

    if (sceneNum == 7) {
      image(S7_Ani, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);
      aniPlayed = true;
      this.collectUpdate();
    }
  }

  text() {
    this.checkScene();
    if (
      showItemText &&
      key == this.key &&
      this.checkCollide() &&
      sceneNum != 1 &&
      sceneNum != 7
    ) {
      if (!showItemIcon) {
        //why !showItemIcon?? only like this it works??? like why????
        itemTextBox(this.type, this.line);

        hint("Press [any key] to continue");

        this.collectUpdate();
      }
    } else if (
      showItemText &&
      key == this.key &&
      this.checkCollide() &&
      sceneNum == 1
    ) {
      // this.playAni();
    } else if (
      showItemText &&
      key == this.key &&
      this.checkCollide() &&
      sceneNum == 7
    ) {
      this.playAni();
    }
  }

  gallaryText() {
    if (this.showGallaryText) {
      hint(`Press [${this.key}] to interact with item`);
      if (key == this.key) {
        this.checkScene();
        itemTextBox(this.type, this.line);
        hint("Press [any key] to continue");
      }
    }
  }

  gallary() {
    ItemCase(); //item draw out rectengle
    coverItemCase();
    showItemIcon = false;

    let y1 = height / 3;
    let x1 = width / 5;

    let itemDist = [
      dist(charX, charY, itemX[0], itemY[0]), //
      dist(charX, charY, itemX[1], itemY[1]), //
      dist(charX, charY, itemX[2], itemY[2]), //
      dist(charX, charY, itemX[3], itemY[3]), //
      dist(charX, charY, itemX[4], itemY[4]), //
    ];

    if (itemDist[0] < 50) {
      this.typeNum = 2;
      this.hintNotCollected();
      this.gallaryText();
    } else if (itemDist[1] < 50) {
      this.typeNum = 3;
      this.hintNotCollected();
      this.gallaryText();
    } else if (itemDist[2] < 50) {
      this.typeNum = 4;
      this.hintNotCollected();
      this.gallaryText();
    } else if (itemDist[3] < 50) {
      this.typeNum = 5;
      this.hintNotCollected();
      this.gallaryText();
    } else if (itemDist[4] < 50) {
      this.typeNum = 6;
      this.hintNotCollected();
      this.gallaryText();
    }
  }
}
