import {createSlice} from "@reduxjs/toolkit";
import {add, getAll} from "../services/studentService";

const initialState = {
    list: [],
}
export const studentSlice = createSlice({
    name: "students",
    initialState,
    // Su dung "extraReducers" thay vi su dung "reducers" de ket noi den API
    extraReducers: builder => {
        builder.addCase(getAll.fulfilled, (state, action) => {
                state.list = action.payload;
            })
        builder.addCase(add.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
    }
})

export default studentSlice.reducer;