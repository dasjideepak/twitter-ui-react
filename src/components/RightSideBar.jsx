import React from "react";
import WHO_TO_FOLLOW from "../user.js";

const FollowUser = (props) => {
  return (
    <div className="user-follow flex">
      <div className="flex">
        <img src={props.avatar} alt="user-avatar" />
        <div className="user-name">
          <h3>{props.name}</h3>
          <h4>@{props.userName}</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
};

const RightSideBar = () => {
  return (
    <div className="right-side-bar">
      <div className="who-to-follow-sec">
        <h1>Who to follow</h1>
        {WHO_TO_FOLLOW.map((el) => (
          <FollowUser
            name={el.name}
            userName={el.userName}
            avatar={el.avatar}
          />
        ))}
        <h2>Show more</h2>
      </div>
    </div>
  );
};

export default RightSideBar;
