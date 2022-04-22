import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem/BookItem';
import Layout from '../../components/Layout/Layout';
import './Main.scss'
import cn from 'classnames'
import { BookType } from '../../types/books';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getAllBooks, getSavedBooks } from '../../redux/slices/books.slice';

enum BookSortType {
    All,
    Title, 
    Author,
    Genre
}

const Main = () => {
    const [active, setActive] = useState<number>(BookSortType.All)
    const { books: booksList, isLoading, saved } = useAppSelector((state) => state.books);
    const [books, setBooks] = useState<BookType[]>(booksList)
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(getAllBooks())
      dispatch(getSavedBooks())
    }, [dispatch])

    useEffect(() => {
      setBooks(booksList)
    }, [booksList, saved]);

    const allClick = (type:number) => {
        setActive(type)
        const copy = [...books]
        if(type===BookSortType.Title) 
            setBooks(copy.sort((a,b)=> a.title.localeCompare(b.title)))
        else if(type===BookSortType.Author) 
            setBooks(copy.sort((a, b) => a.author.localeCompare(b.author)));
        else if(type===BookSortType.Genre) 
            setBooks(copy.sort((a, b) => a.category.localeCompare(b.category)));
    }

    return (
      <Layout>
        <div className="main-page">
          <div className="main-page__nav">
            <h3
              className={cn("nav", { active: active === BookSortType.All })}
              onClick={() => allClick(BookSortType.All)}
            >
              Все книги ({books.length})
            </h3>
            <h3
              className={cn("nav", { active: active === BookSortType.Title })}
              onClick={() => allClick(BookSortType.Title)}
            >
              Сортировка по названию
            </h3>
            <h3
              className={cn("nav", { active: active === BookSortType.Author })}
              onClick={() => allClick(BookSortType.Author)}
            >
              Сортировка по автору
            </h3>
            <h3
              className={cn("nav", { active: active === BookSortType.Genre })}
              onClick={() => allClick(BookSortType.Genre)}
            >
              Сортировка по категории
            </h3>
          </div>
          <div className="main-page__content">
            {books.length === 0 ? (
              <h3>Нет книг для показа</h3>
            ) : (
              books.map((book) => {
                return <BookItem key={book.id} book={book} />;
              })
            )}
          </div>
        </div>
      </Layout>
    );
};

export default Main;