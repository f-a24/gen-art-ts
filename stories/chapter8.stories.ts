import p5 from 'p5';
export default { title: 'chapter8' };

declare let globalP5Instance: p5;

export const listing8_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _numChildren = 3;
    const _maxLevels = 3;

    class Branch {
      level: number;
      index: number;
      x: number;
      y: number;
      endx: number;
      endy: number;
      children: Branch[] = [];

      constructor(lev: number, ind: number, ex: number, why: number) {
        this.level = lev;
        this.index = ind;
        this.updateMe(ex, why);
        if (this.level < _maxLevels) {
          for (let x = 0; x < _numChildren; x++) {
            this.children[x] = new Branch(
              this.level + 1,
              x,
              this.endx,
              this.endy
            );
          }
        }
      }
      updateMe(ex: number, why: number) {
        this.x = ex;
        this.y = why;
        this.endx = this.x + this.level * (p.random(100) - 50);
        this.endy = this.y + 50 + this.level * p.random(50);
      }
      drawMe() {
        p.line(this.x, this.y, this.endx, this.endy);
        p.ellipse(this.x, this.y, 5, 5);
        this.children.forEach(child => {
          child.drawMe();
        });
      }
    }

    const newTree = () => {
      const _trunk = new Branch(1, 0, p.width / 2, 50);
      _trunk.drawMe();
    };
    p.setup = () => {
      p.createCanvas(750, 500);
      p.background(255);
      p.noFill();
      p.smooth();
      newTree();
    };
  });
  return '';
};

export const listing8_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _numChildren = 5;
    const _maxLevels = 5;
    let _trunk: Branch;

    class Branch {
      level: number;
      index: number;
      x: number;
      y: number;
      endx: number;
      endy: number;

      strokeW: number;
      alph: number;
      len: number;
      lenChange: number;
      rot: number;
      rotChange: number;

      children: Branch[] = [];

      constructor(lev: number, ind: number, ex: number, why: number) {
        this.level = lev;
        this.index = ind;

        this.strokeW = (1 / this.level) * 10;
        this.alph = 255 / this.level;
        this.len = (1 / this.level) * p.random(200);
        this.rot = p.random(360);
        this.lenChange = p.random(10) - 5;
        this.rotChange = p.random(10) - 5;

        this.updateMe(ex, why);
        if (this.level < _maxLevels) {
          for (let x = 0; x < _numChildren; x++) {
            this.children[x] = new Branch(
              this.level + 1,
              x,
              this.endx,
              this.endy
            );
          }
        }
      }
      updateMe(ex: number, why: number) {
        this.x = ex;
        this.y = why;
        this.rot += this.rotChange;
        if (this.rot > 360) this.rot = 0;
        else if (this.rot < 0) this.rot = 360;

        this.len -= this.lenChange;
        if (this.len < 0) this.lenChange *= -1;
        else if (this.len > 200) this.lenChange *= -1;

        const radian = p.radians(this.rot);
        this.endx = this.x + this.len * p.cos(radian);
        this.endy = this.y + this.len * p.sin(radian);

        this.children.forEach(child => {
          child.updateMe(this.endx, this.endy);
        });
      }
      drawMe() {
        if (this.level > 1) {
          p.strokeWeight(this.strokeW);
          p.stroke(0, this.alph);
          p.fill(255, this.alph);
          p.line(this.x, this.y, this.endx, this.endy);
          p.ellipse(this.endx, this.endy, this.len / 12, this.len / 12);
        }
        this.children.forEach(child => {
          child.drawMe();
        });
      }
    }

    const newTree = () => {
      _trunk = new Branch(1, 0, p.width / 2, 50);
      _trunk.drawMe();
    };
    p.setup = () => {
      p.createCanvas(750, 500);
      p.background(255);
      p.noFill();
      p.smooth();
      newTree();
    };
    p.draw = () => {
      p.background(255);
      _trunk.updateMe(p.width / 2, p.height / 2);
      _trunk.drawMe();
    };
  });
  return '';
};

