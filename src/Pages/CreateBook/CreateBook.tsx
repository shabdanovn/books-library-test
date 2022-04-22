import React, { ChangeEvent, useEffect, useState } from 'react';
import cn from 'classnames'
import './CreateBook.scss'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CreateBookType } from '../../types/books';

const CreateBook = () => {
    const location = useLocation()
    const {id} = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("");
    const [category, setCategory] = useState<string>('')
    const [isTitle, setIsTitle] = useState<boolean>(false)
    const [isAuthor, setIsAuthor] = useState<boolean>(false);
    const [isCategory, setIscategory] = useState<boolean>(false)


    useEffect(() => {
        if(id){
            setTitle('The paulo')
            setAuthor('Roberto Man')
            setCategory('Detective')
        }
    }, []) 

    const saveClick = () => {
        if(!title) setIsTitle(true)
        if (!author) setIsAuthor(true);
        if (!category) setIscategory(true);

        if(title && author && category){
            const book: CreateBookType = {
            author,
            title,
            category,
            };

            alert(title)
            navigate('/')
        }
    }

    return (
      <Layout>
        <div className={cn("create-book-page")}>
          {location.pathname === "/create-book" ? (
            <h3>Добавить новую книгу</h3>
          ) : (
            <h3>Редактировать книгу {id}</h3>
          )}

          <div className={cn("create-book-page__content")}>
            <TextField
              required
              fullWidth
              error={isTitle}
              id="outlined-required"
              label="Название"
              variant="outlined"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            <TextField
              required
              fullWidth
              error={isAuthor}
              id="outlined-required"
              label="Автор"
              variant="outlined"
              value={author}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
            />
            <TextField
              required
              fullWidth
              error={isCategory}
              id="outlined-required"
              label="Категория"
              variant="outlined"
              value={category}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCategory(e.target.value)
              }
            />
            <Button variant="contained" 
                    onClick={saveClick} 
                    style={{height: '50px'}}>
              Сохранить
            </Button>
          </div>
        </div>
      </Layout>
    );
};

export default CreateBook;