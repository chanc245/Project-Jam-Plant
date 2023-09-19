class Door {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.length = 100 * imgCom;
    this.width = 50 * imgCom;
    this.rotate = 0;

    this.charCom = 50; //character location compensation -- for location (the born location for the In door)

    this.show = true;
    this.mapOpen = false;
  }

  allOut() {
    this.checkSceneOut();
    this.drawOut();
    this.message();
  }

  allIn() {
    this.checkSceneIn();
    this.drawIn();
    this.message();
  }

  inNout() {
    this.checkSceneOut();
    this.drawOut();

    this.checkSceneIn();
    this.drawIn();

    this.message();
  }

  drawOut() {
    let doorStGlow = color(240, 240, 150); //OUT
    let doorInGlow = color(250, 250, 160); //INSIDE

    if (this.show) {
      push();
      angleMode(DEGREES);
      rectMode(CENTER);

      translate(this.x, this.y);
      rotate(this.rotate);
      fill(doorInGlow);
      stroke(doorStGlow);
      // rect(0, 0, this.width, this.length, 2);
      image(doorOut, 0, 0, this.width, this.length);
      pop();
    }
  }

  drawIn() {
    if (this.show) {
      push();
      angleMode(DEGREES);
      rectMode(CENTER);

      translate(this.x, this.y);
      rotate(this.rotate);
      stroke(200);
      rect(0, 0, this.width, this.length, 2);
      pop();
    }
  }

  checkSceneOut() {
    if (sceneNum == 0) {
      this.show = false;
    } else if (sceneNum == 1) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 2) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 3) {
      this.rotate = 0;
      this.x = width - this.width / 2;
      this.y = height / 4 * 3 - 10;
      this.show = true;
    } else if (sceneNum == 4) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 5) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 6) {
      this.rotate = 0;
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 7) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
      this.show = true;
    } else if (sceneNum == 8) {
      this.rotate = 270;
      this.x = width / 2;
      this.y = this.width / 2;
      this.show = true;
    } else if (sceneNum == 9) {
      this.rotate = 90;
      this.show = false;
    } else if (sceneNum == 10) {
      this.rotate = 90;
      this.show = false;
    }
  }

  checkSceneIn() {
    if (sceneNum == 0) {
      this.show = false;
    } else if (sceneNum == 1) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 2) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 3) {
      this.rotate = 0;
      this.x = this.width / 2;
      this.y = height / 4 * 3 - 10;
    } else if (sceneNum == 4) {
      this.x = this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 5) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 6) {
      this.rotate = 0;
      this.x = this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 7) {
      this.x = width - this.width / 2;
      this.y = height / 4 * 3;
    } else if (sceneNum == 8) {
      this.rotate = 90;
      this.x = width / 2;
      this.y = this.width / 2;
    } else if (sceneNum == 9) {
      this.rotate = 90;
      this.x = width / 2;
      this.y = this.width / 2 + 38;
    } else if (sceneNum == 10) {
      this.rotate = 90;
      this.show = false;
    }
    this.show = false;
  }

  charInX() {
    this.checkSceneIn();
    let inX;

    if (this.x > width / 2) {
      inX = this.x - this.charCom;
    } else if (this.x <= width / 2) {
      inX = this.x + this.charCom;
    }

    if (this.rotate === 90) {
      if (this.x > width / 2) {
        inX += this.charCom;
      } else if (this.x <= width / 2) {
        inX -= this.charCom;
      }
    }

    //for some reason I need to do this compensation???????
    if (sceneNum == 0) {
      inX -= this.charCom;
    } else if (sceneNum == 1) {
      // inX -= 300;
    }

    return inX;
  }

  charInY() {
    this.checkSceneIn();
    let inY;

    if (sceneNum == 0) {
      inY = height / 2;
      inY -= this.charCom * 2;
    } else if (sceneNum == 1) {
      inY = height / 2;
    } else {
      if (this.y > height / 2) {
        inY = this.y - this.charCom;
      } else if (this.y <= height / 2) {
        inY = this.y + this.charCom;
      }
      if (this.rotate === 0) {
        if (this.y > width / 2) {
          inY += this.charCom;
        } else if (this.y <= width / 2) {
          inY -= this.charCom;
        }
      }
    }

    // if (sceneNum == 9) {
    //   inY -= this.charCom;
    // } else if (sceneNum == 8) {
    //   inY -= this.charCom * 2
    // }

    //here comes another compensation that I dont know why..
    inY += this.charCom * 2;

    return inY;
  }

  charOutX() {
    this.checkSceneOut();
    let outX;

    outX = this.x;

    return outX;
  }

  charOutY() {
    this.checkSceneOut();
    let outY;

    outY = this.y;

    return outY;
  }

  checkCollide() {
    this.checkSceneOut();
    this.charOutX();
    this.charOutY();

    if (
      dist(charX, charY, this.charOutX(), this.charOutY()) < 50 &&
      this.show
    ) {
      return true;
    } else {
      return false;
    }
  }

  message() {
    if (this.checkCollide() && this.show) {
      hint(`Press [space] to go to [${locationName[sceneNum + 1]}]`);
    }
  }
}
