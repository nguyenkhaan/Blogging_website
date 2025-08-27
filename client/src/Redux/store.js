import { configureStore } from "@reduxjs/toolkit";
import personalSlice from "./slices/personalSlice";

const store = configureStore({
    reducer: {
        personalInfo: personalSlice.reducer
    }
})
export default store 