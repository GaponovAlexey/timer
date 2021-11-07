import React, { useEffect, useState } from 'react'

export const UseState = () => {
  const [state, setState] = useState({
    count: 0,
    isCounting: false,
  })

  useEffect(() => {
    console.log(state)
  }, [state])

  const handleCount = () => {
    setState({
      ...state,
      count: (state.count += 1),
    })
  }
  const handleStatus = () => {
    setState({
      ...state,
      isCounting: !state.isCounting,
    })
  }

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={handleCount}>res</button>
      <button onClick={handleStatus}>stat</button>
    </div>
  )
}
