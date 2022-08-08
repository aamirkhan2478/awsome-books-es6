import ShowBooks from "./showBooks.js";
import { bookData } from "./getElements.js";

class RemoveBook {
  // Remove the book data by id
  removeBook = (id) => {
    let bookArr = [];
    let str = "";
    const showBooksList = new ShowBooks();
    const bookArrStr = localStorage.getItem("book");
    bookArr = JSON.parse(bookArrStr);
    bookArr.splice(id, 1);
    localStorage.setItem("book", JSON.stringify(bookArr));
    str = "";
    bookData.innerHTML = str;
    showBooksList.showBooks();
  };
}

export default RemoveBook;
