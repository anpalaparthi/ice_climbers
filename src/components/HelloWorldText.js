import React, { Component } from 'react'
import axios from 'axios'

export default class HelloWorldText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/home')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }
            })
    }

    render() {
         return(
             <div>
                 <h1>Hello Ice Climberzzzzzzz</h1>
                 <h2>{this.state.users}</h2>
             </div>
             // PLEASE TO DO
            //<text>Hello Ice Climbers</text>
         )
     }
}