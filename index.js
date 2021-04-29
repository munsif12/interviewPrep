// class apple {
//   constructor(...words) {
//     this.words = words;
//   }
//   print() {
//     console.log(`$${this.words.join("$")}$`);
//   }
//   //==> =>
// }
// var apple1 = new apple("apple", "banana", "mango", "orange", "grapes"); // output : $apple$banana$mango$orange$grapes$
// apple1.print();

///async js interiew Prep
function prom() {
  try {
    return new Promise((res, rej) => {
      var data = false;
      if (data) res("success");
      else rej("failed");
    });
  } catch (error) {
    console.log(error);
  }
}
async function result() {
  const res = await prom();
  console.log(res);
}
result();
