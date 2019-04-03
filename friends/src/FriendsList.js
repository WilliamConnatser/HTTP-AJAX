import React, {Component} from 'react';
import axios from 'axios';

import Friend from './Friend';
import AddFriend from './AddFriend';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends`)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(err => {
                alert(err);
            });
    }

    addFriendHandler = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.age.value)
        console.log(e.target.email.value)
    } 

    render() {
        const friendsList = this
            .state
            .friends
            .map(friend =>< Friend key = {friend.id} friend = {
                friend
            } />)
        return (
            <div>
                <AddFriend addFriendHandler={this.addFriendHandler} />
                {friendsList}
            </div>
        )
    }
}
