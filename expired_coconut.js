color blueColor;
float offset = 0;
PFont font;

void setup() {
  size(900, 900);
  blueColor = #000dfe;
  font = loadFont("JetBrainsMono-Regular-80.vlw");
  textFont(font);
  frameRate(60);
}

void draw() {
  background(255);

  stroke(blueColor);
  strokeWeight(1);
  noFill();

  float spacing = 20;

  for (float y = 0; y < height + spacing; y += spacing) {
    beginShape();
    for (float x = 0; x <= width; x += 5) {
      float wave = sin(offset + x * 0.02 + y * 0.01) * 30;
      float wave2 = cos(offset * 0.8 - x * 0.015 + y * 0.02) * 20;
      vertex(x, y + wave + wave2);
    }
    endShape();
  }

  for (float x = 0; x < width + spacing; x += spacing) {
    beginShape();
    for (float y = 0; y <= height; y += 5) {
      float wave = sin(offset + y * 0.02 + x * 0.01) * 30;
      float wave2 = cos(offset * 0.8 - y * 0.015 + x * 0.02) * 20;
      vertex(x + wave + wave2, y);
    }
    endShape();
  }

  offset += 0.05;
  fill(blueColor);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(48);
  text("expired_coconut", width/2, height/2);

  //saveFrame("output/coconut_####.png");
}
