import p5 from 'p5';
export default { title: 'chapter7' };

declare let globalP5Instance: p5;

export const listing7_1 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _cellArray: Cell[][] = [];
    const _cellSize = 10;
    let _numX: number, _numY: number;

    class Cell {
      x: number;
      y: number;
      state: boolean;
      nextState: boolean;
      neighbours: Cell[];

      constructor(ex: number, why: number) {
        this.x = ex * _cellSize;
        this.y = why * _cellSize;
        this.nextState = p.random(2) > 1;
        this.state = this.nextState;
        this.neighbours = [];
      }
      addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
      }

      calcNextState() {
        // to come
      }

      drawMe() {
        this.state = this.nextState;
        p.stroke(0);
        p.fill(this.state ? 0 : 255);
        p.ellipse(this.x, this.y, _cellSize, _cellSize);
      }
    }

    const restart = () => {
      for (let x = 0; x < _numX; x++) {
        _cellArray[x] = [];
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y] = new Cell(x, y);
        }
      }

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          let above = y - 1;
          let below = y + 1;
          let left = x - 1;
          let right = x + 1;

          if (above < 0) above = _numY - 1;
          if (below == _numY) below = 0;
          if (left < 0) left = _numX - 1;
          if (right == _numX) right = 0;

          _cellArray[x][y].addNeighbour(_cellArray[left][above]);
          _cellArray[x][y].addNeighbour(_cellArray[left][y]);
          _cellArray[x][y].addNeighbour(_cellArray[left][below]);
          _cellArray[x][y].addNeighbour(_cellArray[x][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][y]);
          _cellArray[x][y].addNeighbour(_cellArray[right][above]);
          _cellArray[x][y].addNeighbour(_cellArray[x][above]);
        }
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      _numX = p.floor(p.width / _cellSize);
      _numY = p.floor(p.height / _cellSize);
      restart();
    };
    p.draw = () => {
      p.background(200);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].calcNextState();
        }
      }

      p.translate(_cellSize / 2, _cellSize / 2);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].drawMe();
        }
      }
    };
    p.mousePressed = () => {
      restart();
    };
  });
  return '';
};

export const listing7_2 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _cellArray: Cell[][] = [];
    const _cellSize = 10;
    let _numX: number, _numY: number;

    class Cell {
      x: number;
      y: number;
      state: boolean;
      nextState: boolean;
      neighbours: Cell[];

      constructor(ex: number, why: number) {
        this.x = ex * _cellSize;
        this.y = why * _cellSize;
        this.nextState = p.random(2) > 1;
        this.state = this.nextState;
        this.neighbours = [];
      }
      addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
      }

      calcNextState() {
        const liveCount = this.neighbours.filter(({ state }) => state).length;

        if (this.state) {
          this.nextState = liveCount == 2 || liveCount == 3;
        } else {
          this.nextState = liveCount === 3;
        }
      }

      drawMe() {
        this.state = this.nextState;
        p.stroke(0);
        p.fill(this.state ? 0 : 255);
        p.ellipse(this.x, this.y, _cellSize, _cellSize);
      }
    }

    const restart = () => {
      for (let x = 0; x < _numX; x++) {
        _cellArray[x] = [];
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y] = new Cell(x, y);
        }
      }

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          let above = y - 1;
          let below = y + 1;
          let left = x - 1;
          let right = x + 1;

          if (above < 0) above = _numY - 1;
          if (below == _numY) below = 0;
          if (left < 0) left = _numX - 1;
          if (right == _numX) right = 0;

          _cellArray[x][y].addNeighbour(_cellArray[left][above]);
          _cellArray[x][y].addNeighbour(_cellArray[left][y]);
          _cellArray[x][y].addNeighbour(_cellArray[left][below]);
          _cellArray[x][y].addNeighbour(_cellArray[x][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][y]);
          _cellArray[x][y].addNeighbour(_cellArray[right][above]);
          _cellArray[x][y].addNeighbour(_cellArray[x][above]);
        }
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      _numX = p.floor(p.width / _cellSize);
      _numY = p.floor(p.height / _cellSize);
      restart();
    };
    p.draw = () => {
      p.background(200);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].calcNextState();
        }
      }

      p.translate(_cellSize / 2, _cellSize / 2);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].drawMe();
        }
      }
    };
    p.mousePressed = () => {
      restart();
    };
  });
  return '';
};

