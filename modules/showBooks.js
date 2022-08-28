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
      const bookData = document.querySelector("#data");
      const card = document.createElement("div");
      const cardHeader = document.createElement("div");
      const cardBody = document.createElement("div");
      const bookTitle = document.createElement("p");
      bookTitle.innerHTML = `<h1 class="text-danger">Data not Found</h1>`;
      cardHeader.innerText = `No Data`;

      card.className = "card mt-3 shadow";
      cardHeader.className = "card-header";
      cardBody.className = "card-body";

      bookData.appendChild(card);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      cardBody.appendChild(bookTitle);
    }

    // Fetch all the data from array
    bookArr.map((data, index) => {
      const { title, author } = data;
      const bookData = document.querySelector("#data");
      const card = document.createElement("div");
      const cardHeader = document.createElement("div");
      const cardBody = document.createElement("div");
      const bookTitle = document.createElement("p");
      const bookAuthor = document.createElement("p");
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      bookTitle.innerHTML = `<span class="fw-bold">Title:</span> ${title}`;
      bookAuthor.innerHTML = `<span class="fw-bold">Author:</span> ${author}`;
      cardHeader.innerText = `${title}`;

      card.className = "card mt-3 shadow";
      cardHeader.className = "card-header";
      cardBody.className = "card-body";
      removeButton.className = "btn btn-danger";

      removeButton.addEventListener("click", () =>
        removeBookData.removeBook(index)
      );

      bookData.appendChild(card);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      cardBody.appendChild(bookTitle);
      cardBody.appendChild(bookAuthor);
      cardBody.appendChild(removeButton);
      return data;
    });
  };
}

export default ShowBooks;