export const listing8_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class PointObj {
      x: number;
      y: number;
      constructor(ex: number, why: number) {
        this.x = ex;
        this.y = why;
      }
    }

    class Branch {
      level: number;
      num: number;
      outerPoints: PointObj[];

      constructor(lev: number, n: number, points: PointObj[]) {
        this.level = lev;
        this.num = n;
        this.outerPoints = points;
      }

      drawMe() {
        p.strokeWeight(5 - this.level);
        // draw outer shape
        this.outerPoints.forEach((point, i, self) => {
          let nexti = i + 1;
          if (nexti === self.length) nexti = 0;
          p.line(point.x, point.y, self[nexti].x, self[nexti].y);
        });
      }
    }

    class FractalRoot {
      pointArr: PointObj[] = [];
      rootBranch: Branch;

      constructor() {
        const centX = p.width / 2;
        const centY = p.height / 2;
        let count = 0;
        for (let i = 0; i < 360; i += 72) {
          const x = centX + 400 * p.cos(p.radians(i));
          const y = centY + 400 * p.sin(p.radians(i));
          this.pointArr[count] = new PointObj(x, y);
          count++;
        }
        this.rootBranch = new Branch(0, 0, this.pointArr);
      }

      drawShape() {
        this.rootBranch.drawMe();
      }
    }

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.smooth();
      const pentagon = new FractalRoot();
      pentagon.drawShape();
    };
  });
  return '';
};

export const listing8_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class PointObj {
      x: number;
      y: number;
      constructor(ex: number, why: number) {
        this.x = ex;
        this.y = why;
      }
    }

    class Branch {
      level: number;
      num: number;
      outerPoints: PointObj[];
      midPoints: PointObj[];

      constructor(lev: number, n: number, points: PointObj[]) {
        this.level = lev;
        this.num = n;
        this.outerPoints = points;
        this.midPoints = this.calcMidPoints();
      }

      calcMidPoints() {
        return this.outerPoints.map((point, i, self) =>
          this.calcMidPoint(point, self[i + 1 === self.length ? 0 : i + 1])
        );
      }

      calcMidPoint(end1: PointObj, end2: PointObj) {
        const mx =
          end1.x > end2.x
            ? end2.x + (end1.x - end2.x) / 2
            : end1.x + (end2.x - end1.x) / 2;
        const my =
          end1.y > end2.y
            ? end2.y + (end1.y - end2.y) / 2
            : end1.y + (end2.y - end1.y) / 2;
        return new PointObj(mx, my);
      }

      drawMe() {
        p.strokeWeight(5 - this.level);
        // draw outer shape
        this.outerPoints.forEach((point, i, self) => {
          let nexti = i + 1;
          if (nexti === self.length) nexti = 0;
          p.line(point.x, point.y, self[nexti].x, self[nexti].y);
        });
        // draw midpoints
        p.strokeWeight(0.5);
        p.fill(255, 150);
        this.midPoints.forEach(point => {
          p.ellipse(point.x, point.y, 15, 15);
        });
      }
    }

    class FractalRoot {
      pointArr: PointObj[] = [];
      rootBranch: Branch;

      constructor() {
        const centX = p.width / 2;
        const centY = p.height / 2;
        let count = 0;
        for (let i = 0; i < 360; i += 72) {
          const x = centX + 400 * p.cos(p.radians(i));
          const y = centY + 400 * p.sin(p.radians(i));
          this.pointArr[count] = new PointObj(x, y);
          count++;
        }
        this.rootBranch = new Branch(0, 0, this.pointArr);
      }

      drawShape() {
        this.rootBranch.drawMe();
      }
    }

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.smooth();
      const pentagon = new FractalRoot();
      pentagon.drawShape();
    };
  });
  return '';
};

