import React from "react";
import { FiChevronDown, FiUpload } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import tweetsData from "../data";

let UserTweets = (props) => {
  return (
    <a href="#" className="tweet-container">
      <div className="img-sec">
        <img className="user-avatar" src={props.avatar} alt="user-avatar" />
      </div>
      <div className="tweet-data-sec">
        <div className="user-detail flex">
          <div className="user-name">
            <h3>{props.name}</h3>
            <h4>@{props.username}</h4>
            <span>-</span>
            <h4>{props.date}</h4>
          </div>
          <div className="down-arrow">
            <FiChevronDown />
          </div>
        </div>
        <div className="tweet-data">
          <p className="text">{props.tweetText}</p>
          <p className="hastags">
            {props.hastags.map((el) => {
              return `#${el} `;
            })}
          </p>
          {props.media && (
            <img className="post-media" src={props.media} alt="media" />
          )}
          <div className="extra-info flex">
            <div className="flex">
              <BiMessageRounded />
              <span>{props.replies}</span>
            </div>
            <div className="flex">
              <AiOutlineRetweet />
              <span>{props.retweets}</span>
            </div>
            <div className="flex">
              <AiOutlineHeart />
              <span>{props.likes}</span>
            </div>
            <FiUpload />
          </div>
        </div>
      </div>
    </a>
  );
};

const MiddleBar = () => {
  let key = 0;
  return (
    <div className="middle-bar">
      <h1 className="heading">Home</h1>
      {tweetsData.map((el) => (
        <UserTweets
          key={key++}
          name={el.name}
          username={el.username}
          tweetText={el.tweetText}
          avatar={el.avatar}
          media={el.media}
          replies={el.replies}
          retweets={el.retweets}
          likes={el.likes}
          date={el.date}
          hastags={el.hastags}
        />
      ))}
    </div>
  );
};

export default MiddleBar;
