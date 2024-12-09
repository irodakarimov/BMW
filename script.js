let bgColor = prompt("Enter body background color");
let textColor = prompt("Enter text color");

let paragraph = document.getElementById('textArea');
paragraph.style.backgroundColor = bgColor;
paragraph.style.color = textColor;