export const listing7_3 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _cellArray: Cell[][] = [];
    const _cellSize = 10;
    let _numX: number, _numY: number;

    class Cell {
      x: number;
      y: number;
      state: boolean;
      nextState: boolean;
      neighbours: Cell[];

      constructor(ex: number, why: number) {
        this.x = ex * _cellSize;
        this.y = why * _cellSize;
        this.nextState = p.random(2) > 1;
        this.state = this.nextState;
        this.neighbours = [];
      }
      addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
      }

      calcNextState() {
        let liveCount = this.neighbours.filter(({ state }) => state).length;
        if (this.state) liveCount++;

        if (liveCount <= 4) this.nextState = false;
        else if (liveCount > 4) this.nextState = true;

        if (liveCount == 4 || liveCount == 5) this.nextState = !this.nextState;
      }

      drawMe() {
        this.state = this.nextState;
        p.stroke(0);
        p.fill(this.state ? 0 : 255);
        p.ellipse(this.x, this.y, _cellSize, _cellSize);
      }
    }

    const restart = () => {
      for (let x = 0; x < _numX; x++) {
        _cellArray[x] = [];
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y] = new Cell(x, y);
        }
      }

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          let above = y - 1;
          let below = y + 1;
          let left = x - 1;
          let right = x + 1;

          if (above < 0) above = _numY - 1;
          if (below == _numY) below = 0;
          if (left < 0) left = _numX - 1;
          if (right == _numX) right = 0;

          _cellArray[x][y].addNeighbour(_cellArray[left][above]);
          _cellArray[x][y].addNeighbour(_cellArray[left][y]);
          _cellArray[x][y].addNeighbour(_cellArray[left][below]);
          _cellArray[x][y].addNeighbour(_cellArray[x][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][y]);
          _cellArray[x][y].addNeighbour(_cellArray[right][above]);
          _cellArray[x][y].addNeighbour(_cellArray[x][above]);
        }
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      _numX = p.floor(p.width / _cellSize);
      _numY = p.floor(p.height / _cellSize);
      restart();
    };
    p.draw = () => {
      p.background(200);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].calcNextState();
        }
      }

      p.translate(_cellSize / 2, _cellSize / 2);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].drawMe();
        }
      }
    };
    p.mousePressed = () => {
      restart();
    };
  });
  return '';
};

export const listing7_4 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _cellArray: Cell[][] = [];
    const _cellSize = 10;
    let _numX: number, _numY: number;

    class Cell {
      x: number;
      y: number;
      state: number;
      nextState: number;
      neighbours: Cell[];

      constructor(ex: number, why: number) {
        this.x = ex * _cellSize;
        this.y = why * _cellSize;
        this.nextState = p.int(p.random(3));
        this.state = this.nextState;
        this.neighbours = [];
      }
      addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
      }

      calcNextState() {
        if (this.state === 0) {
          const firingCount = this.neighbours.filter(({ state }) => state === 1)
            .length;
          this.nextState = firingCount === 2 ? 1 : this.state;
        } else {
          this.nextState = this.state === 1 ? 2 : 0;
        }
      }

      drawMe() {
        this.state = this.nextState;
        p.stroke(0);
        if (this.state === 1) p.fill(0);
        else if (this.state === 2) p.fill(150);
        else p.fill(255);
        p.ellipse(this.x, this.y, _cellSize, _cellSize);
      }
    }

    const restart = () => {
      for (let x = 0; x < _numX; x++) {
        _cellArray[x] = [];
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y] = new Cell(x, y);
        }
      }

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          let above = y - 1;
          let below = y + 1;
          let left = x - 1;
          let right = x + 1;

          if (above < 0) above = _numY - 1;
          if (below == _numY) below = 0;
          if (left < 0) left = _numX - 1;
          if (right == _numX) right = 0;

          _cellArray[x][y].addNeighbour(_cellArray[left][above]);
          _cellArray[x][y].addNeighbour(_cellArray[left][y]);
          _cellArray[x][y].addNeighbour(_cellArray[left][below]);
          _cellArray[x][y].addNeighbour(_cellArray[x][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][y]);
          _cellArray[x][y].addNeighbour(_cellArray[right][above]);
          _cellArray[x][y].addNeighbour(_cellArray[x][above]);
        }
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      _numX = p.floor(p.width / _cellSize);
      _numY = p.floor(p.height / _cellSize);
      restart();
    };
    p.draw = () => {
      p.background(200);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].calcNextState();
        }
      }

      p.translate(_cellSize / 2, _cellSize / 2);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].drawMe();
        }
      }
    };
    p.mousePressed = () => {
      restart();
    };
  });
  return '';
};

