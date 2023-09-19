class Chara {
  constructor() {
    this.width = 100 * imgCom;
    this.height = 150 * imgCom;

    this.width_p = 100 * imgCom;
    this.height_p = 150 * imgCom;

    this.stage = 0;

    this.itemTrueCount = 0;
  }

  all() {
    this.draw();
  }

  draw() {
    this.drawStage(); //draw character

    if (keyIsDown(RIGHT_ARROW)) {
      charX += mvS;
      charX_p += mvS;

      this.right = true;
      this.left = false;
    } else if (keyIsDown(LEFT_ARROW)) {
      charX -= mvS;
      charX_p -= mvS;

      this.right = false;
      this.left = true;
    }

    if (keyIsDown(UP_ARROW)) {
      charY -= mvS;
      charY_p -= mvS;
    } else if (keyIsDown(DOWN_ARROW)) {
      charY += mvS;
      charY_p += mvS;
    }
  }

  checkLeftRight() {
    if (keyIsDown(RIGHT_ARROW)) {
      right = true;
      left = false;
    } else if (keyIsDown(LEFT_ARROW)) {
      right = false;
      left = true;
    }
  }

  drawImgSize(stage) {
    if (sceneNum != 0) {
      this.checkLeftRight();

      push();
      stroke(220);
      fill(200, 255, 200, 90);

      // rect(charX_p, charY_p, this.width_p, this.height_p);

      if (stage == 1) {
        image(plant_stg1, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 2) {
        image(plant_stg2, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 3) {
        image(plant_stg3, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 4) {
        image(plant_stg4, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 5) {
        image(plant_stg5, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 6) {
        image(plant_stg6, charX_p, charY_p, this.width_p, this.height_p);
      } else if (stage == 7) {
        image(plant_stg7, charX_p, charY_p, this.width_p, this.height_p);
      }

      fill(255, 255, 255, 90);
      // rect(charX, charY, this.width, this.height);

      if (sceneNum == 1) {
        if (right == true) {
          image(char_old_sad_R, charX, charY, this.width, this.height);
        } else if (left == true) {
          image(char_old_sad_L, charX, charY, this.width, this.height);
        } else {
          image(char_old_sad_L, charX, charY, this.width, this.height);
        }
      } else if (sceneNum >= 7) {
        if (right == true) {
          image(char_old_hap_R, charX, charY, this.width, this.height);
        } else if (left == true) {
          image(char_old_hap_L, charX, charY, this.width, this.height);
        }
      } else {
        if (right == true) {
          image(char_young_R, charX, charY, this.width, this.height);
        } else if (left == true) {
          image(char_young_L, charX, charY, this.width, this.height);
        }
      }

      noStroke();
      fill(100);
      text(`${stage}`, charX_p, charY_p + 5);
      pop();
    }
  }

  drawStage() {
    if (this.checkStage() === 0 || this.checkStage() === 1) {
      // console.log("stage 1")
      this.stage = 1;
      endingNum = 1;
    } else if (this.checkStage() === 2) {
      // console.log("stage 2")
      this.stage = 2;
      endingNum = 2;
    } else if (this.checkStage() === 3) {
      // console.log("stage 3")
      this.stage = 3;
      endingNum = 3;
    } else if (this.checkStage() === 4) {
      // console.log("stage 4")
      this.stage = 4;
      endingNum = 4;
    } else if (this.checkStage() === 5) {
      // console.log("stage 5")
      this.stage = 5;
      endingNum = 5;
    } else if (this.checkStage() === 6) {
      // console.log("stage 2")
      this.stage = 6;
      endingNum = 6;
    } else if (this.checkStage() === 7) {
      // console.log("stage 2")
      this.stage = 7;
      endingNum = 7;
    }

    return this.drawImgSize(this.stage);
  }

  checkStage() {
    this.itemTrueCount = 0;
    for (let i = 0; i < itemCollectedOrNot.length; i++) {
      if (itemCollectedOrNot[i] === true) {
        this.itemTrueCount += 1;
      }
    }

    return this.itemTrueCount;
  }
}
