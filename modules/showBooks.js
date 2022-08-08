import RemoveBook from "./removeBook.js";

class ShowBooks {
  // Show Books in DOM
  showBooks = () => {
    let bookArr = [];
    const removeBookData = new RemoveBook();
    // Check localStorage
    if (localStorage.getItem("book") === null) {
      localStorage.setItem("book", JSON.stringify(bookArr));
    } else {
      const bookArrStr = localStorage.getItem("book");
      bookArr = JSON.parse(bookArrStr);
    }

    // Check if array is empty then show this message
    if (bookArr.length === 0) {
      const list = document.querySelector("#data");
      const book = document.createElement("p");
      book.classList.add("points");
      book.innerHTML = `Data not found`;
      book.style.color = "red";
      list.appendChild(book);
    }

    // Fetch all the data from array
    bookArr.map((data) => {
      const { title, author, id } = data;
      const list = document.querySelector("#data");
      const book = document.createElement("p");
      book.classList.add("points");
      book.setAttribute("id", id);
      book.innerHTML = `"${title}" by ${author}`;
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.addEventListener("click", () => removeBookData.removeBook(id));
      book.appendChild(removeButton);
      list.appendChild(book);
      return book;
    });
  };
}

export default ShowBooks;
