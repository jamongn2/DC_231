let aBox = document.getElementById("box1");
// function(){}는 ()=> 와 같다.
aBox.onclick = () => {
  aBox.classList.toggle("box--cliked");
};