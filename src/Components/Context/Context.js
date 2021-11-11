import { createContext, useState } from 'react'

export const TestContext = createContext()

export const Context = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Alexey' },
    { id: 2, title: 'Viktoria' },
  ])

  const removeBook = (id) => {
    setBooks(books.filter((e) => e.id !== id))
  }

  const value = {
    books,
    removeBook,
  }

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}
