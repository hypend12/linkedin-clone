import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphbWFpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">{
          user.displayName[0]
        } </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">7,500</p>
        </div>

        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">7,460</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react.js")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("designer")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
