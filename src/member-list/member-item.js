const MemberItem = (member =  {
                        'firstName' : 'Adiren',
                        'lastName' : 'Oiczak',
                        'phoneNumber' : '415-310-1619',
                        'email' : 'adiren@gmail.com',
                        'role' : 'admin'
                    }) => {
    return(
        <li className={'list-item'}>
            <h3>{member.firstName} {member.lastName} [{member.role}]</h3>
            <p>{member.phoneNumber}</p>
            <p>{member.email}</p>
        </li>
    )
}

export default MemberItem;