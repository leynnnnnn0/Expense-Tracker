import BarChart from "../../components/BarChart/BarChartUi"
import Chart from "../../components/Chart/Chart"
import ManageAccount from "../../components/ManageAccount/ManageAccount"
import MoneyInfo from "../../components/MoneyInfo/MoneyInfo"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler"
import { accountActions } from "../../store/accountStore"
import AddExpense from "../../components/AddExpense/AddExpense"

const Dashboard = () => {
  const isShow = useSelector((state) => state.account.isShow);
  const showAddForm = useSelector((state) => state.account.showAdd);
    const dispatch = useDispatch();
    
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => dispatch(accountActions.hideAdd())}
      >
        {showAddForm && <AddExpense />}
      </OutsideClickHandler>

      <OutsideClickHandler
        onOutsideClick={() => dispatch(accountActions.hide())}
      >
        {isShow && <ManageAccount />}
      </OutsideClickHandler>
      <div className="dashboard">
        <section className="sidebar-section">
          <Sidebar />
        </section>
        <section className="dashboard-contents page-padding">
          <h1>Dashboard</h1>
          <MoneyInfo />
          <div className="charts">
            <Chart />
            <BarChart />
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard