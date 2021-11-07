import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'
import { Book } from './Book'

export const Books = () => {
  const { books } = useContext(MyContext)
  return (
    <div>
      {books.map((b) => (
        <Book key={b.id} {...b} />
      ))}
    </div>
  )
}
