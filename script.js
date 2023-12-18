var myNodelist = document.getElementsByTagName("li");

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var cross = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(cross);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

var listItems = document.querySelectorAll("ul li");

listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
});

newElement = () => {
  let ul = document.getElementById("myUL");
  let li = document.createElement("li");

  let inputText = document.getElementById("myInput").value;
  var node = document.createTextNode(inputText);
  li.appendChild(node);
  if (inputText === "" || inputText == null) {
    alert("noo wayyy");
  } else {
    ul.appendChild(li);
  }
  document.querySelector("#myInput").value = "";
};

text = document.querySelector("#myInput");
text.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".btnAdd").click();
  }
});
