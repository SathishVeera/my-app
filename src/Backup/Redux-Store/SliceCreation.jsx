import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'React',
    initialState: {count: 0},
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decreament: (state) => {
            state.count -= 1
        }
    }
})
export const {increment, decreament} = counterSlice.actions
export default counterSlice.reducer