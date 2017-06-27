import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

const API_URL = 'http://localhost:3903/api/';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            redirect: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.refs.firstName.value === '') {
            this.setState({ message : 'First Name is required'});
            this.refs.firstName.focus();
            return;
        }

        if (this.refs.lastName.value === '') {
            this.setState({ message : 'First Name is required'});
            this.refs.lastName.focus();
            return;
        }
        axios.post(`${API_URL}Home/Create`, { 
            FirstName: this.refs.firstName.value, 
            LastName: this.refs.lastName.value
        }).then(() => {
            this.refs.firstName.value = '';
            this.refs.lastName.value = '';
            this.setState({redirect: true});
        }, (err) => {
            console.error(err)
        });
    }

    render() {
        if(this.state.redirect)
            return <Redirect to="/members"/>
            
        return (
		<div className="container">
            <div className="row" style={{ height: '22px', color: '#ff0000', marginBottom: '5px' }}>
                <div className="col-xs-12">{ this.state.message }</div>
            </div>
            <div className="row">
                <div className="col-xs-3">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref="firstName" placeholder="First Name" className="form-control register-input" /><br/>
                        <input type="text" ref="lastName" placeholder="Last Name" className="form-control register-input" /><br/>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Home;