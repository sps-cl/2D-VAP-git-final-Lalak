const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo") || "[]";

    return JSON.parse(value);
}

function setItems(items) {
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo", itemsJson);
}

function addToDo() {
    items.unshift({
      descriprion: "",
      compleated: false
    });

    setItems(items);
}

console.log(items);