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
            <Link className={'float-end fs-1'} to={'/'}><i className="bi bi-x-lg"></i></Link>
            <h1>Add a team member</h1>
            <p className={'text-muted'}>Set email, location, and role.</p>

            <div className={'d-flex justify-content-center'}>
                <div className={'w-50'}>
                    <h4>Info</h4>
                    <input className={'w-100 form-control'} placeholder={'First Name'} value={newFirstName}
                           onChange={event => setNewFirstName(event.target.value)}
                           type="text" name="firstName"/><br/>
                    <input className={'w-100 form-control'} placeholder={'Last Name'} value={newLastName}
                           onChange={event => setNewLastName(event.target.value)}
                           type="text" name="firstName"/><br/>
                    <input className={'w-100 form-control'} placeholder={'Email'} value={newEmail}
                           onChange={event => setNewEmail(event.target.value)}
                           type="text" name="email"/><br/>
                    <input className={'w-100 form-control'} placeholder={'Phone'} value={newPhone}
                           onChange={event => setNewPhone(event.target.value)}
                           type="text" name="phoneNumber"/><br/>

                    <h4>Role</h4>
                    <div>
                        <label htmlFor={'role-regular'} className={'form-check-label'}>Regular</label>
                        <input id={'role-regular'} className={'form-check-input float-end'}
                               checked={newRole === "regular"} onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="regular"/>
                    </div>
                    <div>
                        <label htmlFor={'role-admin'} className={'form-check-label'}>Admin</label>
                        <input id={'role-admin'} className={'form-check-input float-end'} checked={newRole === "admin"}
                               onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="admin"/>
                    </div>

                    <div className={'mt-5 d-flex justify-content-end'}>
                        <Link class={'btn btn-primary'} to={'/'} onClick={addMemberHandler}>Create</Link>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default CreateMember;

//
// <div className={'d-flex justify-content-center'}>
//     <div className={'w-50'}>
//         <h4>Info</h4>
//         <input className={'w-100 form-control'} placeholder={'First Name'} value={newFirstName}
//                onChange={event => setNewFirstName(event.target.value)}
//                type="text" name="firstName"/><br/>
//         <input className={'w-100 form-control'} placeholder={'Last Name'} value={newLastName}
//                onChange={event => setNewLastName(event.target.value)}
//                type="text" name="firstName"/><br/>
//         <input className={'w-100 form-control'} placeholder={'Email'} value={newEmail} onChange={event => setNewEmail(event.target.value)}
//                type="email" name="email"/><br/>
//         <input className={'w-100 form-control'} placeholder={'Phone'} value={newPhone} onChange={event => setNewPhone(event.target.value)}
//                type="text" name="phoneNumber"/><br/>
//
//         <h4>Role</h4>
//         <div>
//             <label htmlFor={'role-regular'} className={'form-check-label'}>Regular</label>
//             <input id={'role-regular'} className={'form-check-input float-end'} checked={newRole === "regular"}
//                    onChange={event => setNewRole(event.target.value)}
//                    name={"role"} type="radio" value="regular"/>
//         </div>
//         <div>
//             <label htmlFor={'role-admin'} className={'form-check-label'}>Admin</label>
//             <input id={'role-admin'} className={'form-check-input float-end'} checked={newRole === "admin"}
//                    onChange={event => setNewRole(event.target.value)}
//                    name={"role"} type="radio" value="admin"/>
//
//
//         </div>