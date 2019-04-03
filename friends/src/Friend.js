import React from 'react'

export default function Friend(props) {
    const {id, age, name, email} = props.friend;
    return (
        <div id={id}>
            <h1>{name}</h1>
            <div>{age}</div>
            <div>{email}</div>
        </div>
    )
}
