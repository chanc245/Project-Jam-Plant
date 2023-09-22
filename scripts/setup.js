function loadClasses() {
  door = new Door();
  item = new Item();
  chara = new Chara();
}

function hint(textInput) {
  push();

  fill(230);
  stroke(220);

  fill(195, 160, 140);
  stroke(195 - 20, 160 - 20, 140 - 20);

  strokeWeight(5);
  rect(width / 2, 50, width / 2 + 70, 50);

  textSize(15);
  textFont(hintFont);
  fill(100);

  fill(195 - 70, 160 - 70, 140 - 70);

  noStroke();
  text(textInput, width / 2, 55);

  pop();
}

function hintLong(textInput) {
  push();

  fill(230);
  stroke(220);

  fill(195, 160, 140);
  stroke(195 - 20, 160 - 20, 140 - 20);

  strokeWeight(5);
  rect(width / 2, 50, width / 2 + 250, 50);

  textSize(15);
  textFont(hintFont);
  fill(100);

  fill(195 - 70, 160 - 70, 140 - 70);

  noStroke();
  text(textInput, width / 2, 55);

  pop();
}

function instruction(textInput) {
  if (sceneNum != 0) {
    push();

    fill(240);
    stroke(220);

    fill(195, 160, 140);
    stroke(195 - 20, 160 - 20, 140 - 20);

    strokeWeight(5);
    rect(width / 2, 300, width / 2 + 50, 50);

    textSize(15);
    textFont(hintFont);
    fill(150);

    fill(195 - 70, 160 - 70, 140 - 70);

    noStroke();
    text(textInput, width / 2, 305);

    pop();
  } else {
    push();

    fill(240);
    stroke(220);

    fill(195, 160, 140);
    stroke(195 - 10, 160 - 10, 140 - 10);

    strokeWeight(5);
    rect(width / 2, 330, width / 2 + 50, 50);

    textSize(15);
    textFont(hintFont);

    fill(195 - 70, 160 - 70, 140 - 70);

    noStroke();
    text("Press [space] to start", width / 2, 335);

    pop();
  }
}

