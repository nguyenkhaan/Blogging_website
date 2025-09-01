import { createSlice } from "@reduxjs/toolkit";

const personalSlice = createSlice({
    name: 'personal-info', 
    initialState: {}, //id , name , email, avatar 
    reducers: {
        addInfo: (state , action) => {
            state = action.payload 
        }, 
        updateInfo: (state , action) => {
            state = {
                ...state, 
                ...action.payload //action.payload se la 1 object va no chua cac thong tin can duoc update 
            }
        }
    }
})
export default personalSlice