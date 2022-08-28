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
    listed.classList.add("d-flex");
    listed.classList.remove("d-none");
    addBook.classList.add("d-none");
    addBook.classList.remove("d-flex");
    contactedBook.classList.add("d-none");
    contactedBook.classList.remove("d-flex");
    bookAdd.style.color = "black";
    item.style.color = "blue";
    contact.style.color = "black";
    document.title = "Awesome Books | Home";
  };

  // Show only the Add book section
  bookAdd = () => {
    listed.classList.add("d-none");
    listed.classList.remove("d-flex");
    addBook.classList.add("d-flex");
    addBook.classList.remove("d-none");
    contactedBook.classList.add("d-none");
    contactedBook.classList.remove("d-flex");
    bookAdd.style.color = "blue";
    item.style.color = "black";
    contact.style.color = "black";
    document.title = "Awesome Books | Add New";
  };

  // Show only the contact section
  contactAdd = () => {
    listed.classList.add("d-none");
    listed.classList.remove("d-flex");
    addBook.classList.add("d-none");
    addBook.classList.remove("d-flex");
    contactedBook.classList.add("d-flex");
    contactedBook.classList.remove("d-none");
    bookAdd.style.color = "black";
    item.style.color = "black";
    contact.style.color = "blue";
    document.title = "Awesome Books | Contact";
  };
}

export default Routers;
