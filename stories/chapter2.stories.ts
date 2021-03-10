import p5 from 'p5';
export default { title: 'chapter2' };

declare let globalP5Instance: p5;

export const listing2_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.smooth();
      p.background(230, 230, 230);

      const centX = p.width / 2;
      const centY = p.height / 2;
      p.stroke(130, 0, 0);
      p.strokeWeight(1);
      p.fill(0, 40, 0);

      p.ellipse(centX, centY, 30, 30);
      p.line(centX - 70, centY - 70, centX + 70, centY + 70);
      p.line(centX + 70, centY - 70, centX - 70, centY + 70);
    };
  });
  return '';
};

export const listing2_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.smooth();
      p.background(230, 230, 230);

      p.stroke(130, 0, 0);
      p.strokeWeight(1);
      p.line(
        p.width / 2 - 70,
        p.height / 2 - 70,
        p.width / 2 + 70,
        p.height / 2 + 70
      );
      p.line(
        p.width / 2 + 70,
        p.height / 2 - 70,
        p.width / 2 - 70,
        p.height / 2 + 70
      );

      p.stroke(0, 125);
      p.strokeWeight(6);
      p.fill(255, 150);
      p.ellipse(p.width / 2, p.height / 2, 50, 50);
    };
  });
  return '';
};

export const listing2_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  let diam = 10;
  let centX: number, centY: number;

  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.frameRate(24);
      p.smooth();
      p.background(180);
      centX = p.width / 2;
      centY = p.height / 2;
      p.stroke(0);
      p.strokeWeight(5);
      p.fill(255, 50);
    };
    p.draw = () => {
      if (diam <= 400) {
        p.background(180);
        p.ellipse(centX, centY, diam, diam);
        diam += 10;
      }
    };
  });
  return '';
};

export const listing2_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  let diam = 10;
  let centX: number, centY: number;

  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.frameRate(24);
      p.smooth();
      p.background(180);
      centX = p.width / 2;
      centY = p.height / 2;
      p.stroke(0);
      p.strokeWeight(5);
      p.fill(255, 50);
    };
    p.draw = () => {
      if (diam <= 400) {
        p.background(180);

        p.strokeWeight(5);
        p.fill(255, 50);
        p.ellipse(centX, centY, diam, diam);

        p.strokeWeight(0);
        p.noFill();
        let tempdiam = diam;
        while (tempdiam > 10) {
          p.ellipse(centX, centY, tempdiam, tempdiam);
          tempdiam -= 10;
        }
        diam += 10;
      }
    };
  });
  return '';
};

export const listing2_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  let diam = 10;
  let centX: number, centY: number;

  globalP5Instance = new p5((p: p5) => {
    p.setup = () => {
      p.createCanvas(500, 300);
      p.frameRate(24);
      p.smooth();
      p.background(180);
      centX = p.width / 2;
      centY = p.height / 2;
      p.stroke(0);
      p.strokeWeight(1);
      p.noFill();
    };
    p.draw = () => {
      if (diam <= 400) {
        p.ellipse(centX, centY, diam, diam);
        diam += 10;
      }
    };
  });
  return '';
};
