import React, {Component} from 'react';
import axios from 'axios';

import Friend from './Friend';
import FriendForm from './FriendForm';

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

    addFriendHandler = newFriend => {
        axios
            .post(`http://localhost:5000/friends`, newFriend)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(err => {
                alert(err);
            });
    }

    editFriendHandler = friend => {
        axios
            .put(`http://localhost:5000//friends/${friend.id}`, friend)
            .then(response => {
                this.setState({friends: response.data});
            })
            .catch(err => {
                alert(err);
            });
    }

    render() {
        const friendsList = this
            .state
            .friends
            .map(friend =>< Friend key = {
                friend.id
            }
            friend = {
                friend
            } />)
        return (
            <div>
                <FriendForm addFriendHandler={this.addFriendHandler}/> {friendsList}
            </div>
        )
    }
}
