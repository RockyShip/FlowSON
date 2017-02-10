// Turns string into an object, unless input IS an object.
function makeObj(input) {
  var Obj;
  if (typeof(input) === "string") { Obj = JSON.parse(input); }
  else if (typeof(input) === "object") {
    console.log("Input was an object, no changes made");
    Obj = input;
  }
  else { console.error("Input could not be parsed"); }
  return Obj;
}

export default class Graph {
  constructor(graph = {}, type = LIST) {
    this.graph = makeObj(graph);
    this.mode = type;
    this.future = [];
    this.past = [];
  }

  function undo() {
    if (this.past.length > 0) {
      this.future.push(this.graph);
      this.graph = this.past.pop();
    } else {
      console.log("Nothing to undo");
    }
  }

  function redo() {
    if (this.future.length < 0) {
      this.past.push(this.graph);
      this.graph = this.future.pop();
    } else {
      console.log("Nothing to redo");
    }
  }

  function set(graph) {
    this.graph = makeObj(graph);
  }

  function get() {
    return this.graph;
  }

  // Adds a node, defaults to being empty.
  function addNode(id, attribs = {}) {
    // Remove node then replace;
    if (this.graph.id) {
      removeNode(id);
    }
    var node = { id: makeObj(attribs) };
    this.graph = Object.assign({}, this.graph, makeObj(node));
  }

  function removeNode(id) {
    delete this.graph.id;
  }
}
