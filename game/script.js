const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const third = document.querySelectorAll(".third");

let arr = [
  "bat",
  "cat",
  "sat",
  "bun",
  "sun",
  "num",
  "ant",
  "and",
  "fix",
  "own",
  "are",
  "fly",
  "odd",
  "ape",
  "fry",
  "our",
  "ace",
  "for",
  "pet",
  "act",
  "got",
  "pat",
  "ask",
  "get",
  "peg",
  "arm",
  "god",
  "paw",
  "age",
  "gel",
  "pup",
  "ago",
];

function letter(letter, loc) {
  return arr.filter((item) => {
    return item[loc] == letter;
  });
}

let loc;

first.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    console.log(item.className == "b first");

    console.log(item.innerHTML);
    loc = 0;
    console.log(loc);
    //    console.log( letter(item.innerHTML,loc));
    forOutput(letter(item.innerHTML, loc), loc);
  });
  item.addEventListener("mouseleave", () => {
    // first.forEach(div=>{
    //     div.classList.remove("item")
    // })
    second.forEach((div) => {
      div.classList.remove("item");
    });
    third.forEach((div) => {
      div.classList.remove("item");
    });
  });
});

second.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    console.log(item.innerHTML);
    loc = 1;
    console.log(loc);
    forOutput(letter(item.innerHTML, loc), loc);
  });
  item.addEventListener("mouseleave", () => {
    first.forEach((div) => {
      div.classList.remove("item");
    });
    // second.forEach(div=>{
    //     div.classList.remove("item")
    // })
    third.forEach((div) => {
      div.classList.remove("item");
    });
  });
});
third.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    console.log(item.innerHTML);
    loc = 2;
    console.log(loc);
    forOutput(letter(item.innerHTML, loc), loc);
  });
  item.addEventListener("mouseleave", () => {
    first.forEach((div) => {
      div.classList.remove("item");
    });
    second.forEach((div) => {
      div.classList.remove("item");
    });
    // third.forEach(div=>{
    //     div.classList.remove("item")
    // })
  });
});

function forOutput(items, loc) {
  console.log(items, "items");
  console.log(loc, "location");

  items.forEach((item) => {
    if (loc == 0) {
      second.forEach((div) => {
        if (div.className == `${item[1]} second`) {
          div.classList.add("item");
        }
      });
      third.forEach((div) => {
        if (div.className == `${item[2]} third`) {
          div.classList.add("item");
        }
      });
    }
    if (loc == 1) {
      third.forEach((div) => {
        if (div.className == `${item[2]} third`) {
          div.classList.add("item");
        }
      });
      first.forEach((div) => {
        if (div.className == `${item[0]} first`) {
          div.classList.add("item");
        }
      });
    }
    if (loc == 2) {
      second.forEach((div) => {
        if (div.className == `${item[1]} second`) {
          div.classList.add("item");
        }
      });
      first.forEach((div) => {
        if (div.className == `${item[0]} first`) {
          div.classList.add("item");
        }
      });
    }
  });
}
