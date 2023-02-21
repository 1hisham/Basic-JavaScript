let count = 0;
function loop(x) {
  
    if (x > count) {
      count++;
      console.log(count);
      loop(x);
      return count
    }
  }
loop(10);