export const listing8_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _strutFactor = 0.2;

    class PointObj {
      x: number;
      y: number;
      constructor(ex: number, why: number) {
        this.x = ex;
        this.y = why;
      }
    }

    class Branch {
      level: number;
      num: number;
      outerPoints: PointObj[];
      midPoints: PointObj[];
      projPoints: PointObj[];

      constructor(lev: number, n: number, points: PointObj[]) {
        this.level = lev;
        this.num = n;
        this.outerPoints = points;
        this.midPoints = this.calcMidPoints();
        this.projPoints = this.calcStrutPoints();
      }

      calcMidPoints() {
        return this.outerPoints.map((point, i, self) =>
          this.calcMidPoint(point, self[i + 1 === self.length ? 0 : i + 1])
        );
      }

      calcMidPoint(end1: PointObj, end2: PointObj) {
        const mx =
          end1.x > end2.x
            ? end2.x + (end1.x - end2.x) / 2
            : end1.x + (end2.x - end1.x) / 2;
        const my =
          end1.y > end2.y
            ? end2.y + (end1.y - end2.y) / 2
            : end1.y + (end2.y - end1.y) / 2;
        return new PointObj(mx, my);
      }

      calcStrutPoints() {
        return this.midPoints.map((point, i, self) => {
          let nexti = i + 3;
          if (nexti >= self.length) nexti -= self.length;
          return this.calcProjPoint(point, this.outerPoints[nexti]);
        });
      }

      calcProjPoint(mp: PointObj, op: PointObj) {
        const opp = op.x > mp.x ? op.x - mp.x : mp.x - op.x;
        const adj = op.y > mp.y ? op.y - mp.y : mp.y - op.y;
        const px =
          op.x > mp.x ? mp.x + opp * _strutFactor : mp.x - opp * _strutFactor;
        const py =
          op.y > mp.y ? mp.y + adj * _strutFactor : mp.y - adj * _strutFactor;
        return new PointObj(px, py);
      }

      drawMe() {
        p.strokeWeight(5 - this.level);
        // draw outer shape
        this.outerPoints.forEach((point, i, self) => {
          let nexti = i + 1;
          if (nexti === self.length) nexti = 0;
          p.line(point.x, point.y, self[nexti].x, self[nexti].y);
        });
        // draw midpoints
        p.strokeWeight(0.5);
        p.fill(255, 150);
        this.midPoints.forEach((point, i) => {
          p.ellipse(point.x, point.y, 15, 15);
          p.line(point.x, point.y, this.projPoints[i].x, this.projPoints[i].y);
          p.ellipse(this.projPoints[i].x, this.projPoints[i].y, 15, 15);
        });
      }
    }

    class FractalRoot {
      pointArr: PointObj[] = [];
      rootBranch: Branch;

      constructor() {
        const centX = p.width / 2;
        const centY = p.height / 2;
        let count = 0;
        for (let i = 0; i < 360; i += 72) {
          const x = centX + 400 * p.cos(p.radians(i));
          const y = centY + 400 * p.sin(p.radians(i));
          this.pointArr[count] = new PointObj(x, y);
          count++;
        }
        this.rootBranch = new Branch(0, 0, this.pointArr);
      }

      drawShape() {
        this.rootBranch.drawMe();
      }
    }

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.smooth();
      const pentagon = new FractalRoot();
      pentagon.drawShape();
    };
  });
  return '';
};

