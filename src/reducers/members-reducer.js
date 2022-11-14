import members from "../data/members.json"
import {createSlice} from "@reduxjs/toolkit";


const membersSlice = createSlice({
    name: 'members',
    initialState: members,
    reducers: {
        deleteMember(state, action) {
            const index = state.findIndex(m =>
            m._id === action.payload);
            state.splice(index, 1);
        },
        createMember(state, action) {
            state.unshift({
                ...action.payload,
                _id: (new Date()).getTime()
            })
        }
    }
});

export default membersSlice.reducer;
export const {createMember, deleteMember} = membersSlice.actions;