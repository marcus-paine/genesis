class Energy {
  constructor(initialValue) {
    this.total = initialValue;
  }
  total;
  ENERGY_CONSERVATION_CONSTANT = 0.1;
  
  getCellSize() {
    return Math.ceil(Math.random(this.ENERGY_CONSERVATION_CONSTANT * this.total) * 100);
  }

  updateSystemEnergy(value) {
    this.total -= value; 
  }
}

class Universe {
  constructor(size){
    this.size = size;
    this.create();
  }
  size;
  space;

  create() {
    this.space = document.createElement('div');
    this.space.setAttribute('id', 'universe');
    this.space.style.width = `${this.size}px`;
    this.space.style.height = `${this.size}px`;
    document.body.appendChild(this.space);
  }
}

class Cell {
  constructor(universe, energy, color) {
    this.color = color;
    this.createCell(universe, energy, color);
  };
  size;
  color;

  createCell(universe, energy, color) {
    let newCell = document.createElement('div');

    this.size = energy.getCellSize();
    
    newCell.style.width = `${this.size}px`;
    newCell.style.height = `${this.size}px`;
    newCell.style.borderRadius = '50%';
    newCell.style.background = color;
  
    universe.space.appendChild(newCell);
  
    energy.updateSystemEnergy(this.size);
  }
}

(function main(){
  let energy = new Energy(1000);
  let universe = new Universe(10000);

  if (energy.total > 0) {
    new Cell(universe, energy, 'green');
  }
})();


