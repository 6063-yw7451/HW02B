  function setup() {
    createCanvas(800, 1040);
  }
  
  function draw() {
    background("#F1F2F0");
    fill(0);
    noStroke();
    quad(27,195,63,238,220,109,184,61);
    fill("#3760BA");
    quad(114,196,226,436,469,269,270,66);
    fill("#864736");
    quad(571,254,572,335,663,335,661,251);
    fill("#EABA2C");
    quad(612,335,612,569,755,571,757,333);
    fill("#20282A");
    quad(224,629,224,987,582,987,585,629);
    noFill();
    stroke("#864736");
    strokeWeight(20);
    ellipse(520,385,100,90);
  }