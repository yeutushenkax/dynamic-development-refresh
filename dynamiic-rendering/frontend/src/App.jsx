import { useState } from "react"
import properties from './data/properties.json'

const App = () => {
  const [newitem, setNewItem] = useState('')
  const [items, setItems] = useState(['a', 'b'])
  const [counter, setCounter] = useState(0)

  const handleChange = event => {
    setNewItem(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newItems = [...items, newitem]
    setItems(newItems)
    setNewItem('')
  }

  return  <div>
    <form onSubmit={handleSubmit}>
      <input value={newitem} onChange={handleChange}/>
      <button type="submit">{properties.submitButtonText}</button>
    </form>
    {!items.length 
      ? <div>{properties.textWhenNoItems}</div> 
      : <ul>
        {items.map((item, i) => <li key={i}>
          {item}
          <button onClick={() => setItems(items.filter((_item, index) => index !== i))}>{properties.deleteButtonText}</button>
        </li>)}
      </ul>
    }
    <p>
      {properties.counterText}: {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </p>
  </div>
} 

export default App