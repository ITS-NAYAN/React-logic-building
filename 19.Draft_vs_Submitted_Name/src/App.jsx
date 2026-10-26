import  {  useState } from 'react'

const App = () => {
  const [text, setText]=useState("")
  const [prev, setPrev]=useState("")

   const handleSubmit = (e) => {
    e.preventDefault();
    const name =text.trim()

    name===""?setPrev("PLEASE ENTER NAME"):setPrev(name)
  }
  return (
    <div>
      <h1>Draft vs Submitted Name</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name: </label>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>Current Name: {text.trim()}</p>
      <p>Last Name Submitted:{prev} </p>
    </div>
  );
}

export default App
