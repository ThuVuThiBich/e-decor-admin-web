import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LocalShippingOutlined,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Home</h3>
          <ul className="sidebarList">
            <NavLink
              className={"sidebarListItem"}
              to="/home"
              activeClassName={"active"}
            >
              <HomeOutlinedIcon className="sidebarIcon" />
              Home
            </NavLink>

            <li className="sidebarListItem ">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>

            <NavLink
              className={"sidebarListItem"}
              to="/shipments"
              activeClassName={"active"}
            >
              <LocalShippingOutlined className="sidebarIcon" />
              Shipments
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink
              className={"sidebarListItem"}
              to="/users"
              activeClassName={"active"}
            >
              <PermIdentity className="sidebarIcon" />
              Users
            </NavLink>
            <NavLink
              className={"sidebarListItem"}
              to="/shops"
              activeClassName={"active"}
            >
              <Storefront className="sidebarIcon" />
              Shops
            </NavLink>
            <NavLink
              className={"sidebarListItem"}
              to="/transactions"
              activeClassName={"active"}
            >
              <AttachMoney className="sidebarIcon" />
              Transactions
            </NavLink>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
