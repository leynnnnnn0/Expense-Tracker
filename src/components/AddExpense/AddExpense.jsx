import { useState } from "react";
import walletForm from "../../store/walletForm";
import "./AddExpense.css";
import { useDispatch } from "react-redux";
import { accountActions } from "../../store/accountStore";

const AddExpense = () => {
    const dispatch = useDispatch();
    const store = walletForm();
    const [form, setForm] = useState({
        reason: "",
        amount: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const { reason, amount } = form;
        store.addExpense(reason, amount);
        dispatch(accountActions.hideAdd());
    }
  return (
    <div className="add-expense">
      <form className="expense-form page-padding radius">
        <div className="expense-input">
          <input type="text" name="reason" onChange={handleChange}/>
          <p>Reason</p>
        </div>
        <div className="expense-input">
          <input type="Number" name="amount" onChange={handleChange}/>
          <p>Amount</p>
              </div>
              <div className="add-expense-button">
                  <button onClick={handleSubmit}>
                      Add Expense
                  </button>
              </div>
      </form>
    </div>
  );
}

export default AddExpense