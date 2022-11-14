import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createMember} from "../reducers/members-reducer";

const CreateMember = () => {
    let [newFirstName, setNewFirstName] = useState('');
    let [newLastName, setNewLastName] = useState('');
    let [newEmail, setNewEmail] = useState('');
    let [newPhone, setNewPhone] = useState('');
    let [newRole, setNewRole] = useState('regular');
    const dispatch = useDispatch();
    const addMemberHandler = () => {
        const newMember = {
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            phoneNumber: newPhone,
            role: newRole
        }
        dispatch(createMember(newMember));
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Add a team member</h1>
            <p className={'text-muted'}>Set email, location, and role.</p>

            <div>
                <h4>Info</h4>
                <input placeholder={'First Name'} value={newFirstName}
                       onChange={event => setNewFirstName(event.target.value)}
                       type="text" name="firstName"/><br/>
                <input placeholder={'Last Name'} value={newLastName}
                       onChange={event => setNewLastName(event.target.value)}
                       type="text" name="firstName"/><br/>
                <input placeholder={'Email'} value={newEmail} onChange={event => setNewEmail(event.target.value)}
                       type="text" name="email"/><br/>
                <input placeholder={'Phone'} value={newPhone} onChange={event => setNewPhone(event.target.value)}
                       type="text" name="phoneNumber"/><br/>

                <h4>Role</h4>
                <div>
                    <label>
                        Regular
                        <input checked={newRole === "regular"} onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="regular"/>

                    </label><br/>
                    <label>
                        Admin
                        <input checked={newRole === "admin"} onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="admin"/>
                    </label>
                </div>
            </div>
            <Link to={'/'} onClick={addMemberHandler}> Create</Link>
        </div>
    )
}

export default CreateMember;