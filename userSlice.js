import { createSlice } from '@reduxjs/toolkit';
const initalState = {
    userName: ''
}
export const userSlice = createSlice({
    name: 'setUserName',
    initalState,
    reducers: {
        initalizename(state, action){
            state.push(action.payload)
        }
    }


})

//export const {initalizename} = userSlice.action;
export default userSlice.reducer