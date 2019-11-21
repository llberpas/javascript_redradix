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


function Item(name, size, category, createdAt) {
  Object.assign(this, {name, size, category, createdAt})
}

Item.prototype.getSize = function () {
  return this.size
};


class ItemContainer extends Container {
  constructor(name) {
    super(name)
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

const itemContainer = new ItemContainer('Test Container')
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())
itemContainer.canFit(item1) // true
const index = itemContainer.store(item1)
console.log(index) // [0]
const retrieved = itemContainer.retrieve(index)
console.log(retrieved.name)


function ItemBox(capacity) {
  this.capacity = capacity;
  ItemContainer.call(this, 'itemBox Test');
}

ItemBox.prototype = Object.create(ItemContainer.prototype);
ItemBox.prototype.canFit = function (item) {
  let size = item.getSize();
  this.items.forEach(element => {
    size += element.size;
  })
  return this.capacity > size;
};

const box = new ItemBox(10)
const item1 = new Item('Item 1', 5, 'test', new Date())
const item2 = new Item('Item 2', 3, 'test', new Date())
const item3 = new Item('Item 3', 3, 'test', new Date())

box.store(item1)
box.store(item2)

box.canFit(item3) // false
console.log(box.retrieve([1]).name)