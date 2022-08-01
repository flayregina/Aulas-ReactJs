/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Names from './Names'
export default function App() {

  const [name, setName] = useState('')
  const [names, setNames] = useState([])

  function saveName() {
    saveName(tmp => [...tmp, name])
  }

  return (
    <>
      <h3>React Unique ID</h3>
      <hr />
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <button onClick={saveName}>Save Name</button>
      <hr />
      <Names names={names} />
    </>
  )
}


