function showXY() {
  let clickCount = 0;
  let clickXY = true;
  clickCount += 1;
  if (clickXY) {
    console.log(`(${mouseX}, ${mouseY})`);
  }
}

function testCharacterRun_Debug() {
  push();
  stroke(220);
  fill(255, 255, 255, 90);
  rect(charX, charY, 100 * imgCom, 150 * imgCom);

  pop();

  if (keyIsDown(RIGHT_ARROW)) {
    charX += mvS;
  } else if (keyIsDown(LEFT_ARROW)) {
    charX -= mvS;
  }

  if (keyIsDown(UP_ARROW)) {
    charY -= mvS;
  } else if (keyIsDown(DOWN_ARROW)) {
    charY += mvS;
  }
}

function sceneFastChange_Debug() {
  if (keyIsDown(48)) {
    sceneNum = 0;
    changeSceneSwitch();
  } else if (key == "1") {
    sceneNum = 1;
    changeSceneSwitch();
  } else if (key == "2") {
    sceneNum = 2;
    changeSceneSwitch();
  } else if (key == "3") {
    sceneNum = 3;
    changeSceneSwitch();
  } else if (key == "4") {
    sceneNum = 4;
    changeSceneSwitch();
  } else if (key == "5") {
    sceneNum = 5;
    changeSceneSwitch();
  } else if (key == "6") {
    sceneNum = 6;
    changeSceneSwitch();
  } else if (key == "7") {
    sceneNum = 7;
    changeSceneSwitch();
  } else if (key == "8") {
    sceneNum = 8;
    changeSceneSwitch();
  } else if (key == "9") {
    sceneNum = 9;
    changeSceneSwitch();
  } else if (key == "e") {
    sceneNum = 10;
  }
}

function sceneName() {
  let sceneName;
  if (sceneNum == 0) {
    sceneName = "Title";
  } else if (sceneNum == 1) {
    sceneName = "Man Room Sad";
  } else if (sceneNum == 2) {
    sceneName = "Child Room";
  } else if (sceneNum == 3) {
    sceneName = "Hallway";
  } else if (sceneNum == 4) {
    sceneName = "Kitchen";
  } else if (sceneNum == 5) {
    sceneName = "Bathroom";
  } else if (sceneNum == 6) {
    sceneName = "Living Room";
  } else if (sceneNum == 7) {
    sceneName = "Man Room Happy";
  } else if (sceneNum == 8) {
    sceneName = "Gallary";
  } else if (sceneNum == 9) {
    sceneName = "Root Map";
  }

  return sceneName;
}

function doorAllLocationCheck_Debug() {
  push(); //checking doorAll.charInX() value
  fill(250);
  stroke(200);
  rect(door.charInX(), door.charInY(), 5, 5);
  pop();

  push(); //checking doorAll.charOutY() value YELLOW
  fill(250, 250, 160);
  stroke(230, 230, 140);
  // rect(door.charOutX(), door.charOutY(), 5, 5);
  pop();
}

function sceneText_Debug() {
  push();

  rectMode(CORNER)
  noStroke()
  fill(255, 255, 255, 100)
  rect(15, 10, 510, 150, 5)

  textAlign(LEFT);
  textSize(15);
  fill(50, 50, 50, 200)
  text(`sceneNum [ ${sceneNum} ] [ ${sceneName()} ] locationName [ ${locationName[sceneNum]} ]`, 20, 30);
  text(`itemCollectCount [ ${itemCollectCount} ]`, 20, 50);
  text(`item.name() [ ${item.name()} ]`, 20, 70);
  // text()//locationName
  text(`itemCollectedOrNot [ ${itemCollectedOrNot} ]`, 20, 90)
  text(`chara.checkStage() [ ${chara.checkStage()} ] (0-1, 2-3, 4-5, 6, 7)`, 20, 110)
  text(`endingNum [ ${endingNum} ] (0-1, 2-3, 4-5, 6, 7)`, 20, 130)
  text(`(charX, charY) (${charX}, ${charY})`, 20, 150)
  // text(`itemTrue [ ${itemTrue} ]`, 20, 150)
  // text(`itemFalse [ ${itemFalse} ]`, 20, 170)
  pop();
}

function testDraw(textx) {
  push();

  fill(230);
  stroke(220);
  rect(width / 2, 50, width / 3, 50);

  textSize(12);
  fill(100);
  text(textx, width / 2, 55);

  pop();
}

function testMatch() {
  let string = "today is good";
  let regexp = "";
  let m = match(string, regexp);
  //text(m, 5, 50);
  console.log(m);
}

function keyPresssedTest() {
  if (key == "/" && key != prevKey) {
    itemCollectCount += 1;
  }
  prevKey = key;
}

function itemTextBoxTest(itemType, textInput1, textInput2, textInput3) {
  push();

  fill(230);
  stroke(220);

  rect(width / 2, 325, 400, width / 6, 10); //item box
  rect(width / 2, height / 2, 100, 100, 10); //text box

  textSize(15);
  fill(100);

  text(itemType, width / 2, height / 2 + 35);

  textAlign(LEFT);
  text(textInput1, 125, 310);
  text(textInput2, 125, 330);
  text(textInput3, 125, 350);

  pop();
}

function mapInstructionTest(textInput) {
  push();

  fill(250, 250, 250, 100);
  stroke(220);

  rect(width / 2, height / 2, 250, 40, 10);

  textSize(15);
  fill(100, 100, 100, 100);
  text(textInput, width / 2, height / 2 + 5);

  pop();
}

function mapHintTest() {
  push();

  if (sceneNum == 0 || sceneNum == 1) {
    rect(width / 2, 300, width / 2, 50, 10);
  }

  if (sceneNum != 9) {
    fill(240, 240, 240, 100);
    stroke(230);
    rect(width / 2, 300, width / 2, 50, 10);

    textSize(15);
    fill(100, 100, 100, 100);
    text("press [m] to go back to [map]", width / 2, 305);
  }

  pop();
}

function checkItemTF() { //doesnt work.. dont know why ;-; 
  itemTrue = []
  itemFalse = []
  for (let i = 0; i <= itemCollectedOrNot.length; i++) {
    if (itemCollectedOrNot[i] == true) {
      // collected += 1;
      itemTrue.push(i);
      console.log("0");
    } else {
      // NotCollected += 1;
      itemFalse.push(i);
      console.log("1");
    }
  }
}

function allDebugFunction() {
  // doorAllLocationCheck_Debug(); //problem fixed heck yeah

  sceneFastChange_Debug();

  // sceneText_Debug();

  // testCharacterRun_Debug();

  //testMatch()
  //console.log(itemCollectCount)

  // itemTextBoxTest(
  //   "suitcase",
  //   "hey you found a star! cool!",
  //   "this star is a item you can collect in every room",
  //   "try to collect all of them"
  // );

  // mapInstructionTest("press [space] to go to this room");
  // mapHintTest();
}

