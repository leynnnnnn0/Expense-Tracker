import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountStore";
import { walletApi } from "./service/data";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        [walletApi.reducerPath]: walletApi.reducer
    },
    //helps you with catchingdata
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(walletApi.middleware),
})

export default store;