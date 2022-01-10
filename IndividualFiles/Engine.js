
// this lets the text editor tab



let YoFileMaker = document.getElementById("YoFileMaker");


YoFileMaker.addEventListener('keydown', function(tab) {
  if (tab.key == 'Tab') {
    tab.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
});


console.log(YoFileMaker.textContent);