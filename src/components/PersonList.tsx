import React from 'react'

type persionListprops = {
    names: {
        first: string,
        last: string,
    }[]
}

export const PersonList = (props: persionListprops) => {
    return (
        <div>
            {props.names.map((name) => {
                return <h2>{name.first} {name.last}</h2>
            })}
        </div>
    )
}
