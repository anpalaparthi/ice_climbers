import React, { Component } from 'react'
import axios from 'axios'

export default class HelloWorldText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            users: [],
            user: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                console.log(response.data)
                if (response.data) {
                    this.setState({
                        user: response.data,
                        username: response.data.username
                    })
                }

                /*if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    })
                }*/
            })
    }

    render() {
         return(
             <div>
                 <h1>Hello Ice Climberzzzzzzz</h1>
                 <h2>{this.state.user.password}</h2>
                 {/*<h2>{this.state.users}</h2>*/}
             </div>
             // PLEASE TO DO
            //<text>Hello Ice Climbers</text>
         )
     }
}