import ShowBooks from "./modules/showBooks.js";
import AddBook from "./modules/addBook.js";
import { item, bookAdd, contact } from "./modules/getElements.js";
import Routers from "./modules/routers.js";
import DTime from "./modules/dateTime.js";

document.addEventListener("DOMContentLoaded", () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const addBookdata = new AddBook();
    addBookdata.addBook();
  });

  item.addEventListener("click", () => {
    const routers = new Routers();
    routers.bookList();
  });

  bookAdd.addEventListener("click", () => {
    const routers = new Routers();
    routers.bookAdd();
  });

  contact.addEventListener("click", () => {
    const routers = new Routers();
    routers.contactAdd();
  });

  const books = new ShowBooks();
  books.showBooks();

  setInterval(() => {
    const dateTime = new DTime();
    dateTime.dateTime();
  }, 1000);

  const routers = new Routers();
    routers.bookList();
});
