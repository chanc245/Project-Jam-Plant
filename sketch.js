function preload() {
  //font
  titleFont = loadFont("assets/font/BULKYPIX.TTF");
  txtFont = loadFont("assets/font/Hardpixel.OTF");
  hintFont = loadFont("assets/font/half_bold_pixel-7.ttf");

  //scene img
  scene1_Img = loadImage("assets/scenes/S1.png");
  scene2_Img = loadImage("assets/scenes/S2.png");
  scene3_Img = loadImage("assets/scenes/S3.png");
  scene4_Img = loadImage("assets/scenes/S4.png");
  scene5_Img = loadImage("assets/scenes/S5.png");
  scene6_Img = loadImage("assets/scenes/S6.png");
  scene7_Img = loadImage("assets/scenes/S7.png");
  scene8_Img = loadImage("assets/scenes/S8.png");
  scene9_Img = loadImage("assets/scenes/S9.png");

  //item
  item1 = loadImage("assets/item/blanket.png");
  item2 = loadImage("assets/item/drawing.png");
  item3 = loadImage("assets/item/curry.png");
  item4 = loadImage("assets/item/duck.png");
  item5 = loadImage("assets/item/dog.png");

  itemCover = loadImage("assets/item/stone.png");

  itemStar = loadImage("assets/item/itemStar.gif");

  //door
  doorOut = loadImage("assets/door/doorOut.gif");

  //animation
  S1_Ani = loadImage("assets/animation/ani1_FinalFINAL.gif");
  S7_Ani = loadImage("assets/animation/ani_end_final.gif");
  title_ani = loadImage("assets/animation/ani_title.gif");
  end_ani = loadImage("assets/animation/ani_end.gif");

  //plant
  plant_stg1 = loadImage("assets/plant/plant_stg1.png");
  plant_stg2 = loadImage("assets/plant/plant_stg2.png");
  plant_stg3 = loadImage("assets/plant/plant_stg3.png");
  plant_stg4 = loadImage("assets/plant/plant_stg4.png");
  plant_stg5 = loadImage("assets/plant/plant_stg5.png");
  plant_stg6 = loadImage("assets/plant/plant_stg6.png");
  plant_stg7 = loadImage("assets/plant/plant_stg7_ver3.png");

  //character
  char_young_R = loadImage("assets/character/char_R.gif");
  char_young_L = loadImage("assets/character/char_L.gif");

  char_old_sad_R = loadImage("assets/character/char_old_sad_R.gif");
  char_old_sad_L = loadImage("assets/character/char_old_sad_L.gif");

  char_old_hap_R = loadImage("assets/character/char_old_happy_R.gif");
  char_old_hap_L = loadImage("assets/character/char_old_happy_L.gif");

  //audio
  soundFormats("mp3");
  BackgroundSong = loadSound("assets/audioNvideo/A Lonely Cherry Tree_Pix.mp3");
}

function setup() {
  createCanvas(600, 400);

  rectMode(CENTER);
  ellipseMode(CENTER);

  textAlign(CENTER);

  // strokeWeight(10)

  imageMode(CENTER);

  //VIDEO
  practiceVid();

  const stage = select(".canvasLocation");
  if (stage && practiceVideo) {
    practiceVideo.parent(stage);
    practiceVideo.style("position", "absolute");
    practiceVideo.position(0, 0);
  }

  //AUDIO
  BackgroundSong.play();
  BackgroundSong.loop();
}

function draw() {
  background(220);

  // loadClasses();
  door = new Door();
  item = new Item();
  chara = new Chara();

  changeScene();

  allDebugFunction();

  chara.all();
  door.inNout();
  item.all();

  //VIDEO
  vidPlayWithKey();
}

function mousePressed() {
  showXY();
  userStartAudio();
}
