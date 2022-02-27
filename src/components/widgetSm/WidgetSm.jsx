import "./widgetSm.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <button className="widgetSmButton">
            View
            <ArrowForwardIcon className="widgetSmIcon" />
          </button>
        </li>
      </ul>
    </div>
  );
}
