import React from "react";
import { WHO_TO_FOLLOW } from "../data.js";

export default function RightSideBar() {
  let key = 0;
  return (
    <div className="right-side-bar">
      <div className="who-to-follow-sec">
        <h1>Who to follow</h1>
        {WHO_TO_FOLLOW.map((el) => (
          <FollowUser
            key={key++}
            name={el.name}
            userName={el.userName}
            avatar={el.avatar}
          />
        ))}
        <h2>Show more</h2>
      </div>
      <div className="footer">
        <div className="flex">
          <h6>Terms</h6>
          <h6>Privacy policy</h6>
          <h6>Cookies</h6>
          <h6>Ads info</h6>
          <h6>More</h6>
        </div>
        <h5 className="text">© 2020 Twitter, Inc.</h5>
      </div>
    </div>
  );
}

function FollowUser(props) {
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
}
