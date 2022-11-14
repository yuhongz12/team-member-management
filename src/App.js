import React from "react";
import MemberList from "./member-list";
import {useDispatch, useSelector} from "react-redux";
import {createMember} from "./reducers/members-reducer";
import CreateMember from "./create-member";
import {BrowserRouter, Link} from "react-router-dom";
import HomePage from "./home";
import {Routes, Route} from "react-router";



function App() {

  return(
      <BrowserRouter>
        <div className={'container'}>
          <Routes>
            <Route path={'/*'} element={<HomePage/>}/>
            <Route path={'/create'} element={<CreateMember/>}/>
            {/*<Route path={'/edit/:id'} element={<HomePage/>}/>*/}
          </Routes>
        </div>
      </BrowserRouter>

  )
}

export default App;

