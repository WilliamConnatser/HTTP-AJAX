import React, {Component} from 'react'

export default class FriendForm extends Component {
    constructor(props) {
        super(props);

        this.props.friend
            ? this.state = this.props.friend
            : this.state = {
                name: "",
                age: "",
                email: ""
            };
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandler = e => {
        e.preventDefault();

        if (this.props.friend) {
            this
                .props
                .editFriendHandler(this.state);
        } else {
            this
                .props
                .addFriendHandler(this.state);

            this.setState({name: '', age: '', email: ''});
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                    placeholder="name"/>
                <input
                    name="age"
                    value={this.state.age}
                    onChange={this.onChangeHandler}
                    placeholder="age"/>
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeHandler}
                    placeholder="email"/>
                <button type="submit">{this.props.friend
                        ? 'Submit Edit'
                        : 'Submit New Friend'}</button>
            </form>
        )
    }
}
