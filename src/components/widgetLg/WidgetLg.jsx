import { useSelector } from "react-redux";
import { statisticSelector } from "redux/selectors";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const { transactions } = useSelector(statisticSelector);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh" style={{ textAlign: "center" }}>
            Date
          </th>
          <th className="widgetLgTh" style={{ textAlign: "center" }}>
            Amount
          </th>
          <th className="widgetLgTh" style={{ textAlign: "center" }}>
            Service Fee
          </th>
          <th className="widgetLgTh" style={{ textAlign: "center" }}>
            Status
          </th>
        </tr>
        {transactions?.map((item, index) => (
          <tr className="widgetLgTr" key={index}>
            <td className="widgetLgUser">
              <img src={item.shop.avatar} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{item.shop.name}</span>
            </td>
            <td className="widgetLgDate" style={{ textAlign: "center" }}>
              {new Date(item?.transaction?.createdAt).toLocaleDateString(
                "en-us",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              )}
            </td>
            <td className="widgetLgAmount" style={{ textAlign: "center" }}>
              ${item?.amount}
            </td>
            <td className="widgetLgAmount" style={{ textAlign: "center" }}>
              ${(item?.amount * item?.serviceFeePercentage).toFixed(1)}
            </td>
            <td className="widgetLgStatus" style={{ textAlign: "center" }}>
              <Button type={item?.transaction?.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
