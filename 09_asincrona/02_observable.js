class Observable {
  constructor() {
    this.events = {}
  }

  on(event, cb) {
    this.events[event] = this.events[event] || []
    this.events[event].push(cb)
  }

  off(event, cb) {
    this.events[event] = this.events[event].filter(x => x !== cb)
  }

  emit(event, ...payload) {
    this.events[event] = this.events[event] || []
    this.events[event].map(cb => cb(...payload))
  }
}

class Metronome extends Observable {
  constructor(tempo) {
    super();
    this.intervalId = setInterval(() => this.tick(), tempo);
    this.counter = 0;
  }

  tick() {
    this.emit('tick', this.counter++);
  }
}

const m = new Metronome(1000);
m.on('tick', t => console.log('* tick number', t));
m.on('tick', t => console.log('* And again'));