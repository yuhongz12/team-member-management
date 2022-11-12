import React from "react";

const MemberItem = ({
                        member = {
                            'firstName': 'Adiren',
                            'lastName': 'Oiczak',
                            'phoneNumber': '415-310-1619',
                            'email': 'adiren@gmail.com',
                            'role': 'admin'
                        }
                    }
) => {
    console.log(member);
    return(
        <li className={'list-group-item row'}>
            <div>
                <h4>{member.firstName} {member.lastName} {member.role === 'admin' && '[admin]'}</h4>
                <p>{member.phoneNumber}</p>
                <p>{member.email}</p>
            </div>

        </li>
    )
}

export default MemberItem;