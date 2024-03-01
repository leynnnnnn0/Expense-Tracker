import "./ManageAccount.css";
import { useGetWalletDetailsQuery } from "../../store/service/data";
import { useState } from "react";
import walletForm from "../../store/walletForm";
import { accountActions } from "../../store/accountStore";
import { useDispatch } from "react-redux";

const ManageAccount = () => {
  const store = walletForm();
  const { data } = useGetWalletDetailsQuery();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    balance: 0,
    expense: 0,
    debt: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { balance, expense, debt } = form;
    const [{ _id }] = data;
    store.updateWalletInfo(_id, balance, expense, debt);
    dispatch(accountActions.hide());
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
    console.log(form)
  }
 
  return (
    <div className="manage-account">
      <form className="manage-account-form radius page-padding">
        <h3>Manage Account</h3>
        <div className="money-input">
          <input
            type="text"
            value={form.balance}
            name="balance"
            onChange={handleChange}
          />
          <p>Balance</p>
        </div>
        <div className="money-input">
          <input
            type="text"
            value={form.expense}
            name="expense"
            onChange={handleChange}
          />
          <p>Expense</p>
        </div>
        <div className="money-input">
          <input
            type="text"
            value={form.debt}
            name="debt"
            onChange={handleChange}
          />
          <p>Debt</p>
        </div>
        <div className="save-changes">
          <button onClick={handleSubmit}>Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default ManageAccount