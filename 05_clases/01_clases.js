// Container
// ================================================
class Container {
  constructor(name) {
    this.name = name;
  }

  canFit(item) {
    throw new Error('Abstract method')
  }

  store(item) {
    throw new Error('Abstract method')
  }

  retrieve(index) {
    throw new Error('Abstract method')
  }
}

// Item
// ================================================
class Item {
  constructor(name, size, category, createdAt) {
    this.name = name;
    this.size = size;
    this.category = category;
    this.createdAt = createdAt;
  }

  getSize() {
    return this.size;
  }
}

// ItemContainer
// ================================================
class ItemContainer extends Container {
  constructor(name) {
    super(name);
    this.items = [];
  }

  canFit(item) {
    return true;
  }

  store(item) {
    if (this.canFit(item)) {
      this.items.push(item);
    }
    return this.items.length - 1;
  }

  retrieve(index) {
    if (index > this.items.length - 1) {
      return `El indice ${index} es mayor que la cantidad de elementos`
    } else {
      return this.items[index];
    }
  }

}

// ItemBox
// ================================================
class ItemBox extends ItemContainer {
  constructor(capcacity) {
    super('ItemBox Test');
    this.capacity = capcacity;
    this.usedSpace = 0
  }

  canFit(item) {
    return this.capacity > this.usedSpace + item.size;
  };

  store(item) {
    if (this.canFit(item)) {
      this.usedSpace += item.size;
      this.items.push(item);
      return this.items.length - 1;
    }
    return -1;
  }
}

// NestedContainer
// ================================================
class NestedContainer extends Container {
  constructor(name, subcontainers) {
    super(name)
    this.subcontainers = subcontainers
  }

  canFit(item) {
    return this.subcontainers.some(subcontainer => subcontainer.canFit(item))
  }

  store(item) {
    if (this.canFit(item)) {
      let index = this.subcontainers.findIndex(subcontainer => subcontainer.canFit(item))
      return [index].concat(this.subcontainers[index].store(item))
    }
  }

  retrieve([index, ...rest]) {
    return this.subcontainers[index].retrieve(rest)
  }
}

// Shelf
// ================================================
class Shelf extends NestedContainer {
  constructor(maxBoxes, boxCapacity) {
    super('Shelf', []);
    this.maxBoxes = maxBoxes;
    this.boxCapacity = boxCapacity;
  }

  canFit(item) {
    if (super.canFit(item)) return true
    return (this.boxCapacity >= item.size && this.maxBoxes > this.subcontainers.length)
  }

  store(item) {
    if (this.canFit(item)) {
      if (!super.canFit(item)) this.subcontainers.push(new ItemBox(this.boxCapacity))
      return super.store(item)
    }
    return [-1, -1]
  }
}

// Rack
// ================================================
class Rack extends Shelf {
  constructor(numShelves, boxesPerShelf, boxCapacity) {
  super(boxesPerShelf, boxCapacity)
    this.numShelves = numShelves;
  }


}

// Init
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())
const item4 = new Item('Item 4', 8, 'test', new Date())
const item5 = new Item('Item 5', 1, 'test', new Date())

// // ItemContainer
// const itemContainer = new ItemContainer('Test Container');
// itemContainer.canFit(item1);
// const index = itemContainer.store(item1);
// console.log(index);
// const retrieved = itemContainer.retrieve(index);
// console.log(retrieved.name);
//
// // ItemBox
// const box = new ItemBox(10);
// box.store(item1);
// box.store(item2);
// box.canFit(item3);
// console.log(box.retrieve([1]).name);

// // NestedContainer
// const boxes = [new ItemBox(10), new ItemBox(10)]
// const nestedContainer = new NestedContainer('NestedContainer', boxes)
// nestedContainer.store(item1)
// const i1 = nestedContainer.store(item2)
// console.log(i1) // [0, 1]
// nestedContainer.canFit(item3) // true
// const i2 = nestedContainer.store(item3)
// console.log(i2) // [1, 0]
// nestedContainer.canFit(item4) // false
// console.log(nestedContainer.retrieve([0, 1]).name)

// Shelf
const shelf = new Shelf(2, 10)
//shelf starts with 0 boxes...
console.log(shelf.subcontainers.length) // 0
// ...but has to create a new box to hold item1
shelf.canFit(item1) // true
shelf.store(item1)
console.log(shelf.subcontainers.length) // 1

shelf.canFit(item2) // true
shelf.store(item2)
console.log(shelf.subcontainers.length) // 1
shelf.canFit(item3) // true
shelf.store(item3)
console.log(shelf.subcontainers.length) // 2
shelf.canFit(item4) // false
shelf.canFit(item5) // true
console.log(shelf.store(item5))


// const rack = new Rack(2, 2, 5)
// console.log(rack.subcontainers.length) // 2
// rack.store(item1)
// rack.store(item2)
// console.log(rack.store(item3)) // [1, 0, 0]
// rack.canFit(item4) // false
// rack.canFit(item5) // true
// console.log(rack.retrieve([0, 1, 0]).name)