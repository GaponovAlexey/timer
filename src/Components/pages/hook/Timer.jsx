import React, { useEffect, useRef, useState } from 'react'

const refac = () => {
  const getStor = localStorage.getItem('count')
  return getStor ? +getStor : '' 
}

export const Timer = () => {
  const [count, setCount] = useState(refac())
  const [isCount, setIsCount] = useState(false)
  const onTimerRef = useRef(null)
  function handleSTART() {
    setIsCount(true)
  }
  function handleSTOP() {
    setIsCount(false)
  }
  function handleRes() {
    setIsCount(false)
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    if (isCount) {
      onTimerRef.current = setInterval(() => {
        setCount((e) => e + 1)
      })
    }
    return () => {
      onTimerRef.current && clearInterval(onTimerRef.current)
    }
  }, [isCount])
  return (
    <div>
      <h1>My Timer</h1>
      <h3>{count}</h3>
      {!isCount ? (
        <button onClick={handleSTART}>start</button>
      ) : (
        <button onClick={handleSTOP}>stop</button>
      )}
      <button onClick={handleRes}>res</button>
    </div>
  )
}
