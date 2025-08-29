import { createSlice } from "@reduxjs/toolkit";

const personalSlice = createSlice({
    name: 'personal-info', 
    initialState: {}, //id , name , email, avatar 
    reducers: {
        addInfo: (state , action) => {
            state = action.payload 
        }
    }
})
export default personalSlice