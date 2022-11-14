import React from "react";
import {Link} from "react-router-dom";

const MemberItem = ({
                        member = {
                            '_id' : 123,
                            'firstName': 'Adiren',
                            'lastName': 'Oiczak',
                            'phoneNumber': '415-310-1619',
                            'email': 'adiren@gmail.com',
                            'role': 'admin'
                        }
                    }
) => {
    return(
        <Link to={'/edit/' + member._id}>
            <li className={'list-group-item row'}>
                <div>
                    <h4>{member.firstName} {member.lastName} {member.role === 'admin' && '[admin]'}</h4>
                    <p>{member.phoneNumber}</p>
                    <p>{member.email}</p>
                </div>
            </li>
        </Link>
    )
}

export default MemberItem;