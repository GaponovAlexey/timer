import React, { useContext, useEffect, useRef, useState } from 'react'
import { TestContext } from '../Context/Context'

const localdata = () => {
  const localdata = localStorage.getItem('count')
  return localdata ? +localdata : ''
}

export const Timer = () => {
  const [count, setCount] = useState(localdata())
  const [IsCount, setIsCount] = useState(false)
  const isTimerRef = useRef()
  const { books, removeBooks } = useContext(TestContext)
  const handleStart = () => {
    setIsCount(true)
  }
  const handleStop = () => {
    setIsCount(false)
  }
  const handleRest = () => {
    setIsCount(false)
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    if (IsCount) {
      isTimerRef.current = setInterval(() => {
        setCount((e) => e + 1)
      }, 100)
    }
    return () => {
      isTimerRef.current && clearInterval(isTimerRef.current)
      isTimerRef.current = null
    }
  }, [IsCount])

  return (
    <div>
      <h1>my Timer</h1>
      <h2>{books.map((e) => e.title)}</h2>
      <h3>{count}</h3>
      {!IsCount ? (
        <button onClick={handleStart}>start</button>
      ) : (
        <button onClick={handleStop}>stop</button>
      )}
      <button onClick={handleRest}>Res</button>
    </div>
  )
}
