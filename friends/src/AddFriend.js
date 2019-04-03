import React, { Component } from 'react'

export default class AddFriend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  render() {
    return (
      <form onSubmit={this.props.addFriendHandler}>
        <input name="name" value={this.state.name} onChange={this.onChangeHandler}/>
        <input name="age" value={this.state.age} onChange={this.onChangeHandler}/>
        <input name="email" value={this.state.email} onChange={this.onChangeHandler}/>     
        <button type="submit">Submit</button>   
      </form>
    )
  }
}
