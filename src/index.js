class Sorter {
  constructor() {
    // your implementation
    this.array = new Array();
    this.setComparator((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }
    );
  }

  add(element) {
    this.array.push(element);
    
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    var newArr =[];
    for (let i = 0; i < indices.length; i++){
      newArr.push(this.array[indices[i]]);
    }
    
    newArr.sort(this.compareFunction);
    indices.sort(
      (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }
    );

    for (let i = 0; i < newArr.length; i++){
      this.array[indices[i]] = newArr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;