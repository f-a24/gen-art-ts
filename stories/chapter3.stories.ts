import p5 from 'p5';
export default { title: 'chapter3' };

declare let globalP5Instance: p5;

export const listing3_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 100);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      p.stroke(0, 30);
      p.line(20, 50, 480, 50);

      p.stroke(20, 50, 70);
      let lastx = -999;
      let lasty = -999;
      let ynoise = p.random(10);
      let y: number;
      for (let x = 20; x <= 480; x += 10) {
        y = 10 + p.noise(ynoise) * 80; // between 10 and 90
        if (lastx > -999) p.line(x, y, lastx, lasty);
        lastx = x;
        lasty = y;
        ynoise += 0.1;
      }
    };
  });
  return '';
};

export const listing3_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 100);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      p.stroke(0, 30);
      p.line(20, 50, 480, 50);

      p.stroke(20, 50, 70);
      let lastx = -999;
      let lasty = -999;
      let angle = 0;
      let y = 50;
      for (let x = 20; x <= 480; x++) {
        const rad = p.radians(angle);
        y = 50 + p.sin(rad) * 40;
        if (lastx > -999) p.line(x, y, lastx, lasty);
        lastx = x;
        lasty = y;
        angle++;
      }
    };
  });
  return '';
};
