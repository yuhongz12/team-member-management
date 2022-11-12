import members from "../data/members";
import MemberItem from "./member-item";

const MemberList = () => {
    return (
        <ul className={'list-group'}>
            {members.map(m => MemberItem(m))}
        </ul>
    )
}

export default MemberList;