let charX = 300; //character X -- width/2
let charY = 200; //character Y -- height/2

let plant_mvUp = 80;

let charX_p = charX;
let charY_p = charY - plant_mvUp;

let charW = 100 * imgCom;
let charH = 150 * imgCom;

let mvS = 7; //moving speed //debug

let itemCollectCount = 0;

let showItemIcon = true;
let showItemText = false;

let showGallary = false;

let aniPlayed = false;

let returnToMap = false;

let right, left;

let itemTrue = [];
let itemFalse = [];

let endingNum = 0;

//video
let practiceVideo;
let BackgroundSong;

let locationName = [
  "Title",
  "Man's Room",
  "Child Room",
  "Hallway",
  "Kitchen",
  "Bathroom",
  "Living Room",
  "Man's Room",
  "Root Gallary",
  "Root Map",
];

let itemName = [
  "Memory",
  "Blanket",
  "Drawing",
  "Curry",
  "Duck",
  "Dog",
  "Complete",
];

let Memory = false;
let Blanket = false;
let Drawing = false;
let Curry = false;
let Duck = false;
let Dog = false;
let Complete = false;

let itemCollectedOrNot = [
  Memory, //1
  Blanket, //2
  Drawing, //3
  Curry, //4
  Duck, //5
  Dog, //6
  Complete, //7
];

let gallaryCaseLocationX = [
  (600 / 5) * 1, //(width / 5) * 1
  (600 / 5) * 2,
  (600 / 5) * 3,
  (600 / 5) * 4,
  (600 / 5) * 1,
  (600 / 4) * 2,
  (600 / 5) * 4,
];

let gallaryCaseLocationY = [
  400 / 3, //height / 3
  400 / 3,
  400 / 3,
  400 / 3,
  (400 / 3) * 2,
  (400 / 3) * 2,
  (400 / 3) * 2,
];

let itemX = [
  90, //blanket
  130, //drawing
  330, //curry
  470, //duck
  530, //dog
];

let itemY = [
  95, //blanket
  290, //drawing
  205, //curry
  315, //duck
  120, //dog
];

let mapRoomX = [
  (600 / 6) * 1, //(width / 6) * 1
  (600 / 6) * 2,
  (600 / 6) * 3,
  (600 / 6) * 4,
  (600 / 6) * 5,
  (600 / 6) * 1,
  (600 / 6) * 2,
  (600 / 6) * 3,
  (600 / 6) * 4,
  (600 / 6) * 5,
];

let mapRoomY = [
  400 / 4, //height / 4
  400 / 4,
  400 / 4,
  400 / 4,
  400 / 4,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
];

let rootMapX = [
  90, //1 man room night
  215, //2 child room
  385, //3 hallway
  525, //4 kitchen
  105, //5 bathroom
  295, //6 living room
  480, //7 man room dawn
];

let rootMapY = [
  90, //1 man room night
  170, //2 child room
  145, //3 hallway
  100, //4 kitchen
  290, //5 bathroom
  300, //6 living room
  280, //7 man room dawn
];

let endingText = [
  "Thank you for playing my game to the fullest :D", //ED1 - 7
  "You are so close to the full ending!", //ED2 - 6
  "You've done half of it!", //ED3 - 4-5
  "Please try harder ;-;", //ED4 - 2-3
  "...are you even trying? why are you here??", //ED5 - 0-1
];
