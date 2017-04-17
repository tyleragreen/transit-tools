'use strict';

class Path {
  constructor() {
    this.nodes = [];
  }
  
  length() {
    return this.nodes.length;
  }
  
  reverse() {
    return this.nodes.reverse();
  }
  
  add(node) {
    this.nodes.push(node);
  }
  
  contains(node) {
    return this.nodes.indexOf(node) !== -1;
  }
  
  at(length) {
    return this.nodes[length];
  }
  
  fillTo(length, value) {
    if (length < this.length()) {
      throw new Error('Path cannot be filled to less than its current length');
    }
    
    // If the path is already this length, nothing needs to be done.
    if (length === this.length()) {
      return;
    }
    
    let fill;
    const amountToFill = length - this.length();
    for (fill = []; fill.length < amountToFill; fill.push(value));
    
    this.nodes = this.nodes.concat(fill);
  }
}

module.exports = Path;