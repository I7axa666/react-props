// import { useState } from 'preact/hooks'
import './app.css'
import Stars from './Stars.tsx'

export function App() {
  // const [count, setCount] = useState(0)
  const count: number = 4
  
  return (
    <>
      <Stars count={count}/>
    </>
  )
}
