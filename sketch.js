var gameState=0;

var welcomeImg;
var next,nextImg;

function preload(){
  welcomeImg = loadImage("images/welcome.jpeg");
  nextImg = loadImage("images/next.png");
  neckpainImg = loadImage("images/neckpain.jpeg");
  waistPainImg = loadImage("images/waist.jpeg");
  eyepainImg = loadImage("images/eyepain.jpeg");
  legpainImg = loadImage("images/legpain.jpeg");
  doctorImg = loadImage("images/doctor.jpeg");
  backbutton1Img = loadImage("images/backbutton.png");
  hospitalImg = loadImage("images/hospitals.jpeg");

  
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  
  welcome = createSprite(displayWidth/2,displayHeight/2);
  welcome.addImage(welcomeImg);
  welcome.scale = 2;
  welcome.visible = false;
  next = createSprite(displayWidth/4,displayHeight/2);
  next.addImage(nextImg);
  next.scale = 0.5;
  next.visible = false;
  
  neckpain = createSprite(displayWidth/7,displayHeight/3);
  neckpain.addImage(neckpainImg);
  neckpain.visible = false;
  waistpain = createSprite(displayWidth/3+50,displayHeight/3);
  waistpain.addImage(waistPainImg);
  waistpain.visible = false;
  eyepain = createSprite(displayWidth/3+350,displayHeight/3);
  eyepain.addImage(eyepainImg);
  eyepain.visible = false;
  legpain = createSprite(displayWidth/3+640,displayHeight/3);
  legpain.addImage(legpainImg);
  legpain.visible = false;
  doctor = createSprite(displayWidth/4+200,displayHeight/4+200);
  doctor.addImage(doctorImg);
  doctor.visible = false;
  hospital = createSprite(displayWidth/4+700,displayHeight/4+200);
  hospital.addImage(hospitalImg);
  hospital.visible = false;
  
  backbutton1 = createSprite(displayWidth/8,displayHeight/9);
  backbutton1.addImage(backbutton1Img);
  backbutton1.visible = false;
  

  
  
}
function draw(){
 // background("white");

  pg1();

 if(mousePressedOver(next)){
   gameState = 1;
 }
 
 if(touches.length<0){
   gameState =1
   touches=[];
 }
 if(gameState === 1){
  
pg2();
 }
 if(mousePressedOver(neckpain)|| touches.length>0){
   gameState=3;
 
}
if(gameState === 3){
  neck();
}
if(mousePressedOver(doctor)|| touches.length>0){
  gameState=4
  touches=[];
}
if(gameState === 4){
  doctorName();
}
if(mousePressedOver(backbutton1)||touches.length>0){
  gameState = 5;
  touches=[];
}
if(gameState===5){
pg1();
}
if(mousePressedOver(hospital)||touches.length>0){
  gameState = 6;
  touches=[];
}
if(gameState === 6){
  neckhospital();
}
  
  drawSprites();
  
}
function pg1(){
  background("white");
welcome.visible = true;
next.visible = true;
waistpain.visible = false;
legpain.visible= false;
eyepain.visible = false;
neckpain.visible = false;
doctor.visible = false;
backbutton1.visible = false;
hospital.visible = false;
  
 // next.visible = true;
drawSprites();
}
function pg2(){
  clear();
  background("green");
  welcome.visible = false;
  next.visible = false;
  hospital.visible = false;
  backbutton1.visible = true;
  console.log("gameState=1",gameState);

  textSize(50);
  fill("white");
  text("which Problem are You Facing From?",displayWidth/5,displayHeight/6);
   neckpain.visible = true;
   textSize(30);
   fill("yellow");
   text("NeckPain",displayWidth/10,displayHeight/2);
   waistpain.visible = true;
   textSize(30);
   fill("yellow");
   text("WaistPain",displayWidth/4+70,displayHeight/2);
   eyepain.visible = true;
   textSize(30);
   fill("yellow");
   text("EyePain",displayWidth/4+380,displayHeight/2+10);
   legpain.visible = true;
   textSize(30);
   fill("yellow");
   text("LegPain",displayWidth/4+670,displayHeight/2);
  drawSprites();
}
function neck(){
  
  background("white");
  legpain.visible = false;
  eyepain.visible = false;
  waistpain.visible = false;
  welcome.visible = false;
  next.visible = false;
  neckpain.visible = true;
  backbutton1.visible= true;
  textSize(50);
  fill("blue");
  text("Neck-Pain",displayWidth/2,displayHeight/5)
  textSize(25);
  fill("red");
  text("Guys to view the specialist doctors",displayWidth/4+70,displayHeight/4+70) ;
  text("in india press the below image",displayWidth/4+70,displayHeight/4+90);
  textSize(25);
  fill("black");
  text("Guys The neck problem usually occurs in any age, especially in adults",displayWidth/4,displayHeight/4);
  textSize(20);
  text("The neck pain is a common complaint of students,adults,teenagers,olds etc. Neck muscles can be strained", displayWidth/4+50,displayHeight/4+20)
  text("from poor posture.",displayWidth/4+50,displayHeight/4+40);
  doctor.visible = true;
  hospital.visible = true;
  textSize(20);
  fill("red");
  text("Guys to view the specialist hospitals",displayWidth/2+180,displayHeight/4+70);
  text("in india press the below image",displayWidth/2+180,displayHeight/4+90);
  

}
function doctorName(){
  
  
  background(15,119,126);
  neckpain.visible = false;
  doctor.visible= false;
  welcome.visible = false;
  next.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  textSize(50);
  fill("white");
  stroke("black")
  text("1.Dr.SM Tuli.", displayWidth/7,displayHeight/4+40);
  text("2.DR.Satish V Modi.", displayWidth/7,displayHeight/4+100);
  text("3.Dr.Dilip Tanna", displayWidth/7,displayHeight/4+160);
  text("4.Dr. Dilip Nagpal", displayWidth/7,displayHeight/4+220);
  text("5.jogindar moncha", displayWidth/7,displayHeight/4+280);
  textSize(60);
  fill("white");
  stroke("yellow");
  text("Some of the Specialist doctors",displayWidth/5,displayHeight/5);


}
function neckhospital(){
  neckpain.visible = false;
  doctor.visible= false;
  welcome.visible = false;
  next.visible = false;
  backbutton1.visible = true;
  hospital.visible = false;
  background(20,110,125)
  textSize(50);
  fill("white");
  stroke("yellow");
  text("Some of the Hospitals",displayWidth/5,displayHeight/5);
  textSize(30);
  fill("white");
  stroke("black");
  text("1.Dr Satyen Mehta Spine Clinic-mumbai",displayWidth/7,displayHeight/3);
  text("ph no.020 7118 5945",displayWidth/7,displayHeight/3+35);
  text("2.DR. KAMAL GOYAL ENT & ENDOSCOPIC EAR SURGEON CLINIC-delhi",displayWidth/7,displayHeight/3+100);
  text("ph no.011 4119 4322",displayWidth/7,displayHeight/3+135);
  text("3.Vitality's Laser Piles Clinic-hyderabad",displayWidth/7,displayHeight/3+200);
  text("ph no.091085 03674",displayWidth/7,displayHeight/3+235);


}
  
