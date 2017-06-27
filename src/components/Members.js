import axios from 'axios';
import React, { Component } from 'react';

import Member from './Member';
const API_URL = 'http://localhost:3903/api/';

class Members extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
    this.handleDeleteMember = this.handleDeleteMember.bind(this);
  }

  componentWillMount() {
    axios.get(`${API_URL}Home/Get`).then((res) => {      
      this.setState({members: res.data});
    }, (err) => {
      console.error(err);
    });  
  }  
  
  handleDeleteMember(e, member) {    
    e.preventDefault();
    axios.post(`${API_URL}Home/Delete`, member).then((res) => {      
      let members = this.state.members,
          index = members.findIndex(x => x.Id === member.Id);
      members.splice(index, 1);      
      this.setState({members});
    }, (err) => {
      console.error(err);
    });       
  }

  render() {    
    if(!this.state.members)
      return <div>Loading..</div>

    let members = this.state.members.map(member => {
        return <Member key={member.Id} member={member} onDelete={this.handleDeleteMember}/>        
    });    

    return (
      <div className="container">
        <h3>Members</h3>
        <div className="row">
          <div className="cols-sm-4">
            <ul className="list-group">
              {members}
            </ul>        
          </div>
        </div>        
      </div>
    );
  }
}

export default Members;