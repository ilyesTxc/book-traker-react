import {useState} from 'react'

import BookForm from "./components/BookForm";
import BookList from "./components/BookList"

import { initialBooks } from "/home/ilyestxc/Projects/React-Learning/library-project/src/data/books.js"


const App = () => {
  const [books, setBooks] = useState(initialBooks);


  function handleAdd(newBook){
        const bookExists = books.some(
            book =>
                book.title.trim().toLowerCase() === newBook.title.trim().toLowerCase() &&
                book.author.trim().toLowerCase() === newBook.author.trim().toLowerCase()
        );

        if(bookExists){
            alert("Book already exists!");
            return false;
        }

        setBooks(
            [
                ...books,
                newBook,
            ]
        );

    }
    function handleDelete(bookId){
        setBooks(books.filter(book =>{
            return book.id !== bookId;
        }))
    }

  return(
    <main className="min-h-screen bg-stone-100 px-6 py-10">
      <BookForm onAdd={handleAdd}/>
      <BookList
        books={books}
        onDelete={handleDelete} 
      />
    </main>
  )
};

export default App;
