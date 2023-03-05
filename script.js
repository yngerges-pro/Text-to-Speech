let enterbutton = document.getElementById("enter");
let Textbox = document.getElementById("Textbox");
let Input = document.getElementById("Input1");

enterbutton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = Input.value;
  Textbox.appendChild(paragraph);
  Input.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    Textbox.removeChild(paragraph);
  });
});

function speak() {
  const text = document.getElementById("Input1").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function pause(){
  speechSynthesis.pause();
}

function resume(){
  speechSynthesis.resume();
}

function stop(){
  speechSynthesis.cancel();
  
}




