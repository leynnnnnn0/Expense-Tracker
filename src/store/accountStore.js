import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        isShow: false,
        showAdd: false
    },
    reducers: {
        show(state) {
            state.isShow = true;
        },
        hide(state) {
            state.isShow = false;
        },
        showAdd(state) {
            state.showAdd = true;
        },
        hideAdd(state) {
            state.showAdd = false;
        }
    }
})

export const accountActions = accountSlice.actions;

export default accountSlice;