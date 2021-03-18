// This code here is based on Dataflair's tutorial - https://data-flair.training/blogs/javascript-project-to-do-list/

//Create delete button and apppend to each task. 
//This is based on Dataflair's tutorial found on https://data-flair.training/blogs/javascript-project-to-do-list/
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "del";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//Delete button functionality.
//This is based on Dataflair's tutorial found on https://data-flair.training/blogs/javascript-project-to-do-list/
var del = document.getElementsByClassName("del");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var remove = this.parentElement;
    remove.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//This function allows us to add a new task to the list.
//This is based on Dataflair's tutorial found on https://data-flair.training/blogs/javascript-project-to-do-list/
function addTask(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue == '') {
      alert("Please type a task");
    } else {
      document.getElementById("list").appendChild(li);
    }

    document.getElementById("todoinput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "del";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < del.length; i++) {
      del[i].onclick = function() {
        var remove = this.parentElement;
        remove.style.display = "none";
      }
    }
}