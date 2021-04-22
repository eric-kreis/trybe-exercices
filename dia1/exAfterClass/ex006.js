let note = 1;

function percentageToNote(n) {
  if (n > 100 || n < 0) {
    return console.log('[ERROR]');
  } else if (n >= 90) {
    return console.log('A');
  } else if (n >= 80) {
    return console.log('B');
  } else if (n >= 70) {
    return console.log('C');
  } else if (n >= 60) {
    return console.log('D');
  } else if (n >= 50) {
    return console.log('E');
  } else {
    return console.log('F');
  }
  
}

percentageToNote(note)