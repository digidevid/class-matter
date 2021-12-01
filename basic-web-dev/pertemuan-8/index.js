var listContainer = document.getElementById("list-container");
var inputItem = document.getElementById("input-item");
var btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", () => addList());

var groceriesArray = [
  {
    title: "makan",
    desc: "blaaa",
  },
  {
    title: "belajar",
    desc: "blaaa",
  },
];

function addList() {
  var newObj = {
    title: inputItem.value,
    desc: "Helo",
  };
  groceriesArray.push(newObj);
  inputItem.value = "";
  clearTemplate();
  createList();
}

function deleteList(id) {
  groceriesArray.splice(id, 1);
  clearTemplate();
  createList();
}

function clearTemplate() {
  listContainer.innerHTML = "";
}

function createList() {
  groceriesArray.forEach((element, id) => {
    var newDiv = document.createElement("div");
    newDiv.classList += "list-card";
    var newParagraf = document.createElement("div");
    newParagraf.classList += "item pr-4";
    var newDivCTA = document.createElement("div");
    newDivCTA.classList += "list-action";
    var buttonEdit = document.createElement("button");
    buttonEdit.innerHTML = "edit";
    buttonEdit.classList += "btn-edit";
    var buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "delete";
    buttonDelete.classList += "btn-delete";
    var newButtonSubmit = document.createElement("button");
    newButtonSubmit.innerHTML = "Submit";
    newButtonSubmit.classList += "bg-green-300 py-2 px-4";

    newParagraf.innerHTML = element.title;
    buttonEdit.addEventListener("click", () => {
      newParagraf.innerHTML = "";
      var newInput = document.createElement("input");
      newInput.value = element.title;
      newInput.style.borderBottom = "1px solid black";

      newButtonSubmit.addEventListener("click", () => {
        var newObj = {
          title: newInput.value,
          desc: "Helo",
        };
        groceriesArray.splice(id, 1, newObj);
        clearTemplate();
        createList();
      });

      newParagraf.appendChild(newInput);
      newParagraf.appendChild(newButtonSubmit);
    });
    buttonDelete.addEventListener("click", () => {
      deleteList(id);
    });

    newDivCTA.appendChild(buttonEdit);
    newDivCTA.appendChild(buttonDelete);
    newDiv.appendChild(newParagraf);
    newDiv.appendChild(newDivCTA);
    listContainer.appendChild(newDiv);
  });
}

createList();