function itemTextBox(itemType, textInput1) {
  push();

  fill(230);
  stroke(220);

  fill(195, 160, 140);
  stroke(195 - 20, 160 - 20, 140 - 20);

  strokeWeight(5);

  rect(width / 2, 325, 400, width / 6); //text box

  // fill(230);
  rect(width / 2, height / 2, 100, 100); //item box

  // fill(100);

  let imgWH = 120 * imgCom;

  // image box
  if (itemType == itemName[0]) {
    image(item0, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[1]) {
    image(item1, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[2]) {
    image(item2, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[3]) {
    image(item3, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[4]) {
    image(item4, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[5]) {
    image(item5, width / 2, height / 2 - 7, imgWH, imgWH);
  }

  textSize(15);
  textFont(txtFont);
  fill(100);

  fill(195 - 70, 160 - 70, 140 - 70);

  noStroke();
  text(itemType, width / 2, height / 2 + 43);

  // textAlign(LEFT);
  text(textInput1, width / 2, 302);

  pop();
}

function mapInstruction(textInput) {
  push();

  fill(250, 250, 250);
  stroke(220);

  fill(195, 160, 140);
  stroke(195 - 20, 160 - 20, 140 - 20);

  strokeWeight(5);
  rect(width / 2, 50, 400, 40);

  textSize(15);
  textFont(hintFont);
  fill(100, 100, 100, 100);

  fill(195 - 70, 160 - 70, 140 - 70);

  noStroke();
  text(textInput, width / 2, 50 + 5);

  pop();
}

function edge(x, y, width, length) {
  //calculate edge of shape
  let edgeNum = [];

  edgeNumLeft = x - width / 2; //left bound
  edgeNumRight = x + width / 2; //right bound
  edgeNum.push(edgeNumLeft);
  edgeNum.push(edgeNumRight);

  edgeNumUp = y - length / 2;
  edgeNumDown = y + length / 2;
  edgeNum.push(edgeNumUp);
  edgeNum.push(edgeNumDown);

  //edgeNum(xLeft, xRight, yUP, yDOWN)
  //edge(x, y, width, length) = (xLeft, xRight, yUP, yDOWN)
  return edgeNum;
}

function ItemCase() {
  push();

  let imgW = 120 * imgCom;
  let imgL = 170 * imgCom;
  let imgSize = 120 * imgCom * 0.7;

  stroke(100);

  image(item1, itemX[0], itemY[0], imgW, imgW);
  image(item2, itemX[1], itemY[1], imgW, imgW);
  image(item3, itemX[2], itemY[2], imgW, imgW);
  image(item4, itemX[3], itemY[3], imgW, imgW);
  image(item5, itemX[4], itemY[4], imgW, imgW);

  pop();
}

function coverItemCase() {
  for (let i = 0; i <= itemCollectedOrNot.length - 3; i++) {
    if (itemCollectedOrNot[i + 1] == false) {
      push();

      fill(200);
      // rect(itemX[i], itemY[i], 120 * imgCom, 120 * imgCom, 10);

      //itemCover

      image(itemCover, itemX[i], itemY[i], 160 * imgCom, 160 * imgCom);

      pop();
    }
  }
}

function locationMapBox() {
  push();

  let mapSizeW = (600 / 4) * imgCom;
  let mapSizeL = (400 / 4) * imgCom;

  let mvDown = 45;

  let mtextBox = 20;

  stroke(100);
  fill(255, 255, 255, 150);

  fill(195, 160, 140);
  stroke(195 - 20, 160 - 20, 140 - 20);

  textFont(txtFont);

  for (let i = 0; i <= 6; i++) {
    // rect(rootMapX[i], rootMapY[i], mapSizeW, mapSizeL); //0
    strokeWeight(3)

    rect(rootMapX[i], rootMapY[i] + mvDown, mapSizeW + 5, mtextBox);

    push();
    fill(100);

    fill(195 - 70, 160 - 70, 140 - 70);

    noStroke();

    text(locationName[i + 1], rootMapX[i], rootMapY[i] + mvDown + 5);
    pop();
  }

  pop();
}

function openMap() {
  if (returnToMap) {
    if (key != interactKey) {
      //   showItemIcon = false;
      // showItemText = true;
      push();
      if (sceneNum == 0 || sceneNum == 1) {
        // rect(width / 2, 300, width / 2 + 50, 50, 10);
      }

      if (sceneNum != 9) {
        if (sceneNum != 0) {
          fill(240, 240, 240, 200);
          stroke(230);

          fill(195, 160, 140);
          stroke(195 - 20, 160 - 20, 140 - 20);

          strokeWeight(5);
          rect(width / 2, 300, width / 2 + 50, 50);

          textSize(15);
          textFont(hintFont);
          fill(100, 100, 100, 200);

          fill(195 - 70, 160 - 70, 140 - 70);

          noStroke();
          text("press [m] to go back to [map]", width / 2, 305);

          pop();
        }
      }

      if (key == "m") {
        sceneNum = 9;
      }
    }
  }
}

//VIDEO

function practiceVid() {
  practiceVideo = createVideo(
    "assets/audioNvideo/ani_Final_srink_noLoop_1.mp4"
  );
  practiceVideo.volume(1);
  practiceVideo.size(width, height);
  practiceVideo.hide();
}

function vidPlay() {
  practiceVideo.position(456, 40); //I hate this.. 
  practiceVideo.show();
  practiceVideo.play();
}

function vidPlayWithKey() {
  if (
    // showItemText &&
    keyIsDown(191) &&
    item.checkCollide() &&
    sceneNum == 1
  ) {
    // this.playAni();
    aniPlayed = true;
    vidPlay();
    item.collectUpdate();
    BackgroundSong.stop();
  }
}


