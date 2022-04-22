import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem/BookItem';
import Layout from '../../components/Layout/Layout';
import { BookType } from '../../types/books';
import './SavedPage.scss'

const booksList = [
  { id: 1, title: "a", author: "B", category: "a" },
  { id: 2, title: "c", author: "n", category: "detective" },
  { id: 3, title: "h", author: "s", category: "business" },
  { id: 4, title: "b", author: "l", category: "horror" },
  { id: 5, title: "z", author: "q", category: "detective" },
  { id: 6, title: "n", author: "a", category: "hrama" },
  { id: 7, title: "d", author: "q", category: "bio" },
];

const SavedPage = () => {
    const [books, setBooks] = useState<BookType[]>(booksList);

    useEffect(() => {
        setBooks(booksList)
    }, [])

    return (
      <Layout>
        <div className="saved-page">
          <h3>Сохраненные книги</h3>
          <div className="saved-page__content">
            {books.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </div>
        </div>
      </Layout>
    );
};

export default SavedPage;