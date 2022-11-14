import React from "react";
import MemberItem from "./member-item";
import {useSelector} from "react-redux";

const MemberList = () => {
    const members = useSelector(state => state.members);
    return (
        <ul className={'list-group'}>
            {members.map(member => <MemberItem member={member}/>)}

        </ul>
    )
}

export default MemberList;