export const listing8_6 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _maxlevels = 4;
    const _numSides = 8;
    let _strutFactor = 0.2;
    let _strutNoise: number;

    class PointObj {
      x: number;
      y: number;
      constructor(ex: number, why: number) {
        this.x = ex;
        this.y = why;
      }
    }

    class Branch {
      level: number;
      num: number;
      outerPoints: PointObj[];
      midPoints: PointObj[];
      projPoints: PointObj[];
      myBranches: Branch[] = [];

      constructor(lev: number, n: number, points: PointObj[]) {
        this.level = lev;
        this.num = n;
        this.outerPoints = points;
        this.midPoints = this.calcMidPoints();
        this.projPoints = this.calcStrutPoints();

        if (this.level + 1 < _maxlevels) {
          const childBranch = new Branch(this.level + 1, 0, this.projPoints);
          this.myBranches.push(childBranch);
          this.outerPoints.forEach((point, i, self) => {
            let nexti = i - 1;
            if (nexti < 0) nexti += self.length;
            const newPoints = [
              this.projPoints[i],
              this.midPoints[i],
              point,
              this.midPoints[nexti],
              this.projPoints[nexti]
            ];
            const childBranch = new Branch(this.level + 1, i + 1, newPoints);
            this.myBranches.push(childBranch);
          });
        }
      }

      calcMidPoints() {
        return this.outerPoints.map((point, i, self) =>
          this.calcMidPoint(point, self[i + 1 === self.length ? 0 : i + 1])
        );
      }

      calcMidPoint(end1: PointObj, end2: PointObj) {
        const mx =
          end1.x > end2.x
            ? end2.x + (end1.x - end2.x) / 2
            : end1.x + (end2.x - end1.x) / 2;
        const my =
          end1.y > end2.y
            ? end2.y + (end1.y - end2.y) / 2
            : end1.y + (end2.y - end1.y) / 2;
        return new PointObj(mx, my);
      }

      calcStrutPoints() {
        return this.midPoints.map((point, i, self) => {
          let nexti = i + 3;
          if (nexti >= self.length) nexti -= self.length;
          return this.calcProjPoint(point, this.outerPoints[nexti]);
        });
      }

      calcProjPoint(mp: PointObj, op: PointObj) {
        const opp = op.x > mp.x ? op.x - mp.x : mp.x - op.x;
        const adj = op.y > mp.y ? op.y - mp.y : mp.y - op.y;
        const px =
          op.x > mp.x ? mp.x + opp * _strutFactor : mp.x - opp * _strutFactor;
        const py =
          op.y > mp.y ? mp.y + adj * _strutFactor : mp.y - adj * _strutFactor;
        return new PointObj(px, py);
      }

      drawMe() {
        p.strokeWeight(5 - this.level);
        // draw outer shape
        this.outerPoints.forEach((point, i, self) => {
          let nexti = i + 1;
          if (nexti === self.length) nexti = 0;
          p.line(point.x, point.y, self[nexti].x, self[nexti].y);
        });
        // draw midpoints
        p.strokeWeight(0.5);
        p.fill(255, 150);
        this.midPoints.forEach((point, i) => {
          p.ellipse(point.x, point.y, 15, 15);
          p.line(point.x, point.y, this.projPoints[i].x, this.projPoints[i].y);
          p.ellipse(this.projPoints[i].x, this.projPoints[i].y, 15, 15);
        });

        this.myBranches.forEach(b => {
          b.drawMe();
        });
      }
    }

    class FractalRoot {
      pointArr: PointObj[] = [];
      rootBranch: Branch;

      constructor(startAngle: number) {
        const centX = p.width / 2;
        const centY = p.height / 2;
        const angleStep = 360 / _numSides;
        let count = 0;
        for (let i = 0; i < 360; i += angleStep) {
          const x = centX + 400 * p.cos(p.radians(startAngle + i));
          const y = centY + 400 * p.sin(p.radians(startAngle + i));
          this.pointArr[count] = new PointObj(x, y);
          count++;
        }
        this.rootBranch = new Branch(0, 0, this.pointArr);
      }

      drawShape() {
        this.rootBranch.drawMe();
      }
    }

    p.setup = () => {
      p.createCanvas(1000, 1000);
      p.smooth();
      _strutNoise = p.random(10);
    };
    p.draw = () => {
      p.background(255);

      _strutNoise += 0.01;
      _strutFactor = p.noise(_strutNoise) * 3 - 1;

      const pentagon = new FractalRoot(p.frameCount);
      pentagon.drawShape();
    };
  });
  return '';
};
