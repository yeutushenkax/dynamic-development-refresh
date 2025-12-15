import { useState } from "react"

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
      <button type="submit">submit</button>
    </form>
    {!items.length 
      ? <div>empty</div> 
      : <ul>
        {items.map((item, i) => <li key={i}>
          {item}
          <button onClick={() => setItems(items.filter((_item, index) => index !== i))}>delete</button>
        </li>)}
      </ul>
    }
    <p>
      counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </p>
  </div>
} 

export default App