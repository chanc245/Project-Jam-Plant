function scene9() {
  returnToMap = true;
  image(scene9_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  openMap();

  locationMapBox();

  mapInstruction("retrun to map function has been enabled");

  rootMapDist = [
    dist(charX, charY, rootMapX[0], rootMapY[0]) < 50, //0
    dist(charX, charY, rootMapX[1], rootMapY[1]) < 50, //1
    dist(charX, charY, rootMapX[2], rootMapY[2]) < 50, //2
    dist(charX, charY, rootMapX[3], rootMapY[3]) < 50, //3
    dist(charX, charY, rootMapX[4], rootMapY[4]) < 50, //4
    dist(charX, charY, rootMapX[5], rootMapY[5]) < 50, //5
    dist(charX, charY, rootMapX[6], rootMapY[6]) < 50, //6
  ];

  if (rootMapDist[0]) {
    mapInstruction(`press [space] to go to [${locationName[1]}]`);
    if (key == " ") {
      sceneNum = 1;
    }
  } else if (rootMapDist[1]) {
    mapInstruction(`press [space] to go to [${locationName[2]}]`);
    if (key == " ") {
      sceneNum = 2;
    }
  } else if (rootMapDist[2]) {
    mapInstruction(`press [space] to go to [${locationName[3]}]`);
    if (key == " ") {
      sceneNum = 3;
    }
  } else if (rootMapDist[3]) {
    mapInstruction(`press [space] to go to [${locationName[4]}]`);
    if (key == " ") {
      sceneNum = 4;
    }
  } else if (rootMapDist[4]) {
    mapInstruction(`press [space] to go to [${locationName[5]}]`);
    if (key == " ") {
      sceneNum = 5;
    }
  } else if (rootMapDist[5]) {
    mapInstruction(`press [space] to go to [${locationName[6]}]`);
    if (key == " ") {
      sceneNum = 6;
    }
  } else if (rootMapDist[6]) {
    mapInstruction(`press [space] to go to [${locationName[7]}]`);
    if (key == " ") {
      sceneNum = 7;
    }
  }
}
