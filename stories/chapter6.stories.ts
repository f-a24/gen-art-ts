import p5 from 'p5';
export default { title: 'chapter6' };

declare let globalP5Instance: p5;

export const listing6_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const x = p.random(p.width);
        const y = p.random(p.height);
        const radius = p.random(100) + 10;
        p.noStroke();
        p.ellipse(x, y, radius * 2, radius * 2);
        p.stroke(0, 150);
        p.ellipse(x, y, 10, 10);
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};

export const listing6_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class Circle {
      x: number;
      y: number;
      radius: number;
      linecol: p5.Color;
      fillcol: p5.Color;
      alph: number;

      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.radius = p.random(100) + 10;
        this.linecol = p.color(p.random(255), p.random(255), p.random(255));
        this.fillcol = p.color(p.random(255), p.random(255), p.random(255));
        this.alph = p.random(255);
      }
    }
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const thisCirc = new Circle();
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};

export const listing6_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class Circle {
      x: number;
      y: number;
      radius: number;
      linecol: p5.Color;
      fillcol: p5.Color;
      alph: number;

      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.radius = p.random(100) + 10;
        this.linecol = p.color(p.random(255), p.random(255), p.random(255));
        this.fillcol = p.color(p.random(255), p.random(255), p.random(255));
        this.alph = p.random(255);
      }

      drawMe() {
        this.fillcol.setAlpha(this.alph);
        this.linecol.setAlpha(150);
        p.noStroke();
        p.fill(this.fillcol);
        p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        p.stroke(this.linecol);
        p.noFill();
        p.ellipse(this.x, this.y, 10, 10);
      }
    }
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const thisCirc = new Circle();
        thisCirc.drawMe();
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};

export const listing6_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class Circle {
      x: number;
      y: number;
      radius: number;
      linecol: p5.Color;
      fillcol: p5.Color;
      alph: number;
      xmove: number;
      ymove: number;

      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.radius = p.random(100) + 10;
        this.linecol = p.color(p.random(255), p.random(255), p.random(255));
        this.fillcol = p.color(p.random(255), p.random(255), p.random(255));
        this.alph = p.random(255);
        this.xmove = p.random(10) - 5;
        this.ymove = p.random(10) - 5;
      }

      drawMe() {
        this.fillcol.setAlpha(this.alph);
        this.linecol.setAlpha(150);
        p.noStroke();
        p.fill(this.fillcol);
        p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        p.stroke(this.linecol);
        p.noFill();
        p.ellipse(this.x, this.y, 10, 10);
      }

      updateMe() {
        this.x += this.xmove;
        this.y += this.ymove;
        if (this.x > p.width + this.radius) this.x = 0 - this.radius;
        if (this.x < 0 - this.radius) this.x = p.width + this.radius;
        if (this.y > p.height + this.radius) this.y = 0 - this.radius;
        if (this.y < 0 - this.radius) this.y = p.height + this.radius;
        this.drawMe();
      }
    }
    const _circleArr: Circle[] = [];
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const thisCirc = new Circle();
        thisCirc.drawMe();
        _circleArr.push(thisCirc);
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.draw = () => {
      p.background(255);
      _circleArr.forEach(circle => {
        circle.updateMe();
      });
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};

export const listing6_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class Circle {
      x: number;
      y: number;
      radius: number;
      linecol: p5.Color;
      fillcol: p5.Color;
      alph: number;
      xmove: number;
      ymove: number;

      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.radius = p.random(100) + 10;
        this.linecol = p.color(p.random(255), p.random(255), p.random(255));
        this.fillcol = p.color(p.random(255), p.random(255), p.random(255));
        this.alph = p.random(255);
        this.xmove = p.random(10) - 5;
        this.ymove = p.random(10) - 5;
      }

      drawMe() {
        this.fillcol.setAlpha(this.alph);
        this.linecol.setAlpha(150);
        p.noStroke();
        p.fill(this.fillcol);
        p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        p.stroke(this.linecol);
        p.noFill();
        p.ellipse(this.x, this.y, 10, 10);
      }

      updateMe() {
        this.x += this.xmove;
        this.y += this.ymove;
        if (this.x > p.width + this.radius) this.x = 0 - this.radius;
        if (this.x < 0 - this.radius) this.x = p.width + this.radius;
        if (this.y > p.height + this.radius) this.y = 0 - this.radius;
        if (this.y < 0 - this.radius) this.y = p.height + this.radius;

        const touching = _circleArr.some(circle => {
          if (circle === this) return false;
          const dis = p.dist(this.x, this.y, circle.x, circle.y);
          return dis - this.radius - circle.radius < 0;
        });

        if (touching) {
          if (this.alph > 0) this.alph--;
        } else {
          if (this.alph < 255) this.alph += 2;
        }
        this.drawMe();
      }
    }
    const _circleArr: Circle[] = [];
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const thisCirc = new Circle();
        thisCirc.drawMe();
        _circleArr.push(thisCirc);
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.draw = () => {
      p.background(255);
      _circleArr.forEach(circle => {
        circle.updateMe();
      });
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};

export const listing6_6 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    class Circle {
      x: number;
      y: number;
      radius: number;
      linecol: p5.Color;
      fillcol: p5.Color;
      alph: number;
      xmove: number;
      ymove: number;

      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(p.height);
        this.radius = p.random(100) + 10;
        this.linecol = p.color(p.random(255), p.random(255), p.random(255));
        this.fillcol = p.color(p.random(255), p.random(255), p.random(255));
        this.alph = p.random(255);
        this.xmove = p.random(10) - 5;
        this.ymove = p.random(10) - 5;
      }

      drawMe() {
        this.fillcol.setAlpha(this.alph);
        this.linecol.setAlpha(150);
        p.noStroke();
        p.fill(this.fillcol);
        p.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
        p.stroke(this.linecol);
        p.noFill();
        p.ellipse(this.x, this.y, 10, 10);
      }

      updateMe() {
        this.x += this.xmove;
        this.y += this.ymove;
        if (this.x > p.width + this.radius) this.x = 0 - this.radius;
        if (this.x < 0 - this.radius) this.x = p.width + this.radius;
        if (this.y > p.height + this.radius) this.y = 0 - this.radius;
        if (this.y < 0 - this.radius) this.y = p.height + this.radius;

        _circleArr.forEach(circle => {
          if (circle !== this) {
            const dis = p.dist(this.x, this.y, circle.x, circle.y);
            let overlap = dis - this.radius - circle.radius;
            if (overlap < 0) {
              const midx =
                this.x < circle.x
                  ? this.x + (circle.x - this.x) / 2
                  : circle.x + (this.x - circle.x) / 2;
              const midy =
                this.y < circle.y
                  ? this.y + (circle.y - this.y) / 2
                  : circle.y + (this.y - circle.y) / 2;
              p.stroke(0, 100);
              p.noFill();
              overlap *= -1;
              p.ellipse(midx, midy, overlap, overlap);
            }
          }
        });
        this.drawMe();
      }
    }
    const _circleArr: Circle[] = [];
    const drawCircles = () => {
      for (let i = 0; i < 10; i++) {
        const thisCirc = new Circle();
        thisCirc.drawMe();
        _circleArr.push(thisCirc);
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      p.background(255);
      p.smooth();
      p.strokeWeight(1);
      p.fill(150, 50);
      drawCircles();
    };
    p.draw = () => {
      p.background(255);
      _circleArr.forEach(circle => {
        circle.updateMe();
      });
    };
    p.mouseReleased = () => {
      drawCircles();
    };
  });
  return '';
};
