import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3903/api/';

class Edit extends Component {
  constructor(props) {
      super(props);
      this.state = {
          member: null,
	  redirect: false,
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
  }
    handleSubmit(e) {
        e.preventDefault();        
        axios.post(`${API_URL}Home/Edit`, this.state.member)
        .then((res) => {
            this.setState({redirect: true})
        }, (err) => {
            console.error(err);
        });
    }

    handleInputChange(e) {  
        const target = e.target,
              value = target.value,
              name = target.name;

        this.setState((prevState, props) => {
            let {member} = prevState;
            member[name] = value;
            return member;
        });               
    }

    componentWillMount() {
        let {match} = this.props;  
        axios.get(`${API_URL}Home/Edit/${match.params.id}`)
        .then((res) => {
            this.setState({member: res.data})
        }, (err) => {
            console.error(err);
        })
    }

    render() {
        let {member, redirect} = this.state;         
        if(redirect)
            return <Redirect to="/members"/>

        if(!member)
            return <div>Loading...</div>

    return (
      <div className="container">
        <div className="row" style={{ height: '22px', color: '#ff0000', marginBottom: '5px' }}>
            <div className="col-xs-12">{ this.state.message }</div>
        </div>
        <div className="row">
            <div className="col-xs-3">
                <form onSubmit={this.handleSubmit}>
			    <input type="text" name="FirstName" className="form-control register-input"
			    	placeholder="First Name" value={member.FirstName} onChange={this.handleInputChange} /><br />
                            <input type="text" name="LastName" className="form-control register-input"
                                placeholder="Last Name" value={member.LastName} onChange={this.handleInputChange} /><br />
                            <button type="submit" className="btn btn-primary btn-block">Update Member</button>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default Edit;