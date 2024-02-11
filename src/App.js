import React from 'react'
import { useState } from 'react'


const data = [
  {
    key: 1,
    title: 'Assignment',
    des: 'I have to complete Javascript assignment as soon as possible.'
  },
  {
    key: 2,
    title: 'Remainder',
    des: 'Ram has asked me about difference between backend and frontend !'
  }
]
export default function App() {

  const [notes, setNotes] = useState(data)
  const [title, setTitles] = useState('')
  const [des, setDes] = useState('')
  const [count, setCount] = useState(3)

  function handle() {
    if(!title || !des){
      alert("Please enter at least one input")
      return;
    }
    setNotes([...notes, {
      key: count,
      title: title,
      des: des,
    }])
    setTitles('');
    setCount(count + 1);
    setDes('')
    return
  }
  function remove(id) {
    setNotes(notes.filter((e) => e.key !== id))
    setCount(count - 1);
  }
  return (
    <div className='note'>
      <h1>React Notes: </h1>
      <div class='records'>
        {
          notes.map((note) => {
            return (
              <div className='items'>
                <h4>{note.title}</h4>
                <div>
                  <p>{note.des}</p>
                  <button onClick={() => { remove(note.key) }} className='removeBtn'>X</button>

                </div>
              </div>
            )
          })
        }
      </div>
      <div className='inputs'>
        <input type='text' placeholder='title' value={title} onChange={(e) => {
          setTitles(e.target.value)
        }} />
        <input type='text' placeholder='description' value={des} onChange={(e) => {
          setDes(e.target.value);
        }} />
        <button onClick={handle} className='addBtn'>Add notes</button>
      </div>
    </div>
  )
}

