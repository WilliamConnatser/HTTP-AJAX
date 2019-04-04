import React, {Component} from 'react';
import FriendForm from './FriendForm';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editFriend: false
        }
    }

    showEditForm = _ => {
        this.setState({
            editFriend: !this.state.editFriend
        });
    }

    render() {
        const {id, age, name, email} = this.props.friend;

        return (
            <div id={id}>
                <h1>{name}</h1>
                <div>{age}</div>
                <div>{email}</div>
                <button onClick={this.showEditForm}>Edit</button>
                {this.state.editFriend
                    ? <FriendForm
                            friend={this.props.friend}
                            editFriendHandler={this.props.editFriendHandler}/>
                    : null}
            </div>
        )
    }
}
