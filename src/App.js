import React from "react";
import MemberList from "./member-list";
import {useSelector} from "react-redux";



function App() {

  const memberArray = useSelector(state => state.members)

  return (

      <div className='container'>
        <h1>Team members</h1>
        <p className={'text-muted'}>You have {memberArray.length} team members.</p>
        <MemberList/>
      </div>


  );
}

export default App;

