/* eslint-disable no-unused-vars */
import React from 'react'
import { v4 as uuid } from 'uuid'
export default function Names({ names }) {
    return (
        <>
            {names.map(name => <p key={uuid()}>{name}</p>)}
        </>
    )
}