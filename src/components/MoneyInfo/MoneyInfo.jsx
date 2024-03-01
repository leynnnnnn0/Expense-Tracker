import "./MoneyInfo.css";
import { accountActions } from "../../store/accountStore";
import { useDispatch } from "react-redux";
import { useGetWalletDetailsQuery } from "../../store/service/data";


const MoneyInfo = () => {
  const dispatch = useDispatch();
  const setShow = (e) => {
    e.preventDefault();
    dispatch(accountActions.show());
  };

  const { data } = useGetWalletDetailsQuery();
  let balance, expense, debt;

  if (data) {
    [{ balance, expense, debt }] = data;
  }

  return (
    <div className="money-info radius padding page-padding">
      <div className="about-moneys">
        <div className="about-money">
          <p>Total Balance</p>
          <h1>₱{balance && balance.toLocaleString()}</h1>
        </div>
        <div className="about-money">
          <p>Total Expense</p>
          <h1>₱{expense && expense.toLocaleString()}</h1>
        </div>
        <div className="about-money">
          <p>Debt</p>
          <h1>₱{debt && debt.toLocaleString()}</h1>
        </div>
        <div className="manage-accounts about-money">
          <button className="radius" onClick={setShow}>
            Manage Account
          </button>
          <button
            className="radius"
            onClick={() => dispatch(accountActions.showAdd())}
          >
            Add Expense
          </button>
        </div>
      </div>
      <div className="light-designs">
        <div className="one radius"></div>
        <div className="two radius"></div>
        <div className="three radius"></div>
        <div className="four radius"></div>
        <div className="five radius"></div>
      </div>
    </div>
  );
}

export default MoneyInfo