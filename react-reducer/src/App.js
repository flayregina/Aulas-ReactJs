/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
export default function App() {

  const [escuro, setEscuro] = useState(false)

  const tema = {
    backgroundColor: escuro ? "black" : "white",
    color: escuro ? "whitw" : "black"
  }

  return (
    <div style={tema}>
      <h1>React - Tema Claro/Escuro</h1>
      <hr />
      <button onClick={() => { setEscuro(old => !old) }}>Tema</button>
      <p>Occaecat anim excepteur ad commodo ea anim mollit
        ut nostrud in enim aliquip. Esse nostrud quis fugiat
        consequat eu aliquip consectetur fugiat mollit aliqua pariatur
        aliquip.
        Excepteur sunt sint veniam ad consequat cillum cupidatat.
        Sint nulla ipsum nostrud cupidatat deserunt magna ad aliquip. Id ea cupidatat
        eu est voluptate culpa et dolore dolor qui fugiat irure elit.
        Ullamco aliquip adipisicing est laborum. Aliqua elit dolor nulla fugiat cupidatat sunt culpa
        Lorem consequat eu est.
      </p>
    </div>
  )
}


