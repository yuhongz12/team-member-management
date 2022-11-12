import React from "react";
import members from "../data/members";
import MemberItem from "./member-item";

const MemberList = () => {
    return (
        <ul className={'list-group'}>
            {members.map(member => <MemberItem member={member}/>)}

        </ul>
    )
}

export default MemberList;