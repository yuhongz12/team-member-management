import React from "react";
import {Link} from "react-router-dom";

const MemberItem = ({
                        member = {
                            '_id': 123,
                            'firstName': 'Adiren',
                            'lastName': 'Oiczak',
                            'phoneNumber': '415-310-1619',
                            'email': 'adiren@gmail.com',
                            'role': 'admin'
                        }
                    }
) => {
    return (
        <Link to={'/edit/' + member._id} style={{textDecoration: 'none'}}>
            <li className={'list-group-item row'}>
                <div>
                    <h4>{member.firstName} {member.lastName} <span
                        className="badge bg-secondary">{member.role === 'admin' && 'Admin'}</span></h4>
                    <p className={'m-0 text-muted'}>{member.phoneNumber}</p>
                    <p className={'m-0 text-muted'}>{member.email}</p>
                </div>
            </li>
        </Link>
    )
}

export default MemberItem;