var cestaImg, fundoImg, lanranjaImg, melanciaImg, morangoImg, pessegoImg, peraImg; 
var cesta, fundo, lanranja, melancia, morango, pessego, pera;
var grupolanranja, grupomelancia, grupomorango, grupopessego, grupopera; 

function preload(){
    cestaImg =loadImage("cestinha.png")
    fundoImg= loadImage("fundo.png")
   lanranjaImg= loadImage("lanranja.png")
   melanciaImg= loadImage("melancia.png")
   morangoImg= loadImage("morango.jpg")
   pessegoImg= loadImage("pessego.png")
   peraImg= loadImage("pera.png")
   


}

function setup(){
    createCanvas(1200,1200);
    cesta= createSprite(300,1000,10,10);
    cesta.addImage(cestaImg)
    cesta.scale = 0.2
    fundo= createSprite(10,10,10,10)
    grupolanranja= createGroup();
    grupomelancia= createGroup();
    grupopessego= createGroup();
    grupomorango= createGroup();
    grupopera= createGroup();


}

function draw(){
    background(fundoImg);
    cesta.x= World.mouseX
    if (frameCount %15 === 0){
        var range= Math.round(random(1,5));
        switch (range){
            case 1: lanranjaa();
            break;
            case 2: melanciaa();
            break;
            case 3: morangoo();
            break;
            case 4: pessegoo();
            break;
            case 5: peraa();
            break;
        }
    }
    if (grupolanranja.isTouching(cesta)){
        grupolanranja.destroyEach();
    }
    drawSprites();
}
function lanranjaa(){
    lanranja=createSprite(random(0,1000),10,10,10);
    lanranja.addImage(lanranjaImg);
    lanranja.scale= 0.05;
    lanranja.velocityY= 3;
    lanranja.lifetime=500;
    grupolanranja.add(lanranja);

}
function melanciaa(){
    melancia=createSprite(random(0,1000),10,10,10);
    melancia.addImage(melanciaImg);
    melancia.scale= 0.05;
    melancia.velocityY= 3;
    melancia.lifetime=500;
    grupomelancia.add(melancia);

}
function morangoo(){
    morango=createSprite(random(0,1000),10,10,10);
    morango.addImage(morangoImg);
    morango.scale= 0.05;
    morango.velocityY= 3;
    morango.lifetime=500;
    grupomorango.add(morango);

}
function pessegoo(){
    pessego=createSprite(random(0,1000),10,10,10);
    pessego.addImage(pessegoImg);
    pessego.scale= 0.05;
    pessego.velocityY= 3;
    pessego.lifetime=500;
    grupopessego.add(pessego);

}
function peraa(){
    pera=createSprite(random(0,1000),10,10,10);
    pera.addImage(peraImg);
    pera.scale= 0.05;
    pera.velocityY= 3;
    pera.lifetime=500;
    grupopera.add(pera);

}