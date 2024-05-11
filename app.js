console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,
    },
];

class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookId = books.length;
        this.booksArray = books;
    }

    markRead(checkbox, id) {
        this.booksArray.forEach((book) => {
            if(id === book.id) {
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        });
    }

    addBook() {
       
        var title = document.getElementById("title");
        var author = document.getElementById("author");
        var read = document.getElementById("read");

        var newBook = new Book(this.bookId, title.value, author.value, read.checked);

        this.bookId++;

        this.booksArray.push(newBook);

        const tbody = document.getElementById("tableBody");

        const newRow = document.createElement("tr");
        newRow.id = newBook.id;
        newRow.addEventListener("dblclick", () => {
            this.removeBook(newBook.id);
        });
        //create our elements
        const titleCell = document.createElement("td");
        const authorCell= document.createElement("td");
        const readCell = document.createElement("td");
        const newCheckbox = document.createElement("input");

        //add the data from the form to our elements and event listeners as required
        titleCell.textContent = newBook.title;
        authorCell.textContent = newBook.author;
        newCheckbox.type = "checkbox";
        newCheckbox.checked = read.checked;
        newCheckbox.disabled = read.checked;
        newCheckbox.addEventListener("click", () => {
            this.markRead(newCheckbox, newBook.id);
        });
        //add the checkbox to the readCell parent
        readCell.appendChild(newCheckbox);
        //append our data to our newRow
        newRow.appendChild(titleCell)
        newRow.appendChild(authorCell) 
        newRow.appendChild(readCell);
        //add the newRow to an element that is already in the DOM
        tbody.appendChild(newRow);

        
       
        
    }

    removeBook(bookId) {
        this.booksArray = this.booksArray.filter(({ id }) => bookId !== id);
        const tbody = document.getElementById("tableBody");
        tbody.removeChild(document.getElementById(bookId));
    }
}

const library = new Library(books);


const addButton = document.getElementById("form");
addButton.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
});