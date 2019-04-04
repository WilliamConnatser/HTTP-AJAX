import React from 'react';
import FriendForm from './FriendForm';

export default function Friend(props) {
    const {id, age, name, email} = props.friend;
    return (
        <div id={id}>
            <h1>{name}</h1>
            <div>{age}</div>
            <div>{email}</div>

            <FriendForm
                friend={this.props.friend}
                addFriendHandler={this.addFriendHandler}
                editFriendHandler={this.editFriendHandler}/>
        </div>
    )
}
