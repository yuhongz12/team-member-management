import React, {useState} from "react";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteMember, updateMember} from "../reducers/members-reducer";


const EditMember = () => {
    const path = useLocation().pathname.split("/")
    const mID = path[path.length - 1]
    const members = useSelector(state => state.members)
    console.log(members);
    const m = members.find((mem) => mem._id.toString() === mID)
    console.log(m);
    let [newFirstName, setNewFirstName] = useState(m.firstName);
    let [newLastName, setNewLastName] = useState(m.lastName);
    let [newEmail, setNewEmail] = useState(m.email);
    let [newPhone, setNewPhone] = useState(m.phoneNumber);
    let [newRole, setNewRole] = useState(m.role);
    const dispatch = useDispatch();
    const updateMemberHandler = () => {
        const updateInfo = {
            ...m,
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            phoneNumber: newPhone,
            role: newRole
        }
        dispatch(updateMember(updateInfo));
    }
    const deleteMemberHandler = () => {
        dispatch(deleteMember(m._id))
    }

    return (
        <div>
            <Link className={'float-end fs-1'} to={'/'}><i className="bi bi-x-lg"></i></Link>
            <h1>Edit a team member</h1>
            <p className={'text-muted'}>Edit contact info, location, and role.</p>

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
                           type="email" name="email"/><br/>
                    <input className={'w-100 form-control'} placeholder={'Phone'} value={newPhone}
                           onChange={event => setNewPhone(event.target.value)}
                           type="text" name="phoneNumber"/><br/>

                    <h4>Role</h4>
                    <div>
                        <label htmlFor={'role-regular'} className={'form-check-label'}>
                            Regular - Can't delete members
                        </label>
                        <input id={'role-regular'} className={'form-check-input float-end'}
                               checked={newRole === "regular"}
                               onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="regular"/>
                    </div>
                    <div>
                        <label htmlFor={'role-admin'} className={'form-check-label'}>
                            Admin - Can delete members
                        </label>
                        <input id={'role-admin'} className={'form-check-input float-end'} checked={newRole === "admin"}
                               onChange={event => setNewRole(event.target.value)}
                               name={"role"} type="radio" value="admin"/>


                    </div>

                    <div className={'d-flex justify-content-between mt-5'}>
                        <Link className={'btn btn-danger'} to={'/'} onClick={deleteMemberHandler}> Delete</Link>
                        <Link className={'btn btn-primary'} to={'/'} onClick={updateMemberHandler}> Update</Link>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default EditMember;