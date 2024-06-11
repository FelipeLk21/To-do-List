function addTask() {
    var input = document.getElementById("taskInput").value;
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById("taskInput").value = "";
  
    var deleteButton = document.createElement("span");
    deleteButton.appendChild(document.createTextNode("x"));
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
      ul.removeChild(li);
    };
    li.appendChild(deleteButton);
  }
  