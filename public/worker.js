

// importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("/comlink/umd/comlink.js");

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

Comlink.expose(obj);