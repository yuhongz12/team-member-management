import React from "react";
import MemberList from "./member-list";
import {useDispatch, useSelector} from "react-redux";
import {createMember} from "./reducers/members-reducer";



function App() {

  const memberArray = useSelector(state => state.members);
  const dispatch = useDispatch();
  const addMemberHandler = () => {
    const newMember = {
      firstName: "bob",
      lastName: "smith",
      email: "bob@gmail.com",
      phoneNumber: "131-123-1233",
      role: "regular"
    }
    dispatch(createMember(newMember));
    console.log()
  }
  return (

      <div className='container'>
        <h1>Team members</h1>
        <button onClick={addMemberHandler}>Add</button>
        <p className={'text-muted'}>You have {memberArray.length} team members.</p>
        <MemberList/>
      </div>


  );
}

export default App;

