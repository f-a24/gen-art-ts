import p5 from 'p5';
export default { title: 'chapter5' };

declare let globalP5Instance: p5;

export const listing5_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(300, 300);
      p.smooth();
      p.background(255);

      const xstart = p.random(10);
      let xnoise = xstart;
      let ynoise = p.random(10);

      for (let y = 0; y <= p.height; y++) {
        ynoise += 0.01;
        xnoise = xstart;
        for (let x = 0; x <= p.width; x++) {
          xnoise += 0.01;
          const alph = p.int(p.noise(xnoise, ynoise) * 255);
          p.stroke(0, alph);
          p.line(x, y, x + 1, y + 1);
        }
      }
    };
  });
  return '';
};

export const listing5_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(300, 300);
      p.smooth();
      p.background(255);

      const xstart = p.random(10);
      let xnoise = xstart;
      let ynoise = p.random(10);

      const drawPoint = (x: number, y: number, noiseFactor: number) => {
        const len = 10 * noiseFactor;
        p.rect(x, y, len, len);
      };

      for (let y = 0; y <= p.height; y += 5) {
        ynoise += 0.1;
        xnoise = xstart;
        for (let x = 0; x <= p.width; x += 5) {
          xnoise += 0.1;
          drawPoint(x, y, p.noise(xnoise, ynoise));
        }
      }
    };
  });
  return '';
};

export const listing5_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    let xstart: number, xnoise: number, ystart: number, ynoise: number;

    const drawPoint = (x: number, y: number, noiseFactor: number) => {
      p.push();
      p.translate(x, y);
      p.rotate(noiseFactor * p.radians(540));
      p.noStroke();
      const edgeSize = noiseFactor * 35;
      const grey = 150 + noiseFactor * 120;
      const alph = 150 + noiseFactor * 120;
      p.fill(grey, alph);
      p.ellipse(0, 0, edgeSize, edgeSize / 2);
      p.pop();
    };

    p.setup = () => {
      p.createCanvas(300, 300);
      p.smooth();
      p.background(0);
      p.frameRate(24);

      xstart = p.random(10);
      ystart = p.random(10);
    };

    p.draw = () => {
      p.background(0);

      xstart += 0.01;
      ystart += 0.01;

      xnoise = xstart;
      ynoise = ystart;

      for (let y = 0; y <= p.height; y += 5) {
        ynoise += 0.1;
        xnoise = xstart;
        for (let x = 0; x <= p.width; x += 5) {
          xnoise += 0.1;
          drawPoint(x, y, p.noise(xnoise, ynoise));
        }
      }
    };
  });
  return '';
};

export const listing5_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    let xstart: number, xnoise: number, ystart: number, ynoise: number;
    let xstartNoise: number, ystartNoise: number;

    const drawPoint = (x: number, y: number, noiseFactor: number) => {
      p.push();
      p.translate(x, y);
      p.rotate(noiseFactor * p.radians(360));
      p.stroke(0, 150);
      p.line(0, 0, 20, 0);
      p.pop();
    };

    p.setup = () => {
      p.createCanvas(300, 300);
      p.smooth();
      p.background(255);
      p.frameRate(24);

      xstartNoise = p.random(20);
      ystartNoise = p.random(20);
      xstart = p.random(10);
      ystart = p.random(10);
    };

    p.draw = () => {
      p.background(255);

      xstartNoise += 0.01;
      ystartNoise += 0.01;
      xstart += p.noise(xstartNoise) * 0.5 - 0.25;
      ystart += p.noise(ystartNoise) * 0.5 - 0.25;

      xnoise = xstart;
      ynoise = ystart;

      for (let y = 0; y <= p.height; y += 5) {
        ynoise += 0.1;
        xnoise = xstart;
        for (let x = 0; x <= p.width; x += 5) {
          xnoise += 0.1;
          drawPoint(x, y, p.noise(xnoise, ynoise));
        }
      }
    };
  });
  return '';
};

export const listing5_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    let xstart: number, xnoise: number, ystart: number, ynoise: number;

    const drawPoint = (x: number, y: number, noiseFactor: number) => {
      p.push();
      p.translate(250 - x, 100 - y, -y);
      const sphereSize = noiseFactor * 35;
      const grey = 150 + noiseFactor * 120;
      const alph = 150 + noiseFactor * 120;
      p.fill(grey, alph);
      p.sphere(sphereSize, 8, 8);
      p.pop();
    };

    p.setup = () => {
      p.createCanvas(500, 300, p.WEBGL);
      p.background(0);
      p.noStroke();

      xstart = p.random(10);
      ystart = p.random(10);
    };

    p.draw = () => {
      p.background(0);

      xstart += 0.01;
      ystart += 0.01;

      xnoise = xstart;
      ynoise = ystart;

      for (let y = 0; y <= p.height; y += 5) {
        ynoise += 0.1;
        xnoise = xstart;
        for (let x = 0; x <= p.width; x += 5) {
          xnoise += 0.1;
          drawPoint(x, y, p.noise(xnoise, ynoise));
        }
      }
    };
  });
  return '';
};

export const listing5_6 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    let xstart: number, ystart: number, zstart: number;
    let xnoise: number, ynoise: number, znoise: number;

    const sideLength = 200;
    const spacing = 5;

    const drawPoint = (
      x: number,
      y: number,
      z: number,
      noiseFactor: number
    ) => {
      p.push();
      p.translate(x, y, z);
      const grey = noiseFactor * 255;
      p.fill(grey, 10);
      p.box(spacing, spacing, spacing);
      p.pop();
    };

    p.setup = () => {
      p.createCanvas(500, 300, p.WEBGL);
      p.background(0);
      p.noStroke();

      xstart = p.random(10);
      ystart = p.random(10);
      zstart = p.random(10);
    };

    p.draw = () => {
      p.background(0);

      xstart += 0.01;
      ystart += 0.01;
      zstart += 0.01;

      xnoise = xstart;
      ynoise = ystart;
      znoise = zstart;

      p.translate(150, 20, -150);
      p.rotateZ(p.frameCount * 0.1);
      p.rotateY(p.frameCount * 0.1);

      for (let z = 0; z <= sideLength; z += spacing) {
        znoise += 0.1;
        ynoise = ystart;
        for (let y = 0; y <= sideLength; y += spacing) {
          ynoise += 0.1;
          xnoise = xstart;
          for (let x = 0; x <= sideLength; x += spacing) {
            xnoise += 0.1;
            drawPoint(x, y, z, p.noise(xnoise, ynoise, znoise));
          }
        }
      }
    };
  });
  return '';
};

export const listing5_7 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const radius = 100;

    p.setup = () => {
      p.createCanvas(500, 300, p.WEBGL);
      p.background(0);
      p.stroke(255);
    };

    p.draw = () => {
      p.background(0);

      // p.translate(p.width/2, p.height/2, 0);
      p.rotateY(p.frameCount * 0.03);
      p.rotateX(p.frameCount * 0.04);

      let s = 0;
      let t = 0;
      let lastx = 0;
      let lasty = 0;
      let lastz = 0;
      while (t < 180) {
        s += 18;
        t += 1;
        const radianS = p.radians(s);
        const radianT = p.radians(t);

        const thisx = 0 + radius * p.cos(radianS) * p.sin(radianT);
        const thisy = 0 + radius * p.sin(radianS) * p.sin(radianT);
        const thisz = 0 + radius * p.cos(radianT);

        if (lastx !== 0) p.line(thisx, thisy, thisz, lastx, lasty, lastz);
        lastx = thisx;
        lasty = thisy;
        lastz = thisz;
      }
    };
  });
  return '';
};
