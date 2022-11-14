import React from "react";
import {useSelector} from "react-redux";
import MemberList from "../member-list";
import {Link} from "react-router-dom";

const HomePage = () => {
    const memberArray = useSelector(state => state.members);

    return (

            <div>
            <h1>Team members</h1>
              <Link to={'/create'}>Add</Link>
            <p className={'text-muted'}>You have {memberArray.length} team members.</p>
            <MemberList/>
        </div>


    );
}
export default HomePage;