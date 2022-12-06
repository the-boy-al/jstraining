function charCounts(str) {
    const obj = {};
  
    const arr = str.split("");
  
    for (const a of arr) {
      if (a === " ") {
        continue;
      }
  
      if (a in obj) {
        obj[a]++;
      } else {
        obj[a] = 1;
      }
    }
  
    return obj;
  }
  
  console.log(charCounts("The quick brown fox jumps over the lazy dog"));