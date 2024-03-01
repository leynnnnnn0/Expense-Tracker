import "./HistoryTable.css"
import walletForm from "../../store/walletForm";
import { useEffect } from "react";

const HistoryTable = () => {
  const store = walletForm();
  useEffect(() => {
    store.fetchReasonsData();
    console.log(store.reasonsData)
  }, [2]);
  const data = store.reasonsData;

  return (
    <div className="history-table radius">
      <table>
        <tr>
          <th>Date</th>
          <th>Reason</th>
          <th>Amount</th>
        </tr>
        {data?.map((item) => (
          <tr>
            <td>{item.createdAt?.slice(0, 10)}</td>
            <td>{item.reason}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default HistoryTable