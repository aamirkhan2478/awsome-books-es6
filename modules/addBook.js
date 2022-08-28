import Book from "./bookObj.js";
import ShowBooks from "./showBooks.js";
import {
  title, author, message, bookData,
} from "./getElements.js";

class AddBook {
  // Add books in array and save in localStorage
  addBook = () => {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const book = new Book(bookTitle, bookAuthor);
    const showBookList = new ShowBooks();
    let str = "";
    let bookArr = [];

    // Check if title and author field is empty or not
    if (title.value === "" || author.value === "") {
      message.classList.add("d-block");
      message.classList.remove("d-none");
      message.className = "text-danger";
      message.innerHTML = `All fields are required!`;
    } else {
      title.focus();
      if (localStorage.getItem("book") === null) {
        bookArr.push(book);
        localStorage.setItem("book", JSON.stringify(bookArr));
      } else {
        const bookArrStr = localStorage.getItem("book");
        bookArr = JSON.parse(bookArrStr);
        bookArr.push(book);
        localStorage.setItem("book", JSON.stringify(bookArr));
      }
      title.value = "";
      author.value = "";
      str = "";
      bookData.innerHTML = str;
      message.classList.add("d-block");
      message.classList.remove("d-none");
      message.className = "text-success";
      message.innerHTML = `New book added.`;
      showBookList.showBooks();
    }
    setTimeout(() => {
      message.classList.add("d-none");
      message.classList.remove("d-block");
    }, 2500);
  };
}

export default AddBook;
