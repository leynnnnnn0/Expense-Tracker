import "./History.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import HistoryTable from "../../components/HistoryTable/HistoryTable";

const History = () => {
  return (
    <div className="history">
      <section className="sidebar-section">
        <Sidebar />
          </section>
          <section className="history-contents page-padding">
              <HistoryTable/>
          </section>
    </div>
  );
}

export default History