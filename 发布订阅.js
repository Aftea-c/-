class Observe {
  event = new Map();

  on(name, fn) {
    this.event.set(name, { isOnce: false, fn });
  }

  once(name, fn) {
    this.event.set(name, { isOnce: true, fn });
  }

  delete(name) {
    this.event.delete(name);
  }

  emit(name, data) {
    let cache = this.event.get(name);
    if (cache) {
      if (cache.isOnce) cache.delete(name);
      cache.fn(data);
    }
  }
}

const test = new Observe();
test.on("a", (a) => console.log(a));
test.emit("a", "1111111");
