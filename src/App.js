import React from "react";
import CreateMember from "./create-member";
import {BrowserRouter} from "react-router-dom";
import HomePage from "./home";
import {Routes, Route} from "react-router";
import EditMember from "./edit-member";


function App() {

    return (
        <BrowserRouter>
            <div className={'container mt-2'}>
                <Routes>
                    <Route path={'/*'} element={<HomePage/>}/>
                    <Route path={'/create'} element={<CreateMember/>}/>
                    <Route path={'/edit/:id'} element={<EditMember/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;

