/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react'
import Lista from './Lista'
import './styles.css'

export default function App() {

    const [numero, setNumero] = useState(1000)
    const [temaEscuro, setTemaEscuro] = useState(false)

    // função para calcular lista de resultados
    // const calculos = () => {
    //     return [numero * 2, numero * 3, numero * 4]
    // }

    const resultados = useCallback(() => {
        return [numero * 2, numero * 3, numero * 4]
    }, [numero])

    //tema da app
    const tema = {
        backgroundColor: temaEscuro ? "black" : "white",
        color: temaEscuro ? "white" : "black",
        height: "100vh"
    }

    return (
        <div style={tema}>
            <h1>React - useCallbeck</h1>
            <hr />
            <button onClick={() => setTemaEscuro(oldTemaEscuro => !oldTemaEscuro)}>Alterar Tema</button>
            <p>Numero: {numero}</p>
            <button onClick={() => setNumero(oldNumero => oldNumero + 1)}>Incrementar</button>
            <hr />
            <Lista resultado={calculos} />
        </div>
    )
}