import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem/BookItem';
import Layout from '../../components/Layout/Layout';
import { getSavedBooks } from '../../redux/slices/books.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { BookType } from '../../types/books';
import './SavedPage.scss'

const SavedPage = () => {
    const {saved} = useAppSelector(state => state.books)
    const [books, setBooks] = useState<BookType[]>(saved);
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(getSavedBooks())
    }, [dispatch]);

    useEffect(() => {
      setBooks(saved);
    }, [saved]);

    return (
      <Layout>
        <div className="saved-page">
          <h3>Сохраненные книги</h3>
          <div className="saved-page__content">
            {books.length === 0
             ? <h3>Нет книг для показа</h3> 
             :books.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </div>
        </div>
      </Layout>
    );
};

export default SavedPage;