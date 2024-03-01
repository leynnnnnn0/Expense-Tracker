import { create } from "zustand";
import axios from "axios";

const walletForm = create((set) => ({
    updateWalletInfo: async (_id, balance, expense, debt) => {
        try {
            await axios.put(
              "https://expense-tracker-backend-leynnnnnn.onrender.com/update",
              { _id, balance, expense, debt }
            );
            window.alert("updated successfully")
        } catch (err) {
            console.log(err);
        }
    },
    addExpense: async (reason, amount) => {
        try {
            await axios.post(
              "https://expense-tracker-backend-leynnnnnn.onrender.com/addExpense",
              { reason, amount }
            );
            window.alert("Added successfully!");
        } catch (err) {
            console.log(err)
        }
    },

    reasonsData: [],

    fetchReasonsData: async () => {
        try {
            const res = await axios.post(
              "https://expense-tracker-backend-leynnnnnn.onrender.com/reasons"
            );
            set({ reasonsData: res.data })
            walletForm.getState().getTotalExpenseAmount();
        } catch (err) {
            console.log(err);
        }
    },

    totalExpenseAmount: 0,

    getTotalExpenseAmount: () => {
        const { reasonsData, updateWalletExpense} = walletForm.getState();
        let totalExpenseAmount = 0;
        reasonsData?.map(item => {
            totalExpenseAmount += item.amount;          
        })
        set({ totalExpenseAmount });
        console.log(walletForm.getState().totalExpenseAmount)
        updateWalletExpense("65d9526784ea626f7667ebbf", totalExpenseAmount);
    },

    updateWalletExpense: async (_id, expense) => {
        try {
            const res = await axios.post(
              "https://expense-tracker-backend-leynnnnnn.onrender.com/updateExpense",
              { _id, expense }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
}));

export default walletForm;
