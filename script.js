const myLibrary = [];
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

let myBook = new Book("test", "mikhail", 12, true);

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const bookContainer = document.getElementById("book-container");

  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages;

    const read = document.createElement("p");
    read.textContent = book.read ? "is read" : "is not read";
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle-read");
    toggleButton.textContent = book.read ? "Mark as not read" : "Mark as read";
    toggleButton.addEventListener("click", function () {
      book.toggleRead();
      displayBooks();
    });

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-book");
    removeButton.textContent = "Remove book";

    removeButton.addEventListener("click", function () {
      const index = myLibrary.findIndex((item) => item.id === book.id);
      if (index !== -1) {
        myLibrary.splice(index, 1);
      }
      displayBooks();
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(toggleButton);
    bookCard.appendChild(removeButton);

    bookContainer.appendChild(bookCard);
  });
}

const newBookButton = document.getElementById("new-book-btn");
const bookDialog = document.getElementById("book-dialog");
const bookForm = document.getElementById("book-form");
const cancelButton = document.getElementById("cancel-btn");

newBookButton.addEventListener("click", function () {
  bookDialog.showModal();
});

cancelButton.addEventListener("click", function () {
  bookDialog.close();
  bookForm.reset();
});

bookForm.addEventListener("submit", function () {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  addBookToLibrary(title, author, pages, read);
  bookForm.reset();
  bookDialog.close();
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
