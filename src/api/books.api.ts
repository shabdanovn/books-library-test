import { BookType, CreateBookType } from './../types/books';
const getAllBooks = () => {
    try {
        const items = localStorage.getItem("books");
        const books = items ? JSON.parse(items) : [];
        return books;
    } catch (error) {
        return error
    }

}

const getSavedBooks = () => {
    try {
        const items = localStorage.getItem("saved");
        const books = items ? JSON.parse(items) : [];
        return books;
    } catch (error) {
        return error
    }
};

const addBook = (book: CreateBookType) => {
    try {
        const items = localStorage.getItem("books");
        const books = items ? JSON.parse(items) : [];
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    } catch (error) {
        return error
    }
}


const updateBook = (book: BookType) => {
    try {
        const items = localStorage.getItem("books");
        const saved = localStorage.getItem("saved");
        if (items) {
            let books = JSON.parse(items);
            books = [...books.filter((item: BookType) => item.id !== book.id), book]
            localStorage.setItem("books", JSON.stringify(books));
            if (saved) {
                let savedBook = JSON.parse(saved);
                savedBook = [
                  ...savedBook.filter((item: BookType) => item.id !== book.id),
                  book,
                ];
                localStorage.setItem("saved", JSON.stringify(savedBook));
            }
        }
    } catch (error) {
        return error
    }

};

const saveBook = (book: CreateBookType) => {
    try {
        const items = localStorage.getItem("saved");
        const books = items ? JSON.parse(items) : [];
        if(!books.find((item: BookType) => item.id === book.id)) books.push(book);
        localStorage.setItem("saved", JSON.stringify(books));
    } catch (error) {
        return error
    }
};

const removeBook = (id: string) => {
    try {
        const items = localStorage.getItem("books");
        const saved = localStorage.getItem("saved");

        if (items) {
            let books = JSON.parse(items);
            books = books.filter((book: BookType) => book.id !== id);
            localStorage.setItem("books", JSON.stringify(books));
            if (saved) {
                let savedBook = JSON.parse(saved);
                savedBook = savedBook.filter((book: BookType) => book.id !== id);  
                localStorage.setItem("saved", JSON.stringify(savedBook));
            }
        }
    } catch (error) {
        return error
    }
}

const removeSavedBook = (id: string) => {
    try {
        const items = localStorage.getItem("saved");
        if (items) {
        let books = JSON.parse(items);
        books = books.filter((book: BookType) => book.id !== id);
        localStorage.setItem("saved", JSON.stringify(books));
        }
    } catch (error) {
        return error
    }
};

const getBook = (id: string) => {
    try {
        const items = localStorage.getItem("books");
        if (items) {
            let books = JSON.parse(items);
            return books.find((book: BookType) => book.id === id);
        }
    } catch (error) {
        return error
    }
};


const booksService = {
    getAllBooks, getSavedBooks, addBook, getBook,
    saveBook, updateBook, removeBook, removeSavedBook
}

export default booksService