import React from "react";
import MemberList from "./member-list";
import {Link} from "react-router-dom";
import AddMember from "./add-member";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='container'>
      <h1>Team members</h1>
        <p className={'text-muted'}>You have 3 team members.</p>

        {/*<Link to={AddMember}>Add member</Link>*/}
        <MemberList/>
    </div>

  );
}

export default App;

