import React, { useEffect, useState } from 'react'
export default function Lista({ resultados }) {
    const [listaItems, setListaItems] = useState([])

    useEffect(() => {
        setListaItems(resultados())
        console.log('RENDER')
    }, [resultados])

    return (
        listaItems.map(item => <p key={item}>{item}</p>)
    )
}