export const listing7_5 = () => {
  if (!!globalP5Instance) globalP5Instance.remove();
  globalP5Instance = new p5((p: p5) => {
    const _cellArray: Cell[][] = [];
    const _cellSize = 10;
    let _numX: number, _numY: number;

    class Cell {
      x: number;
      y: number;
      state: number;
      nextState: number;
      lastState = 0;
      neighbours: Cell[];

      constructor(ex: number, why: number) {
        this.x = ex * _cellSize;
        this.y = why * _cellSize;
        this.nextState = (this.x / 500 + this.y / 300) * 14;
        this.state = this.nextState;
        this.neighbours = [];
      }
      addNeighbour(cell: Cell) {
        this.neighbours.push(cell);
      }

      calcNextState() {
        const total = this.neighbours.reduce(
          (acc, { state }) => (acc += state),
          0
        );
        const average = p.int(total / 8);
        if (average === 255) this.nextState = 0;
        else if (average === 0) this.nextState = 255;
        else {
          this.nextState = this.state + average;
          if (this.lastState > 0) this.nextState -= this.lastState;
          if (this.nextState > 255) this.nextState = 255;
          else if (this.nextState < 0) this.nextState = 0;
        }
        this.lastState = this.state;
      }

      drawMe() {
        this.state = this.nextState;
        p.stroke(0);
        p.fill(this.state);
        p.ellipse(this.x, this.y, _cellSize, _cellSize);
      }
    }

    const restart = () => {
      for (let x = 0; x < _numX; x++) {
        _cellArray[x] = [];
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y] = new Cell(x, y);
        }
      }

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          let above = y - 1;
          let below = y + 1;
          let left = x - 1;
          let right = x + 1;

          if (above < 0) above = _numY - 1;
          if (below == _numY) below = 0;
          if (left < 0) left = _numX - 1;
          if (right == _numX) right = 0;

          _cellArray[x][y].addNeighbour(_cellArray[left][above]);
          _cellArray[x][y].addNeighbour(_cellArray[left][y]);
          _cellArray[x][y].addNeighbour(_cellArray[left][below]);
          _cellArray[x][y].addNeighbour(_cellArray[x][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][below]);
          _cellArray[x][y].addNeighbour(_cellArray[right][y]);
          _cellArray[x][y].addNeighbour(_cellArray[right][above]);
          _cellArray[x][y].addNeighbour(_cellArray[x][above]);
        }
      }
    };
    p.setup = () => {
      p.createCanvas(500, 300);
      _numX = p.floor(p.width / _cellSize);
      _numY = p.floor(p.height / _cellSize);
      restart();
    };
    p.draw = () => {
      p.background(200);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].calcNextState();
        }
      }

      p.translate(_cellSize / 2, _cellSize / 2);

      for (let x = 0; x < _numX; x++) {
        for (let y = 0; y < _numY; y++) {
          _cellArray[x][y].drawMe();
        }
      }
    };
    p.mousePressed = () => {
      restart();
    };
  });
  return '';
};
