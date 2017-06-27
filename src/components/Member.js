import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({member, onDelete}) => {    
    return (
        <li className="list-group-item">
        <div className="row">
            <div className="col-xs-2">
                <Link to={`/edit/${member.Id}`}><strong>{ `${member.FirstName} ${member.LastName}` }</strong></Link> 
            </div>
            <div className="col-xs-10">
                <button style={{marginLeft: '5px'}} className="btn btn-danger btn-xs" onClick={(evt) => {onDelete(evt, member)}}>x</button>
            </div>
        </div>
        </li>
    );
}

export default Member;