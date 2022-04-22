import React, { useState } from 'react';
import BookItem from '../../components/BookItem/BookItem';
import Layout from '../../components/Layout/Layout';
import './Main.scss'
import cn from 'classnames'
import { BookType } from '../../types/books';

const booksList = [
    {id: 1, title: "a", author: "B", category: 'a'},
    {id: 2, title: "c", author: "n", category: 'detective'},
    {id: 3, title: "h", author: "s", category: 'business'},
    {id: 4, title: "b", author: "l", category: 'horror'},
    {id: 5, title: "z", author: "q", category: 'detective'},
    {id: 6, title: "n", author: "a", category: 'hrama'},
    {id: 7, title: "d", author: "q", category: 'bio'},
]

enum BookSortType {
    All,
    Title, 
    Author,
    Genre
}

const Main = () => {
    const [active, setActive] = useState<number>(BookSortType.All)
    const [books, setBooks] = useState<BookType[]>(booksList)

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
            {books.map((book) => {
              return <BookItem key={book.id} book={book} />;
            })}
          </div>
        </div>
      </Layout>
    );
};

export default Main;