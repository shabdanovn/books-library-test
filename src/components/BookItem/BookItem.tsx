import React, { useEffect, useState } from 'react';
import { BookType } from '../../types/books';
import GradeIcon from "@mui/icons-material/Grade";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./BookItem.scss";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { saveBook, removeSavedBook, removeBook } from '../../redux/slices/books.slice';

interface IBookItem{
    book: BookType
}

const BookItem = ({book}:IBookItem) => {
    const [isSaved, setIsSaved] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {saved} = useAppSelector(state => state.books)

    useEffect(() => {
      if(saved.find((item:BookType) => item.id === book.id)) 
        setIsSaved(true)
    }, [])

    const saveHandle = () => {
        if(!isSaved){
          setIsSaved(true)
          dispatch(saveBook(book));
        }else{
          setIsSaved(false);
          dispatch(removeSavedBook(book.id));
        }
    }


    const editHandle = () => {
      navigate(`/edit-book/${book.id}`)
    }

    const deleteHandle = () => {
      dispatch(removeBook(book.id))
    }

    return (
      <div className="book-item">
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.category}</p>
        <div className="book-item__nav">
          {isSaved ? (
            <GradeIcon
              onClick={saveHandle}
              style={{ cursor: "pointer" }}
              sx={{ fontSize: 30 }}
            />
          ) : (
            <StarOutlineIcon
              onClick={saveHandle}
              style={{ cursor: "pointer" }}
              sx={{ fontSize: 30 }}
            />
          )}

          <EditIcon
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 30 }}
            onClick={editHandle}
          />
          <DeleteIcon
            onClick={deleteHandle}
            style={{ cursor: "pointer" }}
            sx={{ fontSize: 30 }}
          />
        </div>
      </div>
    );
};

export default BookItem;