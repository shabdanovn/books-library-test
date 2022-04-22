import React, { useEffect, useState } from 'react';
import { BookType } from '../../types/books';
import GradeIcon from "@mui/icons-material/Grade";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./BookItem.scss";
import { useLocation, useNavigate } from 'react-router-dom';

interface IBookItem{
    book: BookType
}

const BookItem = ({book}:IBookItem) => {
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
      if(location.pathname==='/favorites') setIsSaved(true)
    }, [])

    const saveHandle = () => {
        setIsSaved(prev => !prev)
    }

    const editHandle = () => {
      navigate(`/edit-book/${book.id}`)
    }

    const deleteHandle = () => {

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

          <EditIcon style={{ cursor: "pointer" }} sx={{ fontSize: 30 }} 
                    onClick={editHandle}/>
          <DeleteIcon style={{ cursor: "pointer" }} sx={{ fontSize: 30 }} />
        </div>
      </div>
    );
};

export default BookItem;