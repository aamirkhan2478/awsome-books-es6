import {
  addBook,
  contactedBook,
  bookAdd,
  item,
  contact,
} from "./getElements.js";

class Routers {
  // Show only the book lists section
  bookList = () => {
    listed.classList.remove("hide-list");
    addBook.classList.remove("show-addbook");
    contactedBook.classList.remove("show-contact");
    bookAdd.style.color = "black";
    item.style.color = "blue";
    contact.style.color = "black";
    document.title = "Awesome Books | Home";
  };

  // Show only the Add book section
  bookAdd = () => {
    listed.classList.add("hide-list");
    addBook.classList.add("show-addbook");
    contactedBook.classList.remove("show-contact");
    bookAdd.style.color = "blue";
    item.style.color = "black";
    contact.style.color = "black";
    document.title = "Awesome Books | Add New";
  };

  // Show only the contact section
  contactAdd = () => {
    listed.classList.add("hide-list");
    addBook.classList.remove("show-addbook");
    contactedBook.classList.add("show-contact");
    bookAdd.style.color = "black";
    item.style.color = "black";
    contact.style.color = "blue";
    document.title = "Awesome Books | Contact";
  };
}

export default Routers;
