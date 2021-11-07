import React, { useContext } from 'react'
import { MyContext } from '../Context/Context'

export const Book = ({ id, title }) => {
  const { removeBook } = useContext(MyContext)

  return <div onClick={() => removeBook(id)}>{title}</div>
}
