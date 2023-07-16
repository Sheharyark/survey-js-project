import { useState } from 'react'

const CustomInput = () => {
  const [inputVlaue, setInputValue] = useState('')
  const inputHandler = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    console.log(inputVlaue)
  }

  return (
    <div value={inputVlaue} onChange={inputHandler}>
      <input type='text' />
      <button>add to survey result</button>
    </div>
  )
}

export default CustomInput
