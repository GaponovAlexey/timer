import React, { useEffect, useState } from 'react'

export const UseEfect = () => {
  const [state, setState] = useState(0)
  console.log('state')
  useEffect(() => {
    console.log('vnutri')
    return () => {
      console.log('return')
    }
  }, [state])
  return (
    <div>
      <h2>{state} </h2>
      <button onClick={() => setState((e) => e + 1)}> +</button>
    </div>
  )
}
