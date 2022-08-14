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
    const book = new Book(bookTitle, bookAuthor, Math.random());
    const showBookList = new ShowBooks();
    let str = "";
    let bookArr = [];

    // Check if title and author field is empty or not
    if (title.value === "") {
      message.classList.add("show-msg");
      message.style.color = "red";
      title.style.border = "1px solid red";
      author.style.border = "3px solid black";
      message.innerHTML = `Please enter a book title`;
    } else if (author.value === "") {
      message.classList.add("show-msg");
      message.style.color = "red";
      author.style.border = "1px solid red";
      title.style.border = "3px solid black";
      message.innerHTML = `Please enter a book author`;
    } else {
      author.style.border = "3px solid black";
      title.style.border = "3px solid black";
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
      message.classList.add("show-msg");
      message.style.color = "green";
      message.innerHTML = `New book added.`;
      showBookList.showBooks();
    }
    setTimeout(() => {
      message.classList.remove("show-msg");
    }, 2500);
  };
}

export default AddBook;
