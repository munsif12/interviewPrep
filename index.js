class apple {
  constructor(...words) {
    this.words = words;
  }
  print() {
    console.log(`$${this.words.join("$")}$`);
  }
  //==> =>
}
var apple1 = new apple("apple", "banana", "mango", "orange", "grapes"); // output : $apple$banana$mango$orange$grapes$
apple1.print();
