import React, { useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()

export const Context = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'js' },
    { id: 2, title: 'Go' },
    { id: 3, title: 'C++' },
    { id: 4, title: 'dark' },
  ])

  

  const addBook = (book) => {
    setBooks([book, ...books])
  }

  const removeBook = (id) => {
    setBooks(books.filter((b) => b.id !== id))
  }
  const value = {
    books,
    addBook,
    removeBook,
  }
  return <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
}
