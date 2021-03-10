import p5 from 'p5';
export default { title: 'chapter4' };

declare let globalP5Instance: p5;

export const listing4_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      const radius = 100;
      const centX = 250;
      const centY = 150;

      p.stroke(0, 30);
      p.noFill();
      p.ellipse(centX, centY, radius * 2, radius * 2);

      p.stroke(20, 50, 70);
      let x: number, y: number;
      for (let ang = 0; ang <= 360; ang += 5) {
        const rad = p.radians(ang);
        x = centX + radius * p.cos(rad);
        y = centY + radius * p.sin(rad);
        p.point(x, y);
      }
    };
  });
  return '';
};

export const listing4_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      let radius = 100;
      const centX = 250;
      const centY = 150;

      p.stroke(0, 30);
      p.noFill();
      p.ellipse(centX, centY, radius * 2, radius * 2);

      p.stroke(20, 50, 70);
      radius = 10;
      let x: number, y: number;
      let lastx = -999;
      let lasty = -999;
      for (let ang = 0; ang <= 1440; ang += 5) {
        radius += 0.5;
        const rad = p.radians(ang);
        x = centX + radius * p.cos(rad);
        y = centY + radius * p.sin(rad);
        if (lastx > -999) p.line(x, y, lastx, lasty);
        lastx = x;
        lasty = y;
      }
    };
  });
  return '';
};

export const listing4_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      let radius = 100;
      const centX = 250;
      const centY = 150;

      p.stroke(0, 30);
      p.noFill();
      p.ellipse(centX, centY, radius * 2, radius * 2);

      p.stroke(20, 50, 70);
      radius = 10;
      let x: number, y: number;
      let lastx = -999;
      let lasty = -999;
      let radiusNoise = p.random(10);
      for (let ang = 0; ang <= 1440; ang += 5) {
        radiusNoise += 0.05;
        radius += 0.5;
        const thisRadius = radius + p.noise(radiusNoise) * 200 - 100;
        const rad = p.radians(ang);
        x = centX + thisRadius * p.cos(rad);
        y = centY + thisRadius * p.sin(rad);
        if (lastx > -999) p.line(x, y, lastx, lasty);
        lastx = x;
        lasty = y;
      }
    };
  });
  return '';
};

export const listing4_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.strokeWeight(0.5);
      p.smooth();

      const centX = 250;
      const centY = 150;
      let x: number, y: number;
      for (let i = 0; i < 100; i++) {
        let lastx = -999;
        let lasty = -999;
        let radiusNoise = p.random(10);
        let radius = 10;
        p.stroke(p.random(20), p.random(50), p.random(70), 80);
        const startangle = p.int(p.random(360));
        const anglestep = 5 + p.int(p.random(3));
        for (
          let ang = startangle;
          ang <= 1440 + p.random(1440);
          ang += anglestep
        ) {
          radiusNoise += 0.05;
          radius += 0.5;
          const thisRadius = radius + p.noise(radiusNoise) * 200 - 100;
          const rad = p.radians(ang);
          x = centX + thisRadius * p.cos(rad);
          y = centY + thisRadius * p.sin(rad);
          if (lastx > -999) p.line(x, y, lastx, lasty);
          lastx = x;
          lasty = y;
        }
      }
    };
  });
  return '';
};

export const listing4_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.strokeWeight(5);
      p.smooth();

      const radius = 100;
      const centX = 250;
      const centY = 150;

      p.stroke(0, 30);
      p.noFill();
      p.ellipse(centX, centY, radius * 2, radius * 2);

      p.stroke(20, 50, 70);
      p.strokeWeight(1);
      let x: number, y: number;
      let noiseval = p.random(10);

      p.beginShape();
      p.fill(20, 50, 70, 50);

      const customNoise = (value: number) => p.pow(p.sin(value), 3);
      for (let ang = 0; ang <= 360; ang += 1) {
        noiseval += 0.1;
        const radVariance = 30 * customNoise(noiseval);

        const thisRadius = radius + radVariance;
        const rad = p.radians(ang);
        x = centX + thisRadius * p.cos(rad);
        y = centY + thisRadius * p.sin(rad);

        p.curveVertex(x, y);
      }
      p.endShape();
    };
  });
  return '';
};

export const wave_clock = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    let _angnoise: number, _radiusnoise: number;
    let _xnoise: number, _ynoise: number;
    let _angle = -p.PI / 2;
    let _radius = 100;
    let _strokeCol = 254;
    let _strokeChange = -1;

    const clearBackground = () => {
      p.background(255);
    };

    p.setup = () => {
      p.createCanvas(500, 300);
      p.smooth();
      p.frameRate(30);

      clearBackground();

      _angnoise = p.random(10);
      _radiusnoise = p.random(10);
      _xnoise = p.random(10);
      _ynoise = p.random(10);
    };

    p.draw = () => {
      _radiusnoise += 0.005;
      _radius = p.noise(_radiusnoise) * 550 + 1;

      _angnoise += 0.005;
      _angle += p.noise(_angnoise) * 6 - 3;
      if (_angle > 360) _angle -= 360;
      if (_angle < 0) _angle += 360;

      // wobble centre
      _xnoise += 0.01;
      _ynoise += 0.01;
      const centreX = p.width / 2 + p.noise(_xnoise) * 100 - 50;
      const centreY = p.height / 2 + p.noise(_ynoise) * 100 - 50;

      const rad = p.radians(_angle);
      const x1 = centreX + _radius * p.cos(rad);
      const y1 = centreY + _radius * p.sin(rad);

      // opposite
      const opprad = rad + p.PI;
      const x2 = centreX + _radius * p.cos(opprad);
      const y2 = centreY + _radius * p.sin(opprad);

      p.noFill();
      _strokeCol += _strokeChange;
      if (_strokeCol > 254) _strokeChange *= -1;
      if (_strokeCol < 0) _strokeChange *= -1;
      p.stroke(_strokeCol, 60);
      p.strokeWeight(1);
      p.line(x1, y1, x2, y2);
    };

    p.mousePressed = () => {
      clearBackground();
    };
  });
  return '';
